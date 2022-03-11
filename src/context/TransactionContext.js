import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = globalThis; //globalThis.ethereum

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionsContract
    })

    return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {   
    
    const [connectedAccount, setConnectedAccount] = useState("");
    const [currentAccount, setCurrentAccount] = useState("");
    
    const checkIfWalletIsConnect = async () => {
        if (!ethereum) return alert("Please Install MetaMask");

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        console.log(accounts);
        return !!accounts;
    }

    const connectWallet = async () => {
        try{
            if (!ethereum) return alert("Please Install MetaMask");
            const accounts = await ethereum.request({ method: 'eth_requestAccounts', });
            
            setCurrentAccount(accounts[0]);
            //globalThis.location.reload();
        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum Object.")
        }
    }

    useEffect(() => {
        checkIfWalletIsConnect();
    }, []);

    return (
        //wrapping entire react application with all of the data passed into it
        //Anything wrapped inside this transaction provider will be rendered and have access
        //to this value object
        <TransactionContext.Provider value={{ connectWallet, }}>
            {children}
        </TransactionContext.Provider>
    )
}