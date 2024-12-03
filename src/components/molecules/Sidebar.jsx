import React from "react";
import potrait from "../../assets/image.png";
import Navlink from "../atoms/Navlink";

export default function Sidebar(){
    return(
        <div className="bg-green w-[15rem] h-[100%] fixed left-0 top-0  bg-gradient-to-b from-lightGreen to-green block content-center ">
            <img className="border-8 rounded-[100%] m-auto h-[13rem] border-my-yellow " src={potrait} alt="my potrait" ></img>
            <ul className="text-offWhite mt-4" >
                <Navlink href="#">HOME</Navlink>
                <Navlink href="#">EDUCATION</Navlink>
                <Navlink href="#">EXPERIENCE</Navlink>
                <Navlink href="#">SKILLS</Navlink>
                <Navlink href="#">PROJECTS</Navlink>
                <Navlink href="#">CONTACT</Navlink>
            </ul>
        </div>
    );
};