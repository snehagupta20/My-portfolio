import React from "react";

export default function InputBox(props){
    return(
        <input className="w-[100%] bg-green text-lightGray p-3 mb-4 text-left rounded-md " placeholder={props.placeholder} type={props.type} />
    );
};

