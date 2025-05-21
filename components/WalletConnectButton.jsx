import React from 'react'
import { useWallet } from '@/context/WalletContext'
import { Button } from './ui/button';

const WalletConnectButton = () => {
    const { wallet, connectWallet, disconnectWallet } = useWallet();
    return (
        <Button onClick={wallet ? disconnectWallet : connectWallet} varient={wallet ? 'default' : 'destructive'} >
            {wallet ? `Connected: ${wallet.substring(0, 6)}...` : "Connect Wallet"}
        </Button>
    )
}

export default WalletConnectButton