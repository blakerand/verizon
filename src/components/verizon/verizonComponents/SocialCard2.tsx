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

function SocialCard2() {
  return (
    <Card className="bg-black bg-opacity-100 rounded-lg w-1/3 p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
      <CardTitle className="mb-1 text-white mx-10 text-center">
        Closing the digital divide.
      </CardTitle>
      <div className="text-gray-300 flex-col text-sm px-10 text-center">
        Our commitment to helping schools and small businesses
        succeed in today's digital landscape is changing lives.
      </div>
      <img
        src="/Social2.jpg"
        className="rounded-xl my-16 w-2/3"
      />
      <Button className="w-3/4 bg-red-700 mt-4">Learn more</Button>    </Card>
  );
}

export default SocialCard2;
