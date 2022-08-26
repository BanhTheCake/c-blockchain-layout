import React from "react";
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 pt-16 pb-8 gradient-bg-footer text-white">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="w-[180px] 2xl:w-[300px] mb-8 md:mb-0 md:mr-8 flex-shrink-0 flex">
                <img className="w-full h-full" src={Logo} alt="logo" />
            </div>
            <ul className="flex flex-wrap    w-full md:w-fit md:justify-center justify-between">
                {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => {
                    return (
                        <li key={item + index} className="px-6 md:px-8 py-2 md:mx-6 cursor-pointer hover:brightness-75 transition-all">{item}</li>
                    )
                })}
            </ul>
        </div>
        <p className="text-center text-base mb-2">Come join us and hear for the unexpected miracle</p>
        <p className="text-center text-base mb-6">info@banhthecake.com</p>
        <div className="h-[1px] bg-gray-300 mb-4" />
        <div className="flex justify-between">
            <p>@banhthecake</p>
            <p>All rights reserved</p>
        </div>
    </div>
  );
};

export default Footer;
