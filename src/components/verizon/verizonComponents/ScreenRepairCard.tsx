import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ScreenRepairCard() {
  return (
    <Card className="bg-black bg-opacity-100 rounded-lg w-full h-full p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
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
  );
}

export default ScreenRepairCard;
