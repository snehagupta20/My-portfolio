import React, { useEffect, useRef, useState } from "react";
import Introduction from "./Introduction";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home(){

    return(
        <div className="block content-center ml-[6.7%] top-0 fixed  bg-darkGreen w-full h-full text-lightGray overflow-y-auto " >
            {/* <motion.div className="fixed top-0 left-0 right-0 h-[10px] overflow-y-auto bg-my-yellow  origin-[0%]" style={{}} /> */}
            <Introduction/>
            <Education/>
            <Experience/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    )
};