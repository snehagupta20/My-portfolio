import React from "react";

export function YellowHeading(props){
    return(
        <h1 className={`text-my-yellow font-extrabold ${props.class} `}>
            {props.children}
        </h1>
    );
};

export function WhiteHeading(props){
    return(
        <h1 className={`text-offWhite font-extrabold ${props.class} `} >
            {props.children}
        </h1>
    );
};

export function SubHeading(){
    return(
        <h2></h2>
    );
};