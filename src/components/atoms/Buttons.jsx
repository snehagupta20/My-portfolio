import React from "react";
import {motion} from "framer-motion";


export function YellowButton(props){
    return(
        <motion.button 
        onClick={props.onClick}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        whileTap={{ scale: 0.9 }}
        className={`p-4 bg-my-yellow text-darkGreen rounded-md w-max font-bold ${props.class} `} >
            {props.children}
        </motion.button>
    );
};
