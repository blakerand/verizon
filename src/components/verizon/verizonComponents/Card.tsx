import React from "react";
import {
  Card as CardBase,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Card({ title, description, image, buttonText }) {
  return (
    <CardBase className="bg-black bg-opacity-100 rounded-lg w-full h-full p-4 flex flex-col items-center transform transition-transform duration-500 hover:scale-105">
      <CardTitle className="mb-1 text-white mx-10 text-center">
        {title}
      </CardTitle>
      <div className="text-gray-300 flex-col text-sm px-10 text-center">
        {description}
      </div>
      {typeof image === "function" ? image() : <img src={image} className={`w-[80%] rounded-lg ${title.includes('Free') || title.includes('screen') || title.includes('Building') || title.includes('divide') || title.includes('tomorrow') || title.includes('Social') ? 'mt-20 ' : 'mt-0'}`} />}
      <Button className="w-3/4 bg-red-700 mt-4 absolute bottom-10">
        {buttonText}
      </Button>
    </CardBase>
  );
}

export default Card;
