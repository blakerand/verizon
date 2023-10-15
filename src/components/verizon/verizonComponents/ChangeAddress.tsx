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

function ChangeAddressCard() {
  return (
    <Card className="bg-black  bg-opacity-100 rounded-lg w-full h-full p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
      <CardTitle className="mb-1 text-white mx-10 text-center">
        Change Address
      </CardTitle>
      <div className="text-gray-300 flex-col text-sm px-10 text-center">
        Update your address below.
      </div>
      <div>
        Current Address:
        <div className="text-gray-300 flex-col text-sm px-10 text-center">
          1234 Main St.
        </div>
        <div className="text-gray-300 flex-col text-sm px-10 text-center">
          New York, NY 10001
        </div>
        <div className="text-gray-300 flex-col text-sm px-10 text-center">
          United States
        </div>
      </div>
      <input
        type="text"
        className="px-4 py-2 rounded-lg mt-4"
        placeholder="New Address"
      />
      <Button className="w-1/2 bg-red-700 mt-4">Save</Button>
    </Card>
  );
}

export default ChangeAddressCard;
