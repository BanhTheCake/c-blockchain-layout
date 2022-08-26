import React, { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE__API__KEY;

const TransactionsItem = ({
    addressFrom,
    addressTo,
    amount,
    message,
    timeSlamp,
}) => {
    const [gif, setGif] = useState('');

    useEffect(() => {
        const getData = async () => {
            fetch(
                `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&limit=1`
            )
                .then((res) => res.json())
                .then((data) => setGif(data?.data?.images?.preview_gif?.url))
                .catch((err) => {
                    setGif(
                        'https://media1.giphy.com/media/cQKBQoVA2GK9IYT3Ym/giphy-preview.gif?cid=2934378802467a9c0eff2dc222708f3ae0be8cefb47c0aa9&rid=giphy-preview.gif&ct=g'
                    );
                });
        };

        getData();
    }, []);

    return (
        <div className=" sm:mx-4 p-6 rounded-[8px] white-glassmorphism mb-8 flex flex-col">
            <div className="flex items-center">
                <p className="flex-shrink-0 min-w-[70px] mr-2">From :</p>
                <p>{addressFrom}</p>
            </div>
            <div className="flex items-center">
                <p className="flex-shrink-0 min-w-[70px] mr-2">To :</p>
                <p>{addressTo}</p>
            </div>
            <div className="flex items-center mb-2">
                <p className="flex-shrink-0 min-w-[70px] mr-2">Amount :</p>
                <p>{amount}</p>
            </div>
            <p className="break-all mb-4 flex-1">Message: {message}</p>
            <div className="aspect-video relative mb-4 h-[200px]">
                <img className="w-full h-full object-cover" src={gif} alt="gif" />
                <span className="block absolute bottom-0 left-[50%] table translate-x-[-50%] translate-y-[50%] whitespace-nowrap px-4 py-2 bg-black rounded-[6px] text-cyan-400">
                    {timeSlamp}
                </span>
            </div>
        </div>
    );
};

const Transactions = () => {
    return (
        <div className="px-4 sm:px-8 md:px-16 py-16 gradient-bg-transactions text-white">
            <h3 className="text-center text-[2rem] mb-16 leading-tight">
                Latest Transactions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
                <TransactionsItem
                    addressFrom="0xeb3...0942"
                    addressTo="0xeb3...0w23"
                    amount="0.01ETh"
                    message="Hello, I am banhTheCake"
                    timeSlamp="12/25/2021, 10:49:43 PM"
                />
                <TransactionsItem
                    addressFrom="0xeb3...0942"
                    addressTo="0xeb3...0w23"
                    amount="0.01ETh"
                    message="Hello, I am banhTheCake lorem is my name"
                    timeSlamp="12/25/2021, 10:49:43 PM"
                />
                <TransactionsItem
                    addressFrom="0xeb3...0942"
                    addressTo="0xeb3...0w23"
                    amount="0.01ETh"
                    message="Hello, I am banhTheCake"
                    timeSlamp="12/25/2021, 10:49:43 PM"
                />
                <TransactionsItem
                    addressFrom="0xeb3...0942"
                    addressTo="0xeb3...0w23"
                    amount="0.01ETh"
                    message="Hello, I am banhTheCake"
                    timeSlamp="12/25/2021, 10:49:43 PM"
                />
            </div>
        </div>
    );
};

export default Transactions;
