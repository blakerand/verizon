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
      "Net zero carbon emissions in our operations by 2035. 100% of our total annual electricity consumption backed by renewable energy by 2030.",
    image: "/15.avif",
    buttonText: "Manage Plan",
  });
}

export default UltimatePlanCard;
