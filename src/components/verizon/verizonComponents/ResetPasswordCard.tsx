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

function ResetPasswordCard() {
  return (
    <Card className="bg-black bg-opacity-100 rounded-lg w-1/3 p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
      <CardTitle className="mb-1 text-white mx-10 text-center">
        Reset Password
      </CardTitle>
      <div className="text-gray-300 flex-col text-sm px-10 text-center pb-5">
        Enter your new password below.
      </div>
      <input type="password" className='rounded-lg px-4 py-2' placeholder="New Password" />
      <input type="password" className='rounded-lg px-4 py-2 mt-2' placeholder="Confirm Password" />
      <Button className="w-1/2 bg-red-700 mt-4">Reset</Button>
    </Card>
  );
}

export default ResetPasswordCard;
