
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Image from "next/image";

const AboutSection =()=> {
  
  return (
    <section className="w-full min-h-[500px] flex flex-col mt-4 lg:mt-auto lg:flex-row items-center justify-between px-6 lg:px-20 bg-background text-foreground">
      {/* Right Side - Image with GSAP Animation */}
      <div className="mt-10 lg:mt-0">
        <Image
          src="/nft.webp"
          alt="NFT Marketplace"
          width={400}
          height={400}
          className="rounded-xl shadow-lg"
        />

      </div>
      {/* Left Side - Text Content */}
      <div className="max-w-xl text-center lg:text-left space-y-6 mt-3 lg:mt-0">
      <h1 className="text-3xl lg:text-4xl font-bold">
      RESERVE AND SELL YOUR NFT EASILY
      </h1>

        <p className="text-lg text-foreground/70">
        Earning income in TreasureNFT is simple: just RESERVE and then TRADE to EARN


        </p>
        
          <Button className="px-7 py-5 text-lg rounded-2xl"><LogIn /> Sign In</Button>
          
      </div>
    </section>
  );
}
export default AboutSection