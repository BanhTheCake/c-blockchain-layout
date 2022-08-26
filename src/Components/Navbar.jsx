import React, { useEffect, useRef, useState } from 'react';
import Logo from '../assets/logo.png';
import { AiOutlineMenuFold } from 'react-icons/ai';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null)
    const buttonRef = useRef(null)

    const handleClickOutsideMenu = (e) => {
        if (menuRef.current.contains(e.target) || buttonRef.current.contains(e.target) && toggle) return;
        setToggle(!toggle)
    }

    useEffect(() => {
        if (toggle && menuRef.current) {
            window.addEventListener('click', handleClickOutsideMenu)
        }

        return () => {
            if (toggle) {
                window.removeEventListener('click', handleClickOutsideMenu)
            }
        }
    }, [toggle])    

    return (
        <div className="text-white flex py-4 items-center justify-between relative">
            <div className="2xl:w-[250px] md:w-[150px] w-[140px] mr-8 shrink-0 flex">
                <img className="w-full h-full" src={Logo} alt="" />
            </div>
            <ul className="hidden md:flex justify-center items-center flex-1">
                {['Market', 'Exchange', 'Tutorials', 'Wallets'].map(
                    (item, index) => {
                        return (
                            <li
                                key={item + index}
                                className="mr-2 py-[6px] px-4 hover:brightness-75 transition-all"
                            >
                                <a href="#">{item}</a>
                            </li>
                        );
                    }
                )}
                <li className="hover:brightness-[85%] transition-all py-[6px] px-8 rounded-full bg-blue-600">
                    <a href="">Login</a>
                </li>
            </ul>
            <div ref={buttonRef} className="p-2" onClick={() => setToggle(!toggle)}>
                <AiOutlineMenuFold
                    size={30}
                    className="cursor-pointer md:hidden"
                />
            </div>
            {toggle && (
                <ul ref={menuRef} className="md:hidden absolute top-[100%] right-2  p-4 white-glassmorphism w-[400px] max-w-semiFull animate-slideLeft text-base z-20">
                    {['Market', 'Exchange', 'Tutorials', 'Wallets'].map(
                        (item, index) => {
                            return (
                                <li
                                    key={item + index}
                                    className="mr-2 py-[8px] px-4 hover:brightness-75 transition-all"
                                >
                                    <a href="#">{item}</a>
                                </li>
                            );
                        }
                    )}
                    <li className="hover:brightness-75 transition-all py-[6px] px-8 rounded-full bg-blue-600 mb-1 mt-2 text-center">
                        <a href="">Login</a>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
