"use client";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { useState, useEffect } from "react";
import { users } from "@/users";
import { motion } from "framer-motion";
import { useChat } from "ai/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import ChatComponent from "@/components/chatComponent";


export default function Home() {
  const [recap, setRecap] = useState(null);
  const [recapBulletPoints, setRecapBulletPoints] = useState<string[] | null>(
    null
  );

  const [boxOne, setBoxOne] = useState<string | null>(null);
  useEffect(() => {
    const getRecap = async () => {
      const response = await fetch("/api/userInfoBulletPoint", {
        method: "POST",
        body: JSON.stringify({
          topic: "data usage",
          user: users[0],
        }),
      });

      //response has a readable stream
      if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let result = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          result += decoder.decode(value);
          setBoxOne(result);
        }
      }
    };
    getRecap();
  }, []);

  const playAudio = async () => {
    try {
      // fetch audio from the server-side API
      const response = await fetch("/api/textToSpeach", {
        method: "POST",
        body: JSON.stringify({
          /* your request body if any */
          text: "Hi, this is Blake",
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // const audioBlob = await response.blob();
      // const audioUrl = URL.createObjectURL(audioBlob);
      // const audio = new Audio(audioUrl);
      // console.log(audio);
      // audio.play();
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

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: 0 },
  };

  const container = {
    hidden: { opacity: 0 },

    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div className="bg-black min-h-screen">
    <motion.div className=" mx-auto flex-col px-24 flex pb-4 items-center justify-between">
      <Header />
      <div className="text-white text-4xl flex justify-center w-full mt-64 text-center mb-48">Welcome to the new Verizon Experience, Max.</div>
      {/* <a href="#" className="text-white text-sm underline-offset-4 underline text-left flex justify-start w-full mt-3">Edit profile & settings</a> */}
      </motion.div>
      <motion.div
        className="flex items-center mx-auto flex-col mt-4 px-24"
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5 }}
      >
        {/* <Card className="bg-black rounded-lg p-4 flex flex-col items-center justify-center w-full px-10">
          <motion.ul className="list-disc pl-5 text-white space-y-3 my-6" variants={container} initial="hidden" animate="show">
            {recapBulletPoints?.map((point, index) => (
              <motion.li variants={listItem} key={index} className="text-white text-left bullet-point">
                {point}
              </motion.li>
            )) || null}
            </motion.ul>
        </Card> */}
        {/* <div className="flex space-x-4 max-w-full ">
          <Card className="bg-black rounded-lg w-1/3 p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
            <CardTitle className="mb-1 text-white">
              Unlimited Ultimate
            </CardTitle>
            <CardDescription className="text-gray-300">
              Your ultimate, iPhone plan, with Apple One
            </CardDescription>

            <img src="/15.avif" alt="iPhone 15" />
            <Button className="w-3/4 bg-red-700 mt-4">Manage Plan</Button>
            
          </Card>
          <Card className="bg-black bg-opacity-100 rounded-lg w-1/3 p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
          <CardTitle className="mb-1 text-white mx-10 text-center">
             Activate Apple One for Free.
            </CardTitle>
            <div className="text-gray-300 flex-col text-sm px-10 text-center">
              Apple One is included in your plan and haven't activated it.
            </div>
            <img
              src="https://ss7.vzw.com/is/image/VerizonWireless/perk-tile-apple-one-3x2-small?&scl=1"
              alt="Perk Image"
              className="rounded-xl my-16 w-2/3"
            />
            
            <Button className="w-3/4 bg-red-700 mt-4">Activate</Button>
          </Card>
          <Card className="bg-black bg-opacity-100 rounded-lg w-1/3 p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
          <CardTitle className="mb-1 text-white mx-10 text-center">
             You've had your screen repaired recently.
            </CardTitle>
            <div className="text-gray-300 flex-col text-sm px-10 text-center">
              You can still get AppleCare+ with Theft and Loss.
            </div>
            <img
              src="https://ss7.vzw.com/is/image/VerizonWireless/applecareplus-cc3000/?wid=465&hei=465&fmt=webp"
              alt="Perk Image"
              className="rounded-xl my-7 w-2/3"
            />
            <Button className="w-3/4 bg-red-700 mt-4">Chat</Button>
          </Card>
        </div> */}
        <ChatComponent />

        </motion.div>
      </motion.div>
    
  );
}
