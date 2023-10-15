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

function FiveGCard() {
  return Card({
    title: "#1 in awards for Network Quality.",
    description:
      "30x in a row. – J.D. Power\nNo messy wires. No annual contracts.",
    image: "/fiveg.webp",
    buttonText: "Learn more",
  });
}

// function FiveGCard() {
//   return (
//     <Card className="bg-black bg-opacity-100 rounded-lg w-full h-full p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
//       <CardTitle className="mb-1 absolute top-10 text-white mx-10 text-center">
//         #1 in awards for Network Quality.
//       </CardTitle>
//       <div className="text-gray-300 absolute top-24 flex-col text-sm px-10 text-center">
//         30x in a row. – J.D. Power{" "}
//       </div>
//       <div className="text-gray-300 flex-col absolute top-28 text-sm px-10 text-center">
//         No messy wires. No annual contracts.
//       </div>
//       <img src="/fiveg.webp" className="rounded-xl my-16 w-4/5" />
//       <Button className="w-3/4 bg-red-700 mt-4 absolute bottom-10">
//         Learn more
//       </Button>{" "}
//     </Card>
//   );
// }

export default FiveGCard;
