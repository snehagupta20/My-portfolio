import React from "react";
import { WhiteHeading } from "../atoms/Heading";
import Section from "../atoms/Section";
import {BigCard} from "../atoms/Card";

export default function Education(){
    return(
        <Section id="education">
            <WhiteHeading class="text-3xl mb-4 " >EDUCATION</WhiteHeading>
            <BigCard 
                white="Netaji Subhas University of Technology" 
                yellow="Computer Science with Artificial Intelligence"
                p="Graduation: march 2025 | Delhi, INDIA"
            />
            <BigCard 
                white="Shiksha Bharati Global School" 
                yellow="Head Girl: 2020-2021"
                p="Graduation: march 2021 | Delhi, INDIA"
            />
            <BigCard 
                white="ITL Public School" 
                yellow="Girls Footbal team Captian: 2016-2018"
                p="Till: 2019 | Delhi, INDIA"
            />
        </Section>
    )
};