import React from "react";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import Typewriter from "typewriter-effect";
import { users } from "@/users";
import { MicrophoneIcon } from "@heroicons/react/24/solid";
import { Group, Square } from "lucide-react";
import "babel-polyfill";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const currentUser = users[0];

const submitMessage = async (message: string) => {
  const response = await fetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({
      message: message,
      profile: users[0],
    }),
  });
  const responseBody = await response.json();
  return responseBody.message;
};

function ChatComponent({ voiceMode }: { voiceMode: boolean }) {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `Hey ${currentUser.firstName
        .charAt(0)
        .toUpperCase()}${currentUser.firstName.slice(
        1
      )}, welcome to Verizon. How can I assist you today?`,
    },
  ]);

  const [currentMessage, setCurrentMessage] = useState("");
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const messageDone = () => {
    setTyping(true);
    setMessages([...messages, { role: "user", content: currentMessage }]);
    submitMessage(currentMessage).then((response) => {
      setMessages([
        ...messages,
        { role: "user", content: currentMessage },
        { role: "system", content: response },
      ]);
    });
    setCurrentMessage("");
  };

  const handleTextareaKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      messageDone();
    }
  };

  const playAudio = async (message: string) => {
    try {
      // fetch audio from the server-side API
      const response = await fetch("/api/textToSpeach", {
        method: "POST",
        body: JSON.stringify({
          text: message,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const audioContext = new window.AudioContext();
      const source = audioContext.createBufferSource();
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.onended = () => {
        setTyping(false);
      };
      source.start(0);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    setCurrentMessage(transcript);
  }, [transcript]);

  useEffect(() => {
    if (!listening) {
      if (currentMessage !== "") {
        messageDone();
      }
    }
  }, [listening]);

  useEffect(() => {
    if (!typing) {
      SpeechRecognition.startListening();
    }
  }, [typing]);

  return (
    <Card
      className="bg-black absolute mx-auto bottom-8 left-0 right-0
    rounded-lg p-4 flex flex-col items-center justify-center w-full max-w-4xl"
    >
      <div
        className="flex flex-col w-full h-48 overflow-y-auto"
        ref={messagesRef}
      >
        {messages.map((m, index) => (
          <div
            className={`flex items-center mb-2 ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <Avatar className="mr-2">
              {m.role === "system" ? (
                <AvatarImage src="/logo.png" />
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#ffffff",
                    color: "black",
                    fontSize: "18px",
                    borderRadius: "50%",
                  }}
                >
                  {currentUser.firstName.charAt(0).toUpperCase()}
                </div>
              )}
            </Avatar>

            <div className="text-white bg-gray-700 rounded-lg p-2">
              {m.role === "user" ? (
                <div>{m.content}</div>
              ) : (
                <Typewriter
                  onInit={async (typewriter) => {
                    //Uncomment for voice
                    // if (index === messages.length - 1 && m.role === "system") {
                    //   await playAudio(m.content);
                    // }

                    typewriter
                      .typeString(m.content)

                      .callFunction(() => {
                        const cursorElements = document.querySelectorAll(
                          ".Typewriter__cursor"
                        );
                        const latestCursorElement = cursorElements[
                          cursorElements.length - 1
                        ] as HTMLElement;
                        if (latestCursorElement) {
                          latestCursorElement.style.display = "none";
                        }
                        if (!voiceMode) {
                          setTyping(false);
                        }
                      })
                      .start();
                  }}
                  options={{
                    delay: index === 0 ? 10 : 50,
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center mt-2 w-full">
        {voiceMode ? (
          <React.Fragment>
            <div className="bg-white p-4 shadow-lg rounded-lg inline-flex items-center w-full h-10">
              <p className="text-black">{currentMessage}</p>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Textarea
              className="flex-grow rounded-lg text-black"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyDown={handleTextareaKeyDown}
              placeholder="Type your message..."
            />
            <Button
              className="ml-2 bg-red-700"
              onClick={() => {
                setMessages([
                  ...messages,
                  { role: "user", content: currentMessage },
                ]);
                submitMessage(currentMessage).then((response) => {
                  setMessages([
                    ...messages,
                    { role: "user", content: currentMessage },
                    { role: "system", content: response },
                  ]);
                });
                setCurrentMessage("");
              }}
            >
              Send
            </Button>
          </React.Fragment>
        )}
      </div>
    </Card>
  );
}

export default ChatComponent;
