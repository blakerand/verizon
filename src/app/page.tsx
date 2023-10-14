"use client";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { useState, useEffect } from "react";
import { users } from "@/users";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [recap, setRecap] = useState(null);
  const [recapBulletPoints, setRecapBulletPoints] = useState<string[] | null>(
    null
  );

  useEffect(() => {
    const getRecap = async () => {
      const response = await fetch("/api/userInfo", {
        method: "POST",
        body: JSON.stringify(users[0]),
      });

      const data = await response.json();
      const json = JSON.parse(data.message);
      console.log(json);
      setRecap(json.message.replace(":", ""));
      setRecapBulletPoints(json.bulletPoints);
      // console.log(recap);
      // console.log(recapBulletPoints);
    };
    getRecap();
  }, []);
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
    <motion.div className="flex bg-black min-h-screen pb-48 flex-col items-center justify-between">
      <Header />
      <div className="flex items-center mx-auto flex-col px-24 space-y-8">
      <div className="text-white text-4xl font-bold">Welcome Back, Max</div>
      <motion.div
        className="flex items-center mx-auto flex-col px-24 space-y-8"
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-black rounded-lg p-4 flex flex-col items-center justify-center w-full px-10">
          <motion.ul className="list-disc pl-5 text-white space-y-3 my-6" variants={container} initial="hidden" animate="show">
            {recapBulletPoints?.map((point, index) => (
              <motion.li variants={listItem} key={index} className="text-white text-left bullet-point">
                {point}
              </motion.li>
            )) || null}
            </motion.ul>
        </Card>
        <div className="flex space-x-4 max-w-full ">
          <Card className="bg-black rounded-lg p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
            <CardTitle className="mb-1 text-white">
              Get an iPhone 15 Pro on us.
            </CardTitle>
            <CardDescription className="text-gray-300">
              Looks like you're due for an upgrade
            </CardDescription>

            <img src="/15.avif" alt="iPhone 15" />
            <Button className="w-3/4 mt-4 bg-red-700">I'm in</Button>
          </Card>
          <Card className="bg-white bg-opacity-100 rounded-lg p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
            <img
              src="https://ss7.vzw.com/is/image/VerizonWireless/perk-tile-disney-bundle-3x2-small?&scl=1"
              alt="Perk Image"
              className="rounded-xl my-8 w-2/3"
            />
            <CardTitle className="mb-1 text-black mx-10 text-center">
              We know you love movies, series & more
            </CardTitle>
            <CardFooter className="text-gray-700 flex-col text-sm">
              Unlimited Plus Plan
              <p className="text-xs text-green-600">$8.99/line perk savings</p>
            </CardFooter>
            <Button className="w-3/4 bg-red-700">Upgrade</Button>
          </Card>
          <Card className="bg-black rounded-lg p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
            <CardTitle className="mb-1 text-white">
              Get an iPhone 15 Pro on us.
            </CardTitle>
            <CardDescription className="text-gray-300">
              Looks like you're due for an upgrade
            </CardDescription>

            <img src="/15.avif" alt="iPhone 15" />
            <Button className="w-3/4 mt-4 bg-red-700">I'm in</Button>
          </Card>
        </div>
        
        </motion.div>
      </div>
    </motion.div>
  );
}
