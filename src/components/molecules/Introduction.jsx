import React from "react";
import { WhiteHeading, YellowHeading } from "../atoms/Heading";
import { YellowButton } from "../atoms/Buttons";
import Section from "../atoms/Section";

export default function Introduction(){
    return(
        <Section>
            <header className="flex pb-4">
                <YellowHeading class="text-6xl" >SNEHA GUPTA,</YellowHeading>
                <WhiteHeading class="text-5xl indent-4" >INDIA</WhiteHeading>
            </header>
            <main className="pb-8">
                <p className="text-lightGray text-xl font-light leading-8 " >
                namaste 🙏 nice to meet you! :)
                <br/>
                I am a self-taught developer with a strong eye for innovative design and a keen understanding of techniques geared towards optimum user experience.
                <br/>
                My objective is to work in a team oriented environment and maximize my learning.
                <br/>
                I am a Determined and knowledgeable software developer who can think outside the box. An undergraduate who enjoys working with all types of personalities. Seeking the chance to architect new software applications
                </p>
            </main>
            <footer className="flex ">
                <YellowButton class="mr-4" >Explore My Work</YellowButton>
                <YellowButton class="mr-4" >Resume</YellowButton>
                <p>Call: 91+ 9811901301</p>
            </footer>
        </Section>
        
    );
};