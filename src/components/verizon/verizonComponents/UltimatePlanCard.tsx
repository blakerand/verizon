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

function UltimatePlanCard() {
  return (
    <Card className="bg-black rounded-lg w-full h-full p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
      <CardTitle className="mb-1 text-white">
        Unlimited Ultimate
      </CardTitle>
      <CardDescription className="text-gray-300">
        Your ultimate, iPhone plan, with Apple One
      </CardDescription>
      <img src="/15.avif" alt="iPhone 15" className='max-h-[65%]' />
      <Button className="w-3/4 bg-red-700 mt-4 absolute bottom-10">Manage Plan</Button>
    </Card>
  );
}

export default UltimatePlanCard;
