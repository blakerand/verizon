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

function Card() {
  return (
    <Card className="bg-black bg-opacity-100 rounded-lg w-full h-full p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
      <CardTitle className="mb-1 text-white mx-10 text-center absolute top-10">
        {title}
      </CardTitle>
      <div className="text-gray-300 absolute top-[70px] flex-col text-sm px-10 text-center">
        {description}
      </div>
      <img src="{image}" className='' />
      <Button className="w-3/4 bg-red-700 mt-4 absolute bottom-10">{button}</Button>
    </Card>
  );
}

export default Card;
