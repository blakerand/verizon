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

function ScreenRepairCard() {
  return Card({
    title: "You've had your screen repaired recently.",
    description: "You can still get AppleCare+ with Theft and Loss.",
    image:
      "https://ss7.vzw.com/is/image/VerizonWireless/applecareplus-cc3000/?wid=465&hei=465&fmt=webp",
    buttonText: "Chat",
  });
}

export default ScreenRepairCard;
