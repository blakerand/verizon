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

function SocialCard3() {
  return Card({
    title: "Striving for a cleaner tomorrow.",
    description:
      "Net zero carbon emissions in our operations by 2035. 100% of our total annual electricity consumption backed by renewable energy by 2030.",
    image: "/Social3.jpg",
    buttonText: "Learn more",
  });
}

export default SocialCard3;
