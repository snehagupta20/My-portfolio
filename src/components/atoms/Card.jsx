import React from "react";
import { WhiteHeading, YellowHeading } from "./Heading";
import { motion } from "framer-motion";

export function BigCard(props){
    return(
        <div className={`w-[60%] h-max bg-green rounded-xl p-6 pr-4 my-4 hover:shadow-yellow-shadow transition-shadow ${props.class} `} >
            <WhiteHeading class="text-3xl pb-2" >{props.white}</WhiteHeading>
            <YellowHeading class="text-xl pb-2 font-normal " >{props.yellow}</YellowHeading>
            <p className="text-l" >{props.p}</p>
        </div>
    )
};

export function SmallCards(props){
    return(
        <motion.div 
        className={`py-3 bg-lightGreen w-[9rem] h-max text-center text-lightGray font-bold rounded-md ${props.class} `}
        whileHover={{scale: 1.2}}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <div className="flex justify-center bg-my-yellow w-min rounded-xl p-2  text-darkGreen m-auto my-2" >{props.icon}</div>
            <p className="text-sm" >{props.children}</p>
        </motion.div>
    );
};

export function SkillCard(props){
    return(
        <div className={`flex flex-col bg-green px-8 py-4 w-max rounded-xl`} >
            <WhiteHeading class="text-lg" >{props.heading}</WhiteHeading>
            <div className={`my-3 grid grid-cols-3 gap-3`} >
                {props.children}
            </div>
        </div>
    );
};

export function ProjectCard(props){
    return(
        <div className="w-[35rem] h-[30rem] flex flex-col rounded-xl border-4 border-white" >
            <div className="w-[34.5rem] h-[20rem] flex " >
                <img className=" rounded-md w-[34.5rem] !h-[20rem]" src={props.src} alt={props.alt} />
            </div>

            <div className="p-4" >
                <WhiteHeading class="text-xl mb-2" >{props.heading}</WhiteHeading>
                <p className="text-md mb-2" >{props.desc}</p>
                <div className="flex" >
                    <button className="text-lightGray font-bold  mr-2" >Project Link</button>
                    <button className="text-lightGray font-bold ">Github Link</button>
                </div>
            </div>
        </div>
    );
};