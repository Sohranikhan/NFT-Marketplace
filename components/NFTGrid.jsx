import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Coins } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);


export default function NFTGrid({data, title}) {
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%", // Starts animation when 80% of the grid is in view
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="w-full py-16 px-6 lg:px-20 bg-primary/10">
      <h2 className="text-3xl font-bold mb-14 text-foreground">
        {title}
      </h2>
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {data.map((nft) => (
          <Card key={nft.id} className="overflow-hidden max-w-xs hover:scale-105 border-none transition-transform bg-background/5 text-foreground shadow-xl">
            <CardContent className="p-0">
                <div className="w-full h-auto rounded-xl hover:scale-110 transition-all">
              <Image
                src={nft.image}
                alt={nft.title}
                width={300}
                height={300}
                className="rounded-xl w-full h-64 object-cover p-2"
                />
                </div>
              <div className="p-4 ">
                <h3 className="text-lg font-semibold">{nft.title}</h3>
                <div className="flex justify-between">
<div className="flex items-center gap-1">
<Image 
src={'/avatar.avif'}
alt={nft.title}
width={10}
height={10}
className="h-5 w-5 object-cover rounded-full" />
<p className="text-sm">by Dawood</p>
</div>
                <p className="text-primary flex gap-x-1 w-fit px-2 py-1 text-sm rounded"><Coins /> {nft.price}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
