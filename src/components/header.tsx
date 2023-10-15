import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useUserContext } from '@/app/UserContext';

export default function Header(props) {
  const { currentUser } = useUserContext();

  const handleSignOut = () => {
    props.onSignOut();
  };
  

  return (
    <header className="flex w-full justify-between items-center p-5 ">
      <Image src="/logo.png" alt="Verizon Logo" width={60} height={50} />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <a href="#" className="text-white font-bold">
          Shop
        </a>
        <Separator orientation="vertical" />
        {currentUser && (
          <a onClick={handleSignOut} className="text-white font-bold cursor-pointer">
            <p className="text-Helvetica">Sign out {currentUser.firstName}</p> 
          </a>
        )}
      </div>
    </header>
  );
}
