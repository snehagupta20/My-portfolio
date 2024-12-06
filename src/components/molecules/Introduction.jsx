import React from "react";
import { WhiteHeading, YellowHeading } from "../atoms/Heading";
import { YellowButton } from "../atoms/Buttons";
import Section from "../atoms/Section";
import { FlipWords } from "../ui/FlipWords";

export default function Introduction(){
    const words=["Developer", "Designer", "Coder", "Solver", "Dancer", "Football player", ]
    return(
        <Section id="home">
            <header className="flex pb-4">
                <YellowHeading class="text-6xl" >SNEHA GUPTA,</YellowHeading>
                <WhiteHeading class="text-5xl indent-1" ><FlipWords className="text-2xl" words={words}/></WhiteHeading>
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
                <a href="#project" ><YellowButton class="mr-4" >Explore My Work</YellowButton></a>
                <a href="https://drive.google.com/file/d/1wAAhh6h0wdTXwiSwadZ8bOwxrKIugX-b/view?usp=sharing" target="_blank" ><YellowButton class="mr-4" >Resume</YellowButton></a>
                <p>Call: 91+ 9811901301</p>
            </footer>
        </Section>
        
    );
};