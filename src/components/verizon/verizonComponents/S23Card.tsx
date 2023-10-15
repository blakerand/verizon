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

function S23Card() {
  return Card({
    title: "Get a Samsung S23 on us.",
    description: "You're in luck for an upgrade.",
    image: "/s23.webp",
    buttonText: "Upgrade",
  });
}

export default S23Card;
