import React from "react";

export default function Section(props){
    return(
        <div className={`text-left ml-12 w-[75%] min-h-[100vh] h-[100%] pt-[80px] pb-[80px] flex flex-col justify-center ${props.class}`} >
            {props.children}
        </div>
    );
};