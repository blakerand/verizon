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

function S23Card() {
  return (
    <Card className="bg-black bg-opacity-100 rounded-lg w-full h-full p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
      <CardTitle className="mb-1 absolute top-10 text-white mx-10 text-center">
        Get a Samsung S23 on us.
      </CardTitle>
      <div className="text-gray-300 absolute top-[70px] flex-col text-sm px-10 text-center">
        You're in luck for an upgrade.
      </div>
      <img src="/s23.webp" alt="Samsung s23 " className='max-h-[65%]' />
      <Button className="w-3/4 bg-red-700 mt-4 absolute bottom-10">Upgrade</Button>
    </Card>
  );
}

export default S23Card;
