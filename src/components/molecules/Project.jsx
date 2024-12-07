import React from "react";
import Section from "../atoms/Section";
import { WhiteHeading, YellowHeading } from "../atoms/Heading";
import { ProjectCard } from "../atoms/Card";
import project1 from "../../assets/projects/react_essentials.png";
import project2 from "../../assets/projects/simon_game.png";
import project3 from "../../assets/projects/taj_palace_hotel.png";
import project4 from "../../assets/projects/dog_tinder.png";




export default function Project(){
    return(
        <Section class="mb-[16rem]" >
            <YellowHeading id="project" class="" >WORK</YellowHeading>
            <WhiteHeading class="text-4xl mb-8" >MY RECENT PROJECTS</WhiteHeading>
            <div className="grid grid-cols-2 gap-y-16 gap-x-[5rem]" >
                <ProjectCard 
                    src={project1}
                    heading="React Essentials"
                    desc="Developed a ReactJS-based platform with reusable, dynamic UI components using TailwindCSS, HTML, and CSS for a clean, responsive, and modular learning experience."
                    projectLink="https://react-essentials-two.vercel.app/"
                    githubLink="https://github.com/snehagupta20/react-essentials-web"
                />
                <ProjectCard 
                    src={project2}
                    heading="Simon Game"
                    desc="Created an interactive Simon Game using JavaScript, jQuery, HTML, and CSS, offering dynamic user interactions and a responsive, engaging design."
                    projectLink="https://snehagupta20.github.io/simon-game/"
                    githubLink="https://github.com/snehagupta20/simon-game"
                />
                <ProjectCard 
                    src={project3}
                    heading="Taj Palace Hotel"
                    desc="A visually stunning website showcasing the elegance and grandeur of 'Taj Lake Palace Hotel' in Udaipur, incorporating CSS, JS, and HTML to create an immersive user experience."
                    projectLink="https://snehagupta20.github.io/taj-palace-hotel/"
                    githubLink="https://github.com/snehagupta20/taj-palace-hotel"
                />
                <ProjectCard 
                    src={project4}
                    heading="Doozy"
                    desc="Doozy: Unleash love at first sniff with the ultimate canine matchmaking platform"
                    projectLink="https://snehagupta20.github.io/Doozy-website/"
                    githubLink="https://github.com/snehagupta20/Doozy-website"
                />
            </div>
        </Section>
    )
};