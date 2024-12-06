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
    // home, resume, github linkdin, x, mail, instagram
    const links = [
        {
            title: 'Resume',
            icon : (<FooterIcons><ResumeIcon/></FooterIcons>),
            hred: '#',
        },
        {
            title: 'Github',
            icon : (<FooterIcons><GithubIcon/></FooterIcons>),
            hred: '#',
        },
        {
            title: 'LinkdIn',
            icon : (<FooterIcons><IconLinkedin/></FooterIcons>),
            hred: '#',
        },
        {
            title: 'Twitter',
            icon : (<FooterIcons><IconTwitter/></FooterIcons>),
            hred: '#',
        },
        {
            title: 'E-Mail',
            icon : (<FooterIcons><IconGmail/></FooterIcons>),
            hred: '#',
        },
        {
            title: 'Instagram',
            icon : (<FooterIcons><IconInstagram/></FooterIcons>),
            hred: '#',
        },
    ] ;

    let mouseX = useMotionValue(Infinity);

    return(

        <div className="flex justify-center w-min bg-green rounded-full mr-[45rem] m-auto bottom-3 sticky mb-4"  >
                <BackgroundGradient className="flex justify-between rounded-3xl w-max h-max bg-green  " >
                    <FloatingDock items={links}/>
                </BackgroundGradient>
        </div>
    )
};