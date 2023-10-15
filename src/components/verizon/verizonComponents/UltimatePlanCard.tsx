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

function UltimatePlanCard() {
  return Card({
    title: "Your ultimate, iPhone plan, with Apple One.",
    description:
      "You are currently on the ultimate plan. You can manage your plan here.",
    image: "/15.avif",
    buttonText: "Manage Plan",
  });
}

export default UltimatePlanCard;
