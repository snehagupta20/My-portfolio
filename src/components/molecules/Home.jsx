import React, { useEffect, useRef, useState } from "react";
import Introduction from "./Introduction";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import { useScroll, useSpring, motion } from "framer-motion";
import Project from "./Project";

export default function Home(){
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    }); 

    return(
        <>
        <div className="block content-center ml-[6.7%] top-0 fixed  bg-darkGreen w-full h-full text-lightGray overflow-y-auto " >
            {/* <motion div scroll bar/> */}
            {/* <motion.div className="fixed top-0 left-0 right-0 h-[10px] overflow-y-auto bg-my-yellow  origin-[0%]" style={{scaleX}} /> */}
            <Introduction/>
            <Education/>
            <Experience/>
            <Skills/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
        </>
    )
};