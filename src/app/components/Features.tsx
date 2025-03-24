import React from "react";
import { BsJoystick } from "react-icons/bs";
import { MdFollowTheSigns } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";

const Features = () => {
    const features = [
        {
            icon: <BsJoystick size={90} className="text-[#366585]" />,
            text: "تجربة سريعة وسهلة",
        },
        {
            icon: <MdFollowTheSigns size={90} className="text-[#366585]" />,
            text: "توصيات عملية لمستقبلك المهني",
        },
        {
            icon: <TbChecklist size={90} className="text-[#366585]" />,
            text: "اختبارات مبنية على أسس علمية",
        },
    ];

    return (
        <div className="text-center py-18 px-4 max-w-[1240px] mx-auto">
            <h2 className="font-bold text-[42px] text-[#366585] font-inter">
                لماذا تجرب برهان ؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-18">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="border border-[#DAECFD] p-8 flex flex-col items-center bg-white"
                    >
                        {feature.icon}
                        <p className="font-normal text-[32px] text-[#366585] font-inter mt-12">
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
