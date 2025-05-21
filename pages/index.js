// "use client";
// import { useState } from "react";
// import { ethers } from "ethers";
// import axios from "axios";
// import { NFTMarketplaceAddress, NFTMarketplaceABI } from "@/context/contracts";
// import Button from '@mui/material/Button';
// import DashboardLayoutBasic from '@/pages/components/DashboardLayout';
// import { SignInPage } from '@toolpad/core/SignInPage';
// import WalletConnectButton from "./components/WalletConnectButton";

import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroScetion";
import NFTGrid from "@/components/NFTGrid";


const Home = () => {
  const nfts = [
    { id: 1, title: "Cyber Ape", price: "2.5 ETH", image: "/nfts/nft-7.jfif" },
    { id: 2, title: "Pixel Samurai", price: "1.8 ETH", image: "/nfts/nft-2.webp" },
    { id: 3, title: "Ethereal Galaxy", price: "3.2 ETH", image: "/nfts/nft-3.jfif" },
    { id: 4, title: "Mystic Warrior", price: "2.0 ETH", image: "/nfts/nft-4.webp" },
    { id: 5, title: "Dark Phantom", price: "2.7 ETH", image: "/nfts/nft-5.jfif" },
    { id: 6, title: "Golden Samurai", price: "4.1 ETH", image: "/nfts/nft-6.webp" },
  ];

  return (
<div className="mt-24">
<HeroSection />
<NFTGrid data={nfts} title="Featured NFTs" />
<AboutSection />
<NFTGrid data={nfts} title="Discover more NFTs" />
</div>
  );
};


export default Home;
