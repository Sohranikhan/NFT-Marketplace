import {createContext, useState, useEffect, useContext} from "react"
import { BrowserProvider } from "ethers";
import { NFTMarketplaceAddress, NFTMarketplaceABI } from "@/context/contracts";

const WalletContext = createContext();

export const WalletProvider = ({children}) => {
 const [wallet, setWallet] = useState(null);

  async function connectWallet() {
    try {
    if (window.ethereum) {
      const provider = new BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setWallet(accounts[0]);
    } else {
      alert("Install MetaMask");
    }
  } catch (error) {
     console.log("Something went wrong");
      
  }
  }  

  const disconnectWallet = () => {
    setWallet(null);
  }

    useEffect(() => {
        if (window.ethereum) {
        window.ethereum.on("accountsChanged", (accounts) => {
            setWallet(accounts[0]);
        });
        }
    }, []);

    return (
        <WalletContext.Provider value={{wallet, connectWallet, disconnectWallet}}>
            {children}
        </WalletContext.Provider>
    )

};


export const useWallet = () => {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error("useWallet must be used within a WalletProvider");
    }
    return context;
}
