import Image from "next/image";
import React from "react";

interface Props {
    scrollToForm: () => void;
}

const Hero = ({ scrollToForm }: Props) => {
    return (
        <div className="flex flex-col md:flex-row justify-between max-w-[1240px] mx-auto px-4 py-25">
            <div className="md:w-4/7">
                <Image
                    src="/image/about-us.png"
                    alt="about us"
                    width={750}
                    height={400}
                    loading="lazy"
                />
            </div>

            <div className="md:w-3/7 text-center md:text-right space-y-16">
                <h1 className="font-semibold text-[66px] leading-[66px] text-[#366585] font-inter">
                    من نحن
                </h1>
                <p className="font-normal text-[28px] leading-8 text-[#366585] font-inter">
                    نظام اختبارات وتحليلات متكامل يساعد الأفراد والشركات على
                    اتخاذ قرارات توظيف مستنيرة عبر تقييم المهارات وتوفير رؤى
                    دقيقة لتحسين عملية التوظيف وبناء فرق عمل فعالة
                </p>
                <button
                    className="cursor-pointer text-lg px-8 py-3 bg-white border-3 border-[#366585] rounded-2xl text-[#366585] hover:bg-[#366585] hover:text-white transition w-[155px]"
                    onClick={scrollToForm}
                >
                    سجل الان
                </button>
            </div>
        </div>
    );
};

export default Hero;
