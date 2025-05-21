import { Facebook, Github, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border py-8">
      <div className="max-w-7xl px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center text-foreground">
        {/* Left Section - Logo & Name */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-foreground">
       <div>
        <Link href={'/'} className="text-forground text-lg font-bold"><Image src="/logo.png" alt="logo" width={50} height={50}/></Link>
        <span className="text-xl font-bold">NFT Marketplace</span>
        </div>


          {/* Column 2: Marketplace Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Marketplace</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/marketplace" className="hover:text-primary transition">Explore NFTs</Link></li>
              <li><Link href="/sell-nft" className="hover:text-primary transition">Sell NFT</Link></li>
              <li><Link href="/wallet" className="hover:text-primary transition">Wallet</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-primary transition">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition">Blog</Link></li>
              <li><Link href="/support" className="hover:text-primary transition">Support</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition">Terms & Conditions</Link></li>
            </ul>
          </div>


        {/* Right - Social Media Icons */}
        <div className="mt-4 md:mt-0 flex flex-col space-x-4 text-xl">
        <h3 className="text-lg font-semibold mb-3">Our Social Platforms</h3>
<div className="t-4 md:mt-0 flex space-x-4 text-xl ">

          <Link href="https://twitter.com" target="_blank" className="hover:text-primary">
            <Twitter />
          </Link>
          <Link href="https://facebook.com" target="_blank" className="hover:text-primary">
            <Facebook />
          </Link>
          <Link href="https://github.com" target="_blank" className="hover:text-primary">
            <Github />
          </Link>
</div>
        </div>
      </div>

      </div>
      {/* Bottom Section */}
      <div className="text-center text-xs text-muted-foreground mt-6">
        © {new Date().getFullYear()} NFT Marketplace. All rights reserved.
      </div>
    </footer>
  );
}
