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
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import CoverageMap from "@/components/verizon/verizonComponents/ CoverageMap";
import { useSpeechRecognition } from "react-speech-recognition";

import { useRouter } from "next/navigation";
import { useUserContext } from "@/app/UserContext";
import {
  variants,
  languageVariants,
  chatComponentVariants,
} from "@/components/animations";

export default function Home() {
  const { currentUser, setCurrentUser } = useUserContext();

  // useEffect(() => {
  //   const newComponentConfig = Object.fromEntries(
  //     Object.entries(componentConfig).map(([key, value]) => [key, false])
  //   );
  //   setComponentConfig(newComponentConfig as ComponentConfig);
  // }, [currentUser]);

  const handleSignOutFromHome = () => {
    setCurrentUser(null);
    setChatComponent(false);
  };

  const router = useRouter();
  const [recap, setRecap] = useState(null);
  const [recapBulletPoints, setRecapBulletPoints] = useState<string[] | null>(
    null
  );
  const [chatComponent, setChatComponent] = useState(false);
  const [getStarted, setGetStarted] = useState(true);
  const [boxOne, setBoxOne] = useState<string | null>(null);
  const [voiceMode, setVoiceMode] = useState(true);
  const [voiceModeDisabled, setVoiceModeDisabled] = useState(false);
  const [visibleCards, setVisibleCards] = useState<string[]>([]);
  const { browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      console.error("Browser does not support speech recognition.");
      setVoiceModeDisabled(true);
      setVoiceMode(false);
    }
    //Check if Arc Broswer
    setTimeout(function () {
      if (
        getComputedStyle(document.documentElement).getPropertyValue(
          "--arc-palette-background"
        )
      ) {
        setVoiceModeDisabled(true);
        setVoiceMode(false);
      }
    }, 1000);
  }, []);

  const handleVisibleCards = (cards) => {
    console.log(cards);
    console.log("ran");
    setVisibleCards(cards);
  };

  type ComponentConfigKeys =
    | "ultimatePlan"
    | "appleOneActivation"
    | "screenRepair"
    | "changeAddress"
    | "dataCard"
    | "resetPasswordCard"
    | "s23Card"
    | "socialCard1"
    | "socialCard2"
    | "socialCard3"
    | "pixel8Card"
    | "fiveGCard"
    | "iphone15Card"
    | "coverageMap";

  // Define the shape of your componentConfig object
  type ComponentConfig = {
    [key in ComponentConfigKeys]: boolean;
  };

  const [componentConfig, setComponentConfig] = useState<ComponentConfig>({
    ultimatePlan: false,
    appleOneActivation: false,
    screenRepair: false,
    changeAddress: false,
    dataCard: false,
    resetPasswordCard: false,
    s23Card: false,
    socialCard1: true,
    socialCard2: true,
    socialCard3: true,
    pixel8Card: false,
    iphone15Card: false,
    fiveGCard: false,
    coverageMap: false,
  });

  useEffect(() => {
    console.log(visibleCards);
    if (visibleCards.length > 0) {
      // Create a new state object by mapping the current state
      // and setting the visibility to true for the cards in the visibleCards array
      const newComponentConfig = Object.fromEntries(
        Object.entries(componentConfig).map(([key, value]) => [key, false])
      );
      visibleCards.forEach((card) => {
        if (newComponentConfig.hasOwnProperty(card)) {
          const key = card as ComponentConfigKeys;
          newComponentConfig[key] = true;
        }
      });

      // Update the state with the new configuration
      setComponentConfig(newComponentConfig as ComponentConfig);
      console.log(newComponentConfig);
    }
  }, [visibleCards]);

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

  if (!currentUser) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants(0)}
        className="min-h-screen bg-black flex flex-col items-center justify-center"
      >
        <motion.img
          initial="hidden"
          animate="visible"
          variants={variants(0.2)}
          src="/logo.png"
          alt="Verizon Logo"
          width={60}
          height={50}
        />

        <motion.p
          initial="hidden"
          animate="visible"
          variants={variants(0.4)}
          className="text-white text-3xl font-bold"
        >
          Select a User to Login
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants(0.6)}
          className="space-x-4 mt-8 flex flex-row"
        >
          {users.map((user, index) => (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants(0.7 + index * 0.1)}
              className="flex flex-col justify-center text-center items-center"
              key={index}
            >
              <motion.div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#ffffff",
                  color: "black",
                  fontSize: "18px",
                  borderRadius: "50%",
                }}
              >
                <p className="text-4xl font-bold">
                  {user.firstName.charAt(0).toUpperCase()}
                </p>
              </motion.div>
              <Button
                className="bg-red-700 font-light mt-5 text-white"
                onClick={() => {
                  setCurrentUser(user);
                  setGetStarted(true);
                }}
              >
                Login as {user.firstName}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-black min-h-screen min-w-[750px]"
      initial="hidden"
      animate="visible"
      variants={variants(0.2)}
    >
      <motion.div
        className=" mx-auto flex-col px-24 flex pb-4 items-center justify-between"
        variants={variants(0.5)}
      >
        <Header onSignOut={handleSignOutFromHome} />
        {!anyComponentActive && (
          <motion.div
            className="text-white text-4xl flex justify-center w-full mt-64 text-center"
            variants={languageVariants(0, false)}
          >
            Welcome to the new Verizon Experience, {currentUser.firstName}.
          </motion.div>
        )}

        {getStarted && (
          <motion.div variants={languageVariants(1, true)}>
            <Button
              className="bg-red-700 mt-4 w-full"
              onClick={() => {
                setChatComponent(true);
                setGetStarted(false);
              }}
            >
              Get Started
            </Button>
          </motion.div>
        )}

        {getStarted && (
          <motion.div
            className="flex items-center mt-4 mb-48"
            variants={languageVariants(2, true)}
          >
            <div className="flex items-center flex-col space-x-2">
              <div className="flex flex-row items-center space-x-2 mb-2">
                <Switch
                  id="voice-mode"
                  className="bg-red-700 text-red-700"
                  onCheckedChange={(checked) => {
                    setVoiceMode(checked);
                  }}
                  disabled={voiceModeDisabled}
                  checked={voiceMode}
                />
                <Label htmlFor="voice-mode" className="text-white">
                  Voice Mode
                </Label>
              </div>

              {voiceModeDisabled && (
                <p className="text-gray-300 text-xs ">
                  Voice Mode works best on Chrome and Safari
                </p>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
      <ComponentManager config={componentConfig} />

      {chatComponent && (
        <motion.div
          initial="hidden"
          animate={chatComponent ? "visible" : "hidden"}
          variants={chatComponentVariants}
        >
          <ChatComponent
            voiceMode={voiceMode}
            handleVisibleCards={handleVisibleCards}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
