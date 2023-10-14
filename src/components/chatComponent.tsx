import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

function ChatComponent() {
  const [message, setMessage] = useState("");

  return (
    <Card className="bg-black rounded-lg p-4 flex flex-col items-center justify-center w-full mt-4 max-w-4xl">
      {/* Chat Area */}
      <div className="flex flex-col w-full h-48 overflow-y-auto p-2">
        {/* Sample Message */}
        <div className="flex items-center mb-2">
          <Avatar className="mr-2">
            <AvatarImage src="/logo.png" />
          </Avatar>
          <div className="text-white bg-gray-700 rounded-lg p-2">
            Welcome.
          </div>
        </div>
      </div>

      <div className="flex items-center mt-2 w-full">
        <Textarea
          className="flex-grow rounded-lg text-black"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <Button className="ml-2 bg-red-700">Send</Button>
      </div>
    </Card>
  );
}

export default ChatComponent;
