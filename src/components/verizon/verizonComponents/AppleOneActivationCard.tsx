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

function AppleOneActivationCard() {
  return (
    <Card className="bg-black bg-opacity-100 rounded-lg w-full h-full p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
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
  );
}

export default AppleOneActivationCard;
