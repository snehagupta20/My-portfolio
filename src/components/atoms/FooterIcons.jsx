import React from "react";

export default function FooterIcons(props){
    return(
        <div className="rounded-xl bg-lightGreen text-lightGray hover:text-my-yellow m-1  " >
            {props.children}
        </div>
    )
};