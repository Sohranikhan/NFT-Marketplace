// "use client";
// import { useState } from "react";
// import axios from "axios";
// import { ethers } from "ethers";
// import { nftMarketplaceAddress, nftMarketplaceABI } from "../constants";

// export default function NFTUpload({ signer }) {
//   const [file, setFile] = useState(null);
//   const [name, setName] = useState("");
//   // const [price, setPrice] = useState("");

//   const handleFileUpload = async () => {
//     if (!file || !name || !price) return alert("Fill all fields!");

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("pinataMetadata", JSON.stringify({ name }));
//     formData.append("pinataOptions", JSON.stringify({ cidVersion: 0 }));

//     const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
//       headers: {
//         pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
//         pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
//       },
//     });

//     const metadata = {
//       name,
//       image: `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`,
//     };

//     const metadataRes = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", metadata, {
//       headers: {
//         pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
//         pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
//       },
//     });

//     const nftURI = `https://gateway.pinata.cloud/ipfs/${metadataRes.data.IpfsHash}`;
//     await mintNFT(nftURI);
//   };

//   const mintNFT = async (tokenURI) => {
//     const contract = new ethers.Contract(nftMarketplaceAddress, nftMarketplaceABI, signer);
//     const tx = await contract.mintNFT(tokenURI, ethers.parseEther(price), { value: ethers.parseEther("0.01") });
//     await tx.wait();
//     alert("NFT Minted!");
//   };

//   return (
//     <div>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <input type="text" placeholder="NFT Name" onChange={(e) => setName(e.target.value)} />
//       <input type="text" placeholder="Price in ETH" onChange={(e) => setPrice(e.target.value)} />
//       <button onClick={handleFileUpload}>Mint NFT</button>
//     </div>
//   );
// }


import React from 'react'

const uploadnft = () => {
  return (
    <div>uploadnft</div>
  )
}

export default uploadnft