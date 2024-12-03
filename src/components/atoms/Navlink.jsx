import React from "react";

export default function Navlink(props){
    return(
        <li className="pt-4 font-extrabold" >
            <a href={props.href}>{props.children}</a>
        </li>
    )
};