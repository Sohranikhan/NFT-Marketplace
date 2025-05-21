
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BadgeDollarSign, ScanEye } from "lucide-react";

const HeroSection =()=> {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col mt-4 lg:mt-auto lg:flex-row items-center justify-evenly lg:justify-between px-6 lg:px-20 bg-background text-foreground">
      {/* Left Side - Text Content */}
      <div className="max-w-xl text-center lg:text-left space-y-6">
      <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent">
  Discover, Collect, and Sell NFTs
</h1>

        <p className="text-lg text-foreground/70">
          Join the world of digital assets and own rare collectibles.
          Buy, sell, and trade securely on our marketplace.
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <Button className="px-6 py-5 text-lg rounded-2xl"><ScanEye /> Explore NFTs</Button>
          <Button variant="outline" className="px-6 py-5 text-lg rounded-2xl hover:bg-accent text-foreground">
           <BadgeDollarSign /> Sell Your NFT
          </Button>
        </div>
      </div>

      {/* Right Side - Image with GSAP Animation */}
      <div ref={imageRef} className="mt-10 lg:mt-0">
        <Image
          src="/nft.webp"
          alt="NFT Marketplace"
          width={400}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
export default HeroSection