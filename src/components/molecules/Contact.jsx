import React from "react";
import Section from "../atoms/Section";
import { WhiteHeading, YellowHeading } from "../atoms/Heading";
import { YellowButton } from "../atoms/Buttons";
import InputBox from "../atoms/InputBox";

export default function Contact(){
    return(
        <Section class="text-center !w-[50%] ml-[15rem] mr-auto">
            <YellowHeading >CONTACT</YellowHeading>
            <WhiteHeading class="text-5xl mb-4 " >Interested in working together? Let's talk!</WhiteHeading>
            <div className="mt-8" >
                <div className="grid grid-cols-2 gap-4" >
                    <InputBox placeholder="Enter your name" type="text" >Enter your name</InputBox>
                    <InputBox placeholder="Enter your name" type="email" >Enter your Email</InputBox>
                </div>
                <InputBox placeholder="Enter your name" type="text" >Enter Subject</InputBox>
                <textarea className="w-[100%] bg-green text-lightGray p-3 mb-4 text-left rounded-md " rows={4} cols={3} placeholder="Enter your message" />
                <YellowButton class="!w-[100%] mt-2" >Contact me</YellowButton>
            </div>
        </Section>
    );
};