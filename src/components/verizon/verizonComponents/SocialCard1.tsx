import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function SocialCard1() {
  return (
    <Card className="bg-black bg-opacity-100 rounded-lg w-full h-full p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
      <CardTitle className="mb-1 absolute top-10 text-white mx-10 text-center">
        Building a better future.
      </CardTitle>
      <div className="text-gray-300 absolute top-[70px] flex-col text-sm px-10 text-center">
        10M youth provided with digital skills training by 2030.
      </div>
      <img
        src="/Social1.jpg"
        className="rounded-xl my-16 w-2/3"
      />
      <Button className="w-3/4 bg-red-700 mt-4 absolute bottom-10">Learn more</Button>
    </Card>
  );
}

export default SocialCard1;
