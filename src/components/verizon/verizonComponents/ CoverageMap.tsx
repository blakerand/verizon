import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function CoverageMap() {
  return (
    <iframe
      src="https://gismaps.verizon.com/map4/?token=920hJbTf4B5i5f26V1ijGSRxAVX5U5qomWxPXg1cJ4HOlvq6iffk"
      className="rounded-xl w-full h-[500px]"
    />
  );
}

export default CoverageMap;
