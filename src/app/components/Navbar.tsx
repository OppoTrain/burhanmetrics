"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface Props {
    scrollToForm: () => void;
}

const Navbar = ({ scrollToForm }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 pt-12 text-black">
            <div className="order-2">
                <Image
                    src="/image/burhan-logo.png"
                    alt="logo"
                    loading="lazy"
                    width={170}
                    height={150}
                />
            </div>

            <ul className="hidden md:flex order-1 space-x-8">
                <button
                    className="bg-[#DAECFD66] text-lg text-[#36658566] px-8 py-3 rounded-2xl w-[155px]"
                    disabled
                >
                    حساب جديد
                </button>
                <button
                    className="cursor-pointer text-lg px-8 py-3 bg-white border-3 border-[#366585] rounded-2xl text-[#366585] hover:bg-[#366585] hover:text-white transition w-[155px]"
                    onClick={scrollToForm}
                >
                    سجل الان
                </button>
            </ul>

            <div
                className="md:hidden order-1"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </div>

            <div
                className={`fixed top-0 left-0 w-[60%] h-full bg-white shadow-md transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 md:hidden`}
            >
                <ul className="flex flex-col p-6 space-y-4">
                    <button
                        className="px-6 py-3 cursor-pointer bg-white border-3 border-[#366585] rounded-2xl text-[#366585] hover:bg-[#366585] hover:text-white transition"
                        onClick={scrollToForm}
                    >
                        سجل الان
                    </button>
                    <button
                        className="px-4 py-2 bg-[#DAECFD66] text-lg text-[#36658566] rounded-2xl"
                        disabled
                    >
                        حساب جديد
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
