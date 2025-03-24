import Image from "next/image";
import React from "react";

import { RefObject } from "react";

interface Props {
    formRef: RefObject<HTMLDivElement | null>;
}

const RegisterNowForm = ({ formRef }: Props) => {
    return (
        <div
            ref={formRef}
            className="flex-row items-center justify-center max-w-[1240px] mx-auto px-4 py-12"
        >
            <div className="w-full text-center mb-6">
                <h1 className="font-bold text-[42px] text-[#366585] font-inter">
                    إنضم إلينا الان
                </h1>
                <p className="font-normal text-[20px] text-black font-inter">
                    سجل في حسابك
                </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full">
                <div className="hidden md:block w-full md:w-1/2 flex justify-center">
                    <Image
                        src="/image/burhan-register.svg"
                        alt="register now"
                        width={500}
                        height={500}
                        loading="lazy"
                    />
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-4 bg-[#DAECFD] shadow-lg rounded-lg p-6 md:shadow-none md:bg-white">
                    <form className="space-y-4">
                        <label
                            htmlFor="email"
                            className="block text-right font-normal text-[18px] text-[#366585] font-inter"
                        >
                            البريد الإلكتروني
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="أدخل البريد الإلكتروني"
                            className="block w-full px-4 py-2 border border-[#D1D5DB] bg-white rounded placeholder-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#366585] text-right"
                        />
                        <label
                            htmlFor="age"
                            className="block text-right font-normal text-[18px] text-[#366585] font-inter"
                        >
                            العمر
                        </label>
                        <input
                            type="text"
                            id="age"
                            placeholder="أدخل عمرك"
                            className="block w-full px-4 py-2 border border-[#D1D5DB] bg-white rounded placeholder-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#366585] text-right"
                        />
                        <label
                            htmlFor="whatsapp"
                            className="block text-right font-normal text-[18px] text-[#366585] font-inter"
                        >
                            رقم الواتس اب
                        </label>
                        <input
                            type="text"
                            id="whatsapp"
                            placeholder="أدخل رقم الواتساب"
                            className="block w-full px-4 py-2 border border-[#D1D5DB] bg-white rounded placeholder-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#366585] text-right"
                        />
                        <label
                            htmlFor="career"
                            className="block text-right font-normal text-[18px] text-[#366585] font-inter"
                        >
                            المهنة الحالية
                        </label>
                        <input
                            type="text"
                            id="career"
                            placeholder="أدخل مهنتك الحالية"
                            className="block w-full px-4 py-2 border border-[#D1D5DB] bg-white rounded placeholder-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#366585] text-right"
                        />
                        <button
                            type="submit"
                            className="cursor-pointer text-lg px-8 py-3 mt-10 bg-transparent border-3 border-[#366585] rounded-2xl text-[#366585] hover:bg-[#366585] hover:text-white transition w-[155px] mx-auto block"
                        >
                            تسجيل
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterNowForm;
