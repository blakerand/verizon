import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex bg-black min-h-screen pb-48 flex-col items-center justify-between">
      <Header />
      <div className="flex items-center mx-auto flex-col px-24 space-y-8">
      <div className="text-white text-4xl font-bold">
        Welcome Back, Max
      </div>
      <div className="flex space-x-4 max-w-full ">
        <Card className="bg-black rounded-lg p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
          <CardTitle className="mb-1 text-white">Get an iPhone 15 Pro on us.</CardTitle>
          <CardDescription className="text-gray-300">Looks like you're due for an upgrade</CardDescription>
          
          <img src="/15.avif" alt="iPhone 15" />
          <Button className="w-3/4 mt-4 bg-red-700">I'm in</Button>
        </Card>
        <Card 
          className="bg-black rounded-lg p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
          <img src="https://ss7.vzw.com/is/image/VerizonWireless/perk-tile-disney-bundle-3x2-small?&scl=1" alt="Perk Image" className="rounded-xl my-8 w-2/3"/>
          <CardTitle className="mb-1 text-white text-left">We know you love<br /> movies, series & more</CardTitle>
          <CardDescription className="text-gray-300">Unlimited Plus Plan</CardDescription>
          <CardFooter className="text-gray-300 flex-col text-sm">Only a $10 premium to your current plan<p className="text-xs text-green-600">$8.99/line perk savings</p></CardFooter>
          <Button className="w-3/4 bg-red-700">Upgrade</Button>
        </Card>
        <Card className="bg-black rounded-lg p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
          <CardTitle className="mb-1 text-white">Get an iPhone 15 Pro on us.</CardTitle>
          <CardDescription className="text-gray-300">Looks like you're due for an upgrade</CardDescription>
          
          <img src="/15.avif" alt="iPhone 15" />
          <Button className="w-3/4 mt-4 bg-red-700">I'm in</Button>
        </Card>
      </div>
      <Card className="bg-black rounded-lg p-4 flex flex-col items-center justify-center w-full px-10">
          <CardTitle className="mb-1 text-white">Your Recap</CardTitle>
          <CardDescription className="text-gray-300">Looks like you're due for an upgrade</CardDescription>
        </Card>
        </div>
    </div>
  );
}
