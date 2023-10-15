"use client";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { useState, useEffect } from "react";
import { users } from "@/users";
import { motion } from "framer-motion";
import { useChat } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import ChatComponent from "@/components/chatComponent";
import ComponentManager from "@/components/verizon/componentManager";
import { User } from "lucide-react";

const currentUser = users[0];

export default function Home() {
  const [recap, setRecap] = useState(null);
  const [recapBulletPoints, setRecapBulletPoints] = useState<string[] | null>(
    null
  );
  const [chatComponent, setChatComponent] = useState(false);
  const [getStarted, setGetStarted] = useState(true);
  const [boxOne, setBoxOne] = useState<string | null>(null);
  const chatComponentVariants = {
    hidden: { y: "100vh" },
    visible: { y: "20vh", transition: { type: "spring", stiffness: 60 } },
  };

  const componentConfig = {
    ultimatePlan: false,
    appleOneActivation: false,
    screenRepair: false,
  };

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

  const anyComponentActive = Object.values(componentConfig).some(
    (value) => value
  );

  return (
    <motion.div className="bg-black min-h-screen">
      <motion.div className=" mx-auto flex-col px-24 flex pb-4 items-center justify-between">
        <Header />
        {!anyComponentActive && (
          <div className="text-white text-4xl flex justify-center w-full mt-64 text-center">
            Welcome to the new Verizon Experience, {currentUser.firstName}.
          </div>
        )}

        {/* <a href="#" className="text-white text-sm underline-offset-4 underline text-left flex justify-start w-full mt-3">Edit profile & settings</a> */}
        {getStarted && (
          <Button
            className="bg-red-700 mt-4 mb-48 w-1/4"
            onClick={() => {
              setChatComponent(true);
              setGetStarted(false);
            }}
          >
            Get Started
          </Button>
        )}
      </motion.div>
      <ComponentManager config={componentConfig} />
      <motion.div
        className="flex items-center mx-auto flex-col mt-4 px-24"
        initial="hidden"
        animate={chatComponent ? "visible" : "hidden"}
        variants={chatComponentVariants}
      >
        {chatComponent && <ChatComponent />}
      </motion.div>
    </motion.div>
  );
}
