import React, { useMemo, useRef, useState } from 'react';
import { RiRestartLine } from 'react-icons/ri';
import { FaEthereum } from 'react-icons/fa';
import { MdOutlineMoreVert } from 'react-icons/md';

const IconLoading = () => {
    return (
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    )
}

const Input = ({ label }) => {
    return (
        <input
            className="outline-none white-glassmorphism rounded-[6px] border-none px-4 py-2 2xl:px-6 2xl:py-3 text-base w-full mb-[1.4rem]"
            placeholder={label}
            type="text"
        />
    );
};

const Welcome = () => {
    const [isLoading, setIsLoading] = useState(false);
    const clearTime = useRef(null);

    const handleClick = (e) => {
        e.preventDefault()
        if (clearTime.current) clearTimeout(clearTime.current);
        setIsLoading(true);
        clearTime.current = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="text-white flex flex-col md:flex-row py-16">
            <div className="flex flex-1 flex-col">
                <h1 className="h2-title">
                    Buy and sell <br /> trusted Crypto
                </h1>
                <p className="text-base text-gray-300 max-w-[80%] leading-6  mb-8">
                    Explore the crypto world. buy and sell crypto coins easily,
                    trusted cryptoon to be your crypto market partner
                </p>
                <button className="flex px-4 py-2 bg-blue-600 w-fit rounded-full items-center cursor-pointer mb-8 hover:brightness-[85%] transition-all">
                    <RiRestartLine size={26} />
                    <p className="text-base ml-2">Let's get started</p>
                </button>
                <div className="grid grid-cols-2 sm:grid-cols-3 mb-8 rounded-[12px] overflow-hidden border-[1px] border-[rgba(256,256,256,0.6)] ">
                    <div className="welcome-tag">Binance</div>
                    <div className="welcome-tag ">CoinMarketCap</div>
                    <div className="welcome-tag">Blockchain</div>
                    <div className="welcome-tag">Coinbase</div>
                    <div className="welcome-tag">ECNCapital</div>
                    <div className="welcome-tag">Principal</div>
                </div>
            </div>
            <div className="flex flex-1 flex-col md:pl-12 ">
                <div className=" flex flex-col w-[350px] max-w-full md:w-[350px] 2xl:w-[500px] h-[180px] 2xl:h-[250px] mb-8 p-4 mx-auto white-glassmorphism eth-card">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                            <FaEthereum size="1.4rem" />
                        </div>
                        <MdOutlineMoreVert
                            size="2rem"
                            className="cursor-pointer px-1 select-none hover:brightness-90 transition-all"
                        />
                    </div>
                    <p className="mt-auto">0x232...23sf</p>
                    <p className="font-semibold tracking-wide">Ethereum</p>
                </div>
                <form className="max-w-[100%] w-[600px] md:max-w-[450px] 2xl:w-[700px] 2xl:max-w-[700px] mx-auto p-4 sm:p-8 blue-glassmorphism">
                    <Input label="Your Name" />
                    <Input label="Amount" />
                    <Input label="Keyword (Gif)" />
                    <Input label="Twitter @" />
                    <Input label="Message" />
                    <div className="h-[0.1px] bg-white mb-[1.6rem]" />
                    <button
                        type="submit"
                        className="w-full rounded-full flex justify-center items-center py-2 2xl:py-3 text-base border-[1px] border-slate-700 leading-[1.6rem] hover:bg-slate-800 transition-all"
                        onClick={handleClick}
                    >
                        { isLoading ? <>
                            <IconLoading />
                            Sending ...
                        </> : 'Send Now'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Welcome;
