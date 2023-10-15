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

function Pixel8Card() {
  return (
    <Card className="bg-black bg-opacity-100 rounded-lg w-1/3 p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
      <CardTitle className="mb-1 text-white mx-10 text-center absolute top-10">
        Get a Google Pixel 8 on us.
      </CardTitle>
      <div className="text-gray-300 absolute top-[70px] flex-col text-sm px-10 text-center">
        You're in luck for an upgrade.
      </div>
      <img src="/pixel8.webp" alt="Pixel 8" className='h-[70%]' />
      <Button className="w-3/4 bg-red-700 mt-4 absolute bottom-10">Upgrade</Button>
    </Card>
  );
}

export default Pixel8Card;
