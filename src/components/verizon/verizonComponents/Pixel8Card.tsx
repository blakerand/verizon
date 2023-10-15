import React from "react";
import {
  // Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Card from "@/components/verizon/verizonComponents/Card";

function Pixel8Card() {
  return Card({
    title: "Get a Google Pixel 8 on us.",
    description: "You're in luck for an upgrade.",
    image: "/pixel8.webp",
    buttonText: "Upgrade",
  });
}

export default Pixel8Card;
