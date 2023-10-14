import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import Typewriter from "typewriter-effect";

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

function ChatComponent() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "Hey Max, welcome to Verizon. How can I assist you today?",
    },
  ]);

  const [currentMessage, setCurrentMessage] = useState("");

  return (
    <Card className="bg-black rounded-lg p-4 flex flex-col items-center justify-center w-full mt-4 max-w-4xl">
      <div className="flex flex-col w-full h-48 overflow-y-auto p-2">
        {messages.map((m, index) => (
          <div className="flex items-center mb-2">
            <Avatar className="mr-2">
              <AvatarImage src="/logo.png" />
            </Avatar>
            <div className="text-white bg-gray-700 rounded-lg p-2">
              <Typewriter
                onInit={async (typewriter) => {
                  //Uncomment for voice
                  // if (index === messages.length - 1 && m.role === "system")
                  //   await playAudio(m.content);
                  typewriter
                    .typeString(m.content)
                    .callFunction(() => {
                      const cursorElement = document.querySelector(
                        ".Typewriter__cursor"
                      ) as HTMLElement;
                      if (cursorElement) {
                        cursorElement.style.display = "none";
                      }
                    })
                    .start();
                }}
                options={{
                  delay: 25,
                }}
              />
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
          }}
        >
          Send
        </Button>
      </div>
    </Card>
  );
}

export default ChatComponent;
