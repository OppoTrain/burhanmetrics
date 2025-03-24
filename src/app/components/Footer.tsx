import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#DAECFD] py-4 px-6 h-28 ">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex space-x-4">
                    <a
                        href="#"
                        className="bg-[#2c5c7e] text-white p-2 rounded-full hover:bg-blue-800 transition"
                    >
                        <FaFacebookF size={16} />
                    </a>
                    <a
                        href="#"
                        className="bg-[#2c5c7e] text-white p-2 rounded-full hover:bg-blue-800 transition"
                    >
                        <FaTwitter size={16} />
                    </a>
                    <a
                        href="#"
                        className="bg-[#2c5c7e] text-white p-2 rounded-full hover:bg-blue-800 transition"
                    >
                        <FaInstagram size={16} />
                    </a>
                    <a
                        href="#"
                        className="bg-[#2c5c7e] text-white p-2 rounded-full hover:bg-blue-800 transition"
                    >
                        <FaYoutube size={16} />
                    </a>
                </div>

                <p className="text-sm text-[#0A142F] text-center">
                    © 2025 All rights reserved
                </p>

                <div className="flex items-center justify-center">
                    <Image
                        src="/image/burhan-logo.png"
                        alt="Burhan Metrics Logo"
                        width={150}
                        height={75}
                        
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
