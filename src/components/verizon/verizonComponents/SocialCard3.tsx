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

function SocialCard3() {
  return (
    <Card className="bg-black bg-opacity-100 rounded-lg w-full h-full p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
      <CardTitle className="mb-1 text-white absolute top-10 mx-10 text-center">
        Striving for a cleaner tomorrow.
      </CardTitle>
      <div className="text-gray-300 flex-col absolute top-[90px] text-sm px-10 text-center">
        Net zero carbon emissions in our operations by 2035.
        100% of our total annual electricity consumption backed by renewable
        energy by 2030.
      </div>
      <img
        src="/Social3.jpg"
        className="rounded-xl my-16 w-2/3"
      />
      <Button className="w-3/4 bg-red-700 mt-4 absolute bottom-10">Learn more</Button>    </Card>
  );
}

export default SocialCard3;
