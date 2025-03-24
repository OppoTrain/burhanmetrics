"use client";
import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import RegisterNowForm from "./components/RegisterNowForm";
import Footer from "./components/Footer";

const Page = () => {
    const formRef = useRef<HTMLDivElement>(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            <Navbar scrollToForm={scrollToForm} />
            <Hero scrollToForm={scrollToForm} />
            <Features />
            <RegisterNowForm formRef={formRef} />
            <Footer />
        </>
    );
};

export default Page;
