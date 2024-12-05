import React from "react";


export function YellowButton(props){
    return(
        <button onClick={props.onClick} className={`p-4 bg-my-yellow text-darkGreen rounded-md w-max font-bold ${props.class} `} >{props.children}</button>
    );
};
