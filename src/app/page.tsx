import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex bg-black min-h-screen  flex-col items-center justify-between">
      <Header />
      <div className="text-white text-4xl font-bold">
        Welcome Back, Max
      </div>
      <div className="flex space-x-4">
        <Card>
          <CardContent>
            <CardTitle>iPhone 15 Pro</CardTitle>
            <CardDescription>Suggested for you</CardDescription>
          </CardContent>
          <CardFooter>
            <Button>View</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Suggestion 2</CardTitle>
            <CardDescription>Description for suggestion 2</CardDescription>
          </CardContent>
          <CardFooter>
            <Button>View</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Suggestion 3</CardTitle>
            <CardDescription>Description for suggestion 3</CardDescription>
          </CardContent>
          <CardFooter>
            <Button>View</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
