import React from "react";
import Section from "../atoms/Section";
import { SkillCard, SmallCards } from "../atoms/Card";
import { WhiteHeading } from "../atoms/Heading";
import PythonIcon from "../../assets/icons/PythonIcon";
import CppIcon from "../../assets/icons/C++Icon";
import ReactIcon from "../../assets/icons/ReactIcon";
import TypescriptIcon from "../../assets/icons/TypescriptIcon";
import JavascriptIcon from "../../assets/icons/JavascriptIcon";
import NextjsIcon from "../../assets/icons/NextIcon";
import TailwindcssIcon from "../../assets/icons/TailwindIcon";
import BootstrapIcon from "../../assets/icons/BootstrapIcon";
import NodejsIcon from "../../assets/icons/NodejsIcon";
import ExpressIcon from "../../assets/icons/ExpressjsIcon";
import MysqlIcon from "../../assets/icons/MySQLIcon";
import MongodbIcon from "../../assets/icons/MongodbIcon";
import PostmanIcon from "../../assets/icons/Postman";
import GitIcon from "../../assets/icons/GitIcon";
import GithubIcon from "../../assets/icons/GithubIcon";
import DockerIcon from "../../assets/icons/DockerIcon";
import FigmaIcon from "../../assets/icons/FigmaIcon";

export default function Skills(){
    return(
        <Section class="flex" >
            <WhiteHeading class="text-3xl mb-4 " >MY SKILLS</WhiteHeading>

            <div className="grid grid-cols-2 gap-y-4" >

                <SkillCard heading="Frontend Development">
                    <SmallCards icon={<NextjsIcon/>}>Next.js</SmallCards>
                    <SmallCards icon={<TypescriptIcon/>}>TypeScript</SmallCards>
                    <SmallCards icon={<ReactIcon/>} >React.js</SmallCards>
                    <SmallCards icon={<JavascriptIcon/>}>JavaScript</SmallCards>
                    <SmallCards icon={<TailwindcssIcon/>}>Tailwind.css</SmallCards>
                    <SmallCards icon={<BootstrapIcon/>} class="mr-0" >Bootstrap</SmallCards>
                </SkillCard>

                <SkillCard heading="Backend Development">
                    <SmallCards icon={<NodejsIcon/>} >Node.js</SmallCards>
                    <SmallCards icon={<ExpressIcon/>}>Express.js</SmallCards>
                    <SmallCards icon={<MongodbIcon/>}>MongoDB</SmallCards>
                    <SmallCards icon={<MysqlIcon/>}>MySQL</SmallCards>
                    <SmallCards icon={<PostmanIcon/>}>Postman</SmallCards>
                    {/* <SmallCards icon={<PythonIcon/>} class="mr-0" >RESTful APIs</SmallCards> */}
                </SkillCard>

                <SkillCard heading="Development Tools">
                    <SmallCards icon={<GitIcon/>} >Git</SmallCards>
                    <SmallCards icon={<GithubIcon/>}>Github</SmallCards>
                    <SmallCards icon={<DockerIcon/>}>Docker</SmallCards>
                    <SmallCards icon={<FigmaIcon/>} class="mr-0" >Figma</SmallCards>
                </SkillCard>

                <SkillCard heading="Programming Languages">
                    <SmallCards icon={<CppIcon/>} >C/C++</SmallCards>
                    <SmallCards icon={<PythonIcon/>} class="mr-0" >Python</SmallCards>
                </SkillCard>

            </div>

        </Section>
    );
};