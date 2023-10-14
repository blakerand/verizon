import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <header className="flex w-full justify-between items-center p-5 ">
      <Image src="/logo.png" alt="Verizon Logo" width={60} height={50} />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <a href="#" className="text-white font-bold">
          Shop
        </a>
        <Separator orientation="vertical" />
        <a href="#" className="text-white font-bold">
          <p className="text-Helvetica">Sign in</p>
        </a>
      </div>
    </header>
  );
}
