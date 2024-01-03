import React, { useEffect, useState, useContext } from "react";
import { HomeBtn } from "../../components/HomeBtn/HomeBtn";
import {About, Projects, Extra, Contact} from '../index';
import { NavBar } from "../../components";
import { ColorModeContext } from "../../context/ColorModeContext";

export const Home = () => {
    const { lightMode} = useContext(ColorModeContext);
    const [text, setText] = useState([]);

    const getText = async () => {
        await fetch('./assets/textEN.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson){
            setText(myJson)
        })
    };

    const checkColors = () => {
        if(!lightMode){
            let btns2 = document.querySelectorAll('.return-btn');
            btns2.forEach(btn => {
                btn.classList.remove('return-btn');
                btn.classList.add('home-btn');
            })
        } else {
            let btns = document.querySelectorAll('.home-btn');
            btns.forEach(btn => {
                btn.classList.remove('home-btn');
                btn.classList.add('return-btn');
            })
        }
    }



    setTimeout(() => {
        const sections = document.querySelectorAll('.main-container')
        sections.forEach(element => {
            element.classList.remove('hide')
        });
    }, "500");

    setTimeout(() => {
        document.querySelector('.btn-section').classList.remove('hide')
        document.querySelector('.rest').classList.remove('hide')
    }, "1500");
    
    useEffect(()=>{
        try {
            getText()
            .finally(() => {
                console.log(text)
            })
            } catch (error) {
            console.log('textError')
        }
    },[]);

    useEffect(()=>{
        try {
            checkColors()
            } catch (error) {
            console.log('LightModeError')
        }
    },[lightMode]);

    return (
    <>
    <NavBar />
    <div className=" hide main-container">
        <div className="animate__animated animate__fadeIn home-img-container">
            <div className="box__line box__line--top"></div>
            <div className="box__line box__line--right"></div>
            <div className="box__line box__line--bottom"></div>
            <div className="box__line box__line--left"></div>
            <img src="https://i.ibb.co/wwDVPxk/Nico.jpg" alt="" className="home-img" />
        </div>
        <p className="title">Hey! I am Nico</p>
        <p className="sub-title">A 
        {
            lightMode ?
            <>
                <span className="sub-title-span-B"> web developer</span>
            </>
            :
            <>
                <span className="sub-title-span-A"> web developer</span>
            </>
        }
        </p>
        <div className=" hide btn-section animate__animated animate__fadeIn">
            <div className="first-set">
                <HomeBtn label='Projects'/>
                <HomeBtn label='About Me'/>
            </div>
            <div className=" second-set">
                <HomeBtn label='Extra'/>
                <HomeBtn label='Contact'/>
            </div>
        </div>
    </div>
    <div className=" hide rest">
        <h1 className="section-sub">ABOUT ME</h1>
        <About />
        <h1 className="section-sub">SEE MY PROJECTS</h1>
        <Projects />
        <h1 className="section-sub">EXTRAS</h1>
        <Extra />
        <h1 className="section-sub">CONTACT ME!</h1>
        <Contact />
    </div>
    </>
    )
}