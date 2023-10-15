"use client";
import { Button } from "@/components/ui/button";
import { users } from "@/users";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/app/UserContext";
import { Avatar } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { variants } from "@/components/animations";

export default function Login() {
  const router = useRouter();
  const { setCurrentUser } = useUserContext();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants(0)}
      className="min-h-screen bg-black flex flex-col items-center justify-center"
    >
      <motion.img 
        initial="hidden"
        animate="visible"
        variants={variants(0.2)}
        src="/logo.png" 
        alt="Verizon Logo" 
        width={60} 
        height={50} 
      />

      <motion.p
        initial="hidden"
        animate="visible"
        variants={variants(0.4)}
        className="text-white text-3xl font-bold"
      >
        Select a User to Login
      </motion.p>
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants(0.6)}
        className="space-x-4 mt-8 flex flex-row"
      >
        {users.map((user, index) => (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants(0.7 + index * 0.1)}
            className="flex flex-col justify-center text-center items-center"
            key={index}
          >
            <motion.div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100px",
                height: "100px",
                backgroundColor: "#ffffff",
                color: "black",
                fontSize: "18px",
                borderRadius: "50%",
              }}
            >
              <p className="text-4xl font-bold">
                {user.firstName.charAt(0).toUpperCase()}
              </p>
            </motion.div>
            <Button
              className="bg-red-700 font-light mt-5 text-white"
              onClick={() => {
                setCurrentUser(user);
                router.push("/");
              }}
            >
              Login as {user.firstName}
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
