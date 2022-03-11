import React, { useContext } from "react";
import { AiFillPlayCircle, AiOutlineUpload } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { TransactionContext } from "../../context/TransactionContext";
import { Loader } from "./";
import Link from "next/link";

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({placeholder, name, type, value, handleChange}) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
)

const Welcome = () => {
    const { connectWallet } = useContext(TransactionContext);

    //if this works, that means we are transferring all of the data
    //from TransactionContext to all of our components [can check in window.ethereum]
    // USED EARLIER TO GENERATE Transactions.json and copied over to Client Directory
    //console.log(value);

    const handleSubmit = () => {

    }

    const handleMint = () => {

    }

    return (
        <div className="flex w-full flex-col justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className=" flex flex-1 justify-start flex-col mf:mr-10">
                    <div>
                        <h1 className="text-3xl sm:text-5xl text-white py-1">
                            Excavators n Obelisks
                        </h1>
                        <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                            Share your efforts, resources, and stories. <br /> Excavate. Build. Battle. Explore. Innovate. 
                        </p>
                    </div>
                    <div className="p-5 sm:w-80 w-full flex flex-col justify-start items-center blue-glassmorphism mt-10">
                        <Input placeholder="Amount" name="amount" type="number" handleChange={() => {}}/>
                        
                        <div className="h-[1px] w-full bg-gray-400 my-2" />

                        {false ? (
                            <Loader />
                        ) : (
                            <button
                                type="button"
                                className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                            >
                            <AiOutlineUpload className="text-white mr-2" />
                            <Link 
                                styles={{color:"white"}}
                                href={"/story"}
                            > 
                                Mint
                            </Link>
                            </button>
                        )}

                    </div>
                    
                    <h2 className="text-2xl sm:text-5xl text-white py-10">
                        <br />Undercut Your Minerals... <br /> NOT Your NFTs
                    </h2>
                    
                    <div className="grid sm:grid-cols-3 grid-cols-3 w-full mt-10">
                        <div className={'rounded-tl-2xl ${commonStyles}'}>
                        {
                            
                        }
                        <div className={commonStyles}>
                            <center> hieumuses <br /> bigdickdev </center> 
                        </div>

                        <div className={commonStyles}> 
                            <center>sabstuh <br/> talented digital artist </center>
                        </div>
                        
                        <div className={commonStyles}>
                            <center> TheBriManXD <br /> Marketing and Finance </center> 
                        </div>
                        
                        <div className={commonStyles}>
                            <center> eddybear <br /> bigdickdev </center> 
                        </div>
                            
                        <div className={commonStyles}> 
                            <center> burke <br/> talented 3D artist </center>
                        </div>
                        
                        <div className={commonStyles}>
                            <center> alex.win <br /> Marketing and Finance </center> 
                        </div>
                            
                        <div className={commonStyles}>
                            <center> yammshy <br /> world builder </center> 
                        </div>
                            
                        <div className={commonStyles}> 
                            <center> deanbaby <br/> talented 3D artist </center>
                        </div>
                            
                        <div className={commonStyles}>
                            <center> habibi <br /> ??? </center> 
                        </div>
                    </div>
                </div>
            
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize = {21} color="#fff" />
                                </div>
                                <BsInfoCircle fontSize = {17} color="#fff" />
                            </div>
                            <div>
                                <p className="text-white font-light text-sm">
                                    0xsjkf...sjkafa
                                </p>
                                <p className="text-white font-semibold text-lg mt-1">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-5 sm:w-80 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder="Address To" name="addressTo" type="text" handleChange={() => {}}/>
                        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={() => {}}/>
                        <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={() => {}}/>
                        <Input placeholder="Enter Message" name="message" type="text" handleChange={() => {}}/>
                        
                        <div className="h-[1px] w-full bg-gray-400 my-2" />

                        {false ? (
                            <Loader />
                        ) : (
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                            >
                            Send Now
                            </button>
                        )}

                    </div>

                </div>
            </div>
        </div>
    </div>
    );
}
export default Welcome;