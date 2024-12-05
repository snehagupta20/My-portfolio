import React from "react";
import { WhiteHeading, YellowHeading } from "./Heading";

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
        <div className={`py-3 bg-lightGreen w-[9rem] h-max text-center text-lightGray font-bold rounded-md ${props.class} `}>
            <div className="flex justify-center bg-my-yellow w-min rounded-xl p-2  text-darkGreen m-auto my-2" >{props.icon}</div>
            <p className="text-sm" >{props.children}</p>
        </div>
    );
};

export function SkillCard(props){
    return(
        <div className={`flex flex-col bg-green px-8 py-4 w-max rounded-xl hover:shadow-yellow-shadow transition-shadow`} >
            <WhiteHeading class="text-lg" >{props.heading}</WhiteHeading>
            <div className={`my-3 grid grid-cols-3 gap-3`} >
                {props.children}
            </div>
        </div>
    );
};
