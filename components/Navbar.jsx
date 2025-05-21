// components/Navbar.js
import Link from 'next/link'; // Ensure Link is imported correctly
import WalletConnectButton from './WalletConnectButton';
import { AlignRight, Coins, DollarSign, Home, Menu, Store } from 'lucide-react';
import Image from 'next/image';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { BellDot } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full z-50 fixed top-0 left-0 flex justify-between items-center isolate p-3 rounded-xl bg-white/70 backdrop-blur-sm shadow-lg ring-1 ring-black/5">
        <div className={`burgermenue sm:hidden cursor-pointer `}>
            
  <Sheet>
  <SheetTrigger>
  <AlignRight />
  </SheetTrigger>
  <SheetContent className="bg-background">
    <SheetHeader>
      <SheetTitle><Link href={'/'} className="text-forground text-lg font-bold"><Image src="/logo.png" alt="logo" width={50} height={50}/></Link>      </SheetTitle>
      <SheetDescription className="flex flex-col items-start justify-start gap-y-4 text-inherit mt-8">
      <Link href="/" className="font-semibold text-forground hover:text-gray-300 flex items-center hover:animate-pulse gap-1 text-base">
        <Home size={30} className='text-accent' />
          Home
        </Link>
        <Link href="/nft-marketplace" className="font-semibold text-forground hover:text-gray-300 flex items-center hover:animate-pulse gap-1 text-base">
          <Store size={30} className='text-accent' />
          NFT Marketplace
        </Link>
        <Link href="/sale-nft" className="font-semibold text-forground hover:text-gray-300 flex items-center hover:animate-pulse gap-1 text-base">
          <DollarSign size={30} className='text-accent' />
          Sale NFT
        </Link>
        <Link href="/">
        <BellDot size={30} className="text-black" />
        </Link>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>
      <Link href={'/'} className="text-forground text-lg font-bold"><Image src="/logo.png" alt="logo" width={50} height={50}/></Link>
      <div className="hidden sm:flex items-center justify-center gap-x-6 ">
        <Link href="/" className="text-forground hover:text-gray-300 flex items-center hover:animate-pulse gap-1">
        <Home size={20} className='text-accent' />
          Home
        </Link>
        <Link href="/nft-marketplace" className="text-forground hover:text-gray-300 flex items-center hover:animate-pulse gap-1 text-sm">
          <Store size={20} className='text-accent' />
          NFT Marketplace
        </Link>
        <Link href="/sale-nft" className="text-forground hover:text-gray-300 flex items-center hover:animate-pulse gap-1 text-sm">
          <DollarSign size={20} className='text-accent' />
          Sale NFT
        </Link>
        <Link href="/">
        <BellDot size={30} className="text-black" />
        </Link>
      </div>
        <WalletConnectButton />
    </nav>
  );
};

export default Navbar; // Ensure default export
