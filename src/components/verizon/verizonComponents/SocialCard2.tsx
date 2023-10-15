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
    title: "Closing the digital divide.",
    description:
      " Our commitment to helping schools and small businesses succeed in today's digital landscape is changing lives.",
    image: "/Social2.jpg",
    buttonText: "Learn more",
  });
}

export default SocialCard1;
