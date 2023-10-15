import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import Typewriter from "typewriter-effect";
import { users } from "@/users";

const currentUser = users[0];

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
    source.start(0);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

const submitMessage = async (message: string) => {
  const response = await fetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({
      message: message,
      profile: users[0],
    }),
  });
  const responseBody = await response.json(); // Extract the response content
  return responseBody.message;
};

function ChatComponent() {
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

  return (
    <Card className="bg-black rounded-lg p-4 flex flex-col items-center justify-center w-full mt-4 max-w-4xl">
      <div className="flex flex-col w-full h-48 overflow-y-auto p-2">
        {messages.map((m, index) => (
          <div className="flex items-center mb-2">
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
                    // if (index === messages.length - 1 && m.role === "system")
                    //   await playAudio(m.content);

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
        <Textarea
          className="flex-grow rounded-lg text-black"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
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
          }}
        >
          Send
        </Button>
      </div>
    </Card>
  );
}

export default ChatComponent;

