import React from "react";
import FooterIcons from "../atoms/FooterIcons";
import GithubIcon from "../../assets/icons/GithubIcon";
import Section from "../atoms/Section";
import {motion} from "framer-motion";


export default function Footer(){
    return(
            <motion.div className="flex justify-center w-min ml-[32rem] mb-4 sticky bottom-3 shadow-background-blur bg-green rounded-full " >
                <div className="flex justify-between  p-4 rounded-2xl w-max h-max bg-green  " >
                    <FooterIcons><GithubIcon/></FooterIcons>
                    <FooterIcons><GithubIcon/></FooterIcons>
                    <FooterIcons><GithubIcon/></FooterIcons>
                    <FooterIcons><GithubIcon/></FooterIcons>
                    <FooterIcons><GithubIcon/></FooterIcons>
                </div>
            </motion.div>
    )
};