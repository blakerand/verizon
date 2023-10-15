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

function SocialCard1() {
  return Card({
    title: "Building a better future.",
    description: "10M youth provided with digital skills training by 2030.",
    image: "/Social1.jpg",
    buttonText: "Learn more",
  });
}

export default SocialCard1;
