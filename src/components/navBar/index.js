import { useState, useContext } from 'react';
import { HiMenu, HiMenuAlt4 } from 'react-icons/hi';
import { TransactionContext } from "../../context/TransactionContext";
import { AiOutlineClose, AiFillPlayCircle } from 'react-icons/ai';

import Image from 'next/image'
import logo from '../../../public/obelisk.png';

const NavbarItem = ({ title, classProps }) => {
    return(
        <li className={'mx-4 cursor-pointer ${classProps}'}>
            {title}
        </li>
    );
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const { connectWallet, checkIfWalletIsConnect } = useContext(TransactionContext);

    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <Image
                    src={logo}
                    width={100}
                    height={100}
                />
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Wallets", "Market", "World Center Exchange", "Discover Obelisks"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))}
                <li >
                <button
                    type="button"
                    onClick={connectWallet}
                    className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                >
                <AiFillPlayCircle className="text-white mr-2" />
                <p className="text-white text-base font-semibold"> 
                    Connect Wallet
                </p>
            </button>
                </li>
            </ul>
            <div className="flex relative">
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=> setToggleMenu(false)}/>
                    : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=> setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <u1
                        className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
                        "
                    >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Wallets", "Market", "World Center Exchange", "Discover Obelisks"].map((item, index) => (
                        <NavbarItem key={item + index} title={item} classProps="my-2 text-lg" />
                        ))}
                    </u1>
                )}
            </div>
        </nav>
    );
}
export default Navbar;