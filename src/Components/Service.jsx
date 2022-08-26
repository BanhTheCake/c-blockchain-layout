import React from 'react';
import { BsShieldCheck } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'

const ServiceItem = ({ title, subtext, icon, color }) => {
    return (
        <div className="white-glassmorphism p-5 flex mb-8 md:mb-4 w-full max-w-[1000px] mx-auto shadow-sm hover:shadow-lg transition-all cursor-pointer">
            <div
                className={`w-[2.6rem] h-[2.6rem] rounded-full ${
                    color || 'bg-purple-500'
                } flex-shrink-0 flex mr-4`}
            >
                {icon}
            </div>
            <div>
                <p className="font-semibold mb-2">{title}</p>
                <p className="text-base text-gray-300">{subtext}</p>
            </div>
        </div>
    );
};

const Service = () => {
    return (
        <div className="gradient-bg-services py-16 px-4 sm:px-8 md:px-16 flex flex-col md:flex-row items-center">
            <div className="flex flex-1 flex-col md:pr-8">
                <h2 className="h2-title">
                    Services that we continue to improve
                </h2>
                <p className="text-gray-300 mb-8 md:max-w-[80%]">
                    The best choice for buying and selling your crypto assets,
                    with the various super friendly services we offer
                </p>
                <button className="w-fit text-blue-500 -tracking-tight hover:brightness-75 transition-all mb-8 md:mb-0">
                    LET'S GET STARTED
                </button>
            </div>
            <div className="flex flex-1 flex-col text-white">
                <ServiceItem
                    title="Security gurantee"
                    subtext=" Security is guranteed. We always maintain privacy
                            and maintain the quality of our products."
                    icon={<BsShieldCheck size="1.4rem" className="m-auto" />}
                    color="bg-blue-500"
                />
                <ServiceItem
                    title="Security gurantee"
                    subtext=" Security is guranteed. We always maintain privacy
                            and maintain the quality of our products."
                    icon={<AiOutlineSearch size="1.4rem" className="m-auto" />}
                    color="bg-purple-500"
                />
                <ServiceItem
                    title="Security gurantee"
                    subtext=" Security is guranteed. We always maintain privacy
                            and maintain the quality of our products."
                    icon={<AiOutlineHeart size="1.4rem" className="m-auto" />}
                    color="bg-red-500"
                />
            </div>
        </div>
    );
};

export default Service;
