import React from "react";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Card from "@/components/verizon/verizonComponents/Card";

function AppleOneActivationCard() {
  return Card({
    title: "Activate Apple One for Free.",
    description: "Apple One is included in your plan and haven't activated it.",
    image:
      "https://ss7.vzw.com/is/image/VerizonWireless/perk-tile-apple-one-3x2-small?&scl=1",
    buttonText: "Activate",
  });
}

export default AppleOneActivationCard;
