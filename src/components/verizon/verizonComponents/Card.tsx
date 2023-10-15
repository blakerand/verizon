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
      {typeof image === "function" ? (
        image()
      ) : (
        <img
          src={image}
          className={`${
            title.includes("iPhone") ? "h-[160px] 2xl:h-[270px]" : "h-[60%]"
          } ${
            title.includes("Samsung") || title.includes("Pixel")
              ? "h-[180px] mt-6 2xl:h-[270px]"
              : "h-[60%]"
          } rounded-lg ${
            title.includes("tomorrow") ||
            title.includes("Social") ||
            title.includes("Quality")
              ? "h-[150px] mt-4 2xl:h-[200px]"
              : "mt-0"
          }
          ${
            title.includes("Free") ? "h-[150px] mt-6 2xl:h-[200px]"
              : "mt-0"
          }
          ${
            title.includes("screen") ? "h-[150px] mt-2 2xl:h-[200px] 2xl:mt-6"
              : "mt-0"
          }
          ${
            title.includes("divide") ? "h-[150px] mt-10 2xl:h-[200px] 2xl:mt-10 "
              : "mt-0"
          }
          ${
          title.includes("Building") 
          ? "h-[150px] mt-5 2xl:mt-10 2xl:h-[200px]"
          : "mt-0"
          }`}
        />
      )}
      <Button className="w-3/4 bg-red-700 mt-4 absolute bottom-5">
        {buttonText}
      </Button>
    </CardBase>
  );
}

export default Card;
