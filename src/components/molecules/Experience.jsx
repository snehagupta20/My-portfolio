import React from "react";
import { WhiteHeading } from "../atoms/Heading";
import Section from "../atoms/Section";
import {BigCard} from "../atoms/Card";

export default function Experience(){
    return(
        <Section>
            <WhiteHeading class="text-3xl mb-4 " >EXPERIENCE</WhiteHeading>
            <BigCard
                class="w-[100%]"
                white="StatusNeo- INDIGO " 
                yellow="Software Development Intern : May '24 - July '24 (3 Months)" 
                p=
                {<ul style={{listStyleType:"disc", marginLeft:"20px"}}>
                    <li>Contributed to an advanced <b>health monitoring system for pilots</b> and cabin crew by developing over 15 <b>dynamic UI components.</b></li>
                    <li>Integrated robust <b>APIs and custom hooks</b> enhancing user experience with an average <b>decrease of 30% in page load time.</b></li>
                    <li>Gained experience in <b>NextJS, TailwindCSS, Typescript.</b></li>
                </ul>}
            />
            <BigCard 
                class="w-[100%]"
                white="NSUT - CONVOCATION DEPARTMENT" 
                yellow="Lead Developer : Aug '24 - Oct '24 (2 Months)" 
                p=
                {<ul style={{listStyleType:"disc", marginLeft:"20px"}} >
                    <li><b>Led a team</b> of 3 developers for the development of the <b>convocation site</b> using <b>React.js, TailwindCSS.</b></li>
                    <li>Delivered a fully functional website <b>within 2 days,</b> adhering to tight deadlines and ensuring all requirements were met.</li>
                    <li>Oversaw the development and implementation of continuous updates and feature enhancements from August 2024 to October 2024, ensuring <b>continuous improvements based on feedback.</b></li>
                </ul>}
            />
        </Section>
    )
};