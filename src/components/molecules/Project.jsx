import React from "react";
import Section from "../atoms/Section";
import { WhiteHeading, YellowHeading } from "../atoms/Heading";
import { ProjectCard } from "../atoms/Card";
import project1 from "../../assets/projects/project 1.jpg";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project 3.jpg";
import project4 from "../../assets/projects/project4.png";


export default function Project(){
    return(
        <Section class="mb-[16rem]" >
            <YellowHeading id="project" class="" >WORK</YellowHeading>
            <WhiteHeading class="text-4xl mb-8" >MY RECENT PROJECTS</WhiteHeading>
            <div className="grid grid-cols-2 gap-y-16 gap-x-[5rem]" >
                <ProjectCard 
                    src={project1}
                    alt="project 1"
                    heading="project 1"
                    desc="project 1"
                />
                <ProjectCard 
                    src={project2}
                    alt="project 1"
                    heading="project 1"
                    desc="project 1"
                />
                <ProjectCard 
                    src={project3}
                    alt="project 1"
                    heading="project 1"
                    desc="project 1"
                />
                <ProjectCard 
                    src={project4}
                    alt="project 1"
                    heading="project 1"
                    desc="project 1"
                />
            </div>
        </Section>
    )
};