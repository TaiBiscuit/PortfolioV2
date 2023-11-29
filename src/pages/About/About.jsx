import React from "react";
import { GoBackBtn } from "../../components";

export const About = () => {
    return (
    <>
        <GoBackBtn label={'home'} />
        <div className="about-section section">
            <div className="about-img-container">
                <img src="https://i.ibb.co/r7YXMVJ/Nico.jpg" alt="" className="home-img"  />
            </div>
            <p id="about-txt" className="about-txt">Hello! My name is Nico, a Frontend developer from Argentina. I am a Computer Science student at UBA (Unviersidad de Buenos Aires) and learning Fullstack development at Coderhouse and I am interested in everything referred to web development. I can also speak Spanish at a native level, and Japanese at an intermediate level. I am currently looking for my first work experience in the IT field, in the meantime I keep learning and making projects.</p>
        </div>
    </>
    )
}