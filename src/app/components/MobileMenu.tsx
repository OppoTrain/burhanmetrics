"use client";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface Props {
    scrollToForm: () => void;
}

const MobileMenu = ({ scrollToForm }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScrollToForm = () => {
        setIsOpen(false); 
        scrollToForm(); 
    };

    return (
        <>
            <div
                className="md:hidden order-1"
                onClick={() => setIsOpen(!isOpen)}
            >
                <IoMdMenu size={30} />
            </div>

            <div
                className={`fixed top-0 left-0 w-[60%] h-full bg-white shadow-md transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out z-500 md:hidden`}
            >
                <div
                    className="absolute top-0 right-0  cursor-pointer mb-3 bg-[#366585] text-white p-1"
                    onClick={() => setIsOpen(false)}
                >
                    <IoMdClose size={30} />
                </div>
                <ul className="flex flex-col p-6 space-y-4 mt-12">
                    <button
                        className="px-6 py-3 cursor-pointer bg-white border-3 border-[#366585] rounded-2xl text-[#366585] hover:bg-[#366585] hover:text-white transition"
                        onClick={handleScrollToForm}
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
        </>
    );
};

export default MobileMenu;
