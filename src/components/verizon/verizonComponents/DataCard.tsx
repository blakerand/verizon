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

function DataCard() {
  return (
    <Card className="bg-black bg-opacity-100 rounded-lg w-1/3 p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
      <CardTitle className="mb-1 text-white mx-10 text-center">
        You've used 14 gigabytes of data this month.
      </CardTitle>
      <div className="text-gray-300 flex-col text-sm px-10 text-center">
        You can upgrade to an Unlimited plan for $10 more per month.
      </div>
      <img src="/14.webp" alt="iPhone 14 pro" />
      <Button className="w-3/4 bg-red-700 mt-4">Upgrade</Button>
    </Card>
  );
}

export default DataCard;
