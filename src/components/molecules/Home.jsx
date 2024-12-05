import React from "react";
import Introduction from "./Introduction";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home(){
    return(
        <div className="block content-center ml-[6.7%] top-0 fixed  bg-darkGreen w-full h-full text-lightGray overflow-y-auto " >
            <Introduction/>
            <Education/>
            <Experience/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    )
};