import React from "react";
import FooterIcons from "../atoms/FooterIcons";
import GithubIcon from "../../assets/icons/GithubIcon";
import Section from "../atoms/Section";
import {motion, useMotionValue} from "framer-motion";
import { BackgroundGradient } from "../ui/BackgroundGradient";
import { FloatingDock } from "../ui/FloatingDock";
import ResumeIcon from "../../assets/icons/ResumeIcon";
import IconLinkedin from "../../assets/icons/LinkedinIcon";
import IconTwitter from "../../assets/icons/TwitterIcon";
import IconGmail from "../../assets/icons/GmailIcon";
import IconInstagram from "../../assets/icons/InstagramIcon";


export default function Footer(){
    const links = [
        {
            title: 'Resume',
            icon : (<FooterIcons><ResumeIcon/></FooterIcons>),
            href: 'https://drive.google.com/file/d/1wAAhh6h0wdTXwiSwadZ8bOwxrKIugX-b/view?usp=sharing',
        },
        {
            title: 'Github',
            icon : (<FooterIcons><GithubIcon/></FooterIcons>),
            href: 'https://github.com/snehagupta20',
        },
        {
            title: 'LinkdIn',
            icon : (<FooterIcons><IconLinkedin/></FooterIcons>),
            href: 'https://www.linkedin.com/in/sneha-gupta-2004abcdef/',
        },
        {
            title: 'Twitter',
            icon : (<FooterIcons><IconTwitter/></FooterIcons>),
            href: 'https://x.com/namastesneha20',
        },
        {
            title: 'E-Mail',
            icon : (<FooterIcons><IconGmail/></FooterIcons>),
            href: 'mailto:20namastesneha@gmail.com',
        },
        {
            title: 'Instagram',
            icon : (<FooterIcons><IconInstagram/></FooterIcons>),
            href: 'https://www.instagram.com/namastesneha/?hl=en',
        },
    ] ;


    return(

        <div className="flex justify-center w-min bg-green rounded-full mr-[45rem] m-auto bottom-3 sticky mb-4"  >
                <BackgroundGradient className="flex justify-between rounded-3xl w-max h-max bg-green  " >
                    <FloatingDock items={links}/>
                </BackgroundGradient>
        </div>
    )
};