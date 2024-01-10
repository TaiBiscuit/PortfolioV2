import React, { useEffect, useState, useContext } from "react";
import { HomeBtn } from "../../components/HomeBtn/HomeBtn";
import {About, Projects, Extra, Contact} from '../index';
import { NavBar } from "../../components";
import { ColorModeContext } from "../../context/ColorModeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { TextContext } from "../../context/TextContext";

export const Home = () => {
    const { lightMode} = useContext(ColorModeContext);
    const {text, setText} = useContext(TextContext)
    const {language, setLanguage} = useContext(LanguageContext);
    const currentUrl = location.pathname.includes('/lang=EN');

    const getText = async (base) => {
        console.log(lightMode)

        if(language){
            await fetch('./assets/textEN.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson){
                setText(myJson)
            })
        } else {
            await fetch('./assets/textES.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson){
                setText(myJson)
            })
        }
    }; 

    const checkColors = () => {
        if(!lightMode){
            let btns2 = document.querySelectorAll('.return-btn');
            let borders = document.querySelectorAll('.box__line');
            btns2.forEach(btn => {
                btn.classList.remove('return-btn');
                btn.classList.add('home-btn');
            });
            borders.forEach(brder => {
                brder.style.background= 'black';
            });
        } else {
            let btns = document.querySelectorAll('.home-btn');
            let borders = document.querySelectorAll('.box__line');
            btns.forEach(btn => {
                btn.classList.remove('home-btn');
                btn.classList.add('return-btn');
            });
            borders.forEach(brder => {
                brder.style.background= 'white';
            });
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
            } catch (error) { 
            console.log('textError')
        }
    },[language]); 

    useEffect(()=>{
        try { 
            if(currentUrl){
                let base = 'eng';
                setLanguage(true)
                getText(base)
            } else {
                getText()
            }
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
            <div className=" box__line box__line--top"></div>
            <div className=" box__line box__line--right"></div>
            <div className=" box__line box__line--bottom"></div>
            <div className=" box__line box__line--left"></div>
            <img src="https://i.ibb.co/wwDVPxk/Nico.jpg" alt="" className="home-img" />
        </div>
        {
            text && text.length>0 ? 
            <>
                <p className="title">{text[0].txt}</p>
                <p className="sub-title">{text[1].txt} 
                {
                    lightMode ?
                    <>
                        <span className="sub-title-span-B">{text[2].txt}</span>
                    </>
                    :
                    <>
                        <span className="sub-title-span-A">{text[2].txt}</span>
                    </>
                }
                </p>
                <div className=" hide btn-section animate__animated animate__fadeIn">
                    <div className="first-set">
                        <HomeBtn label={text[7].txt}/>
                        <HomeBtn label={text[8].txt}/>
                    </div>
                    <div className=" second-set">
                        <HomeBtn label={text[9].txt}/>
                        <HomeBtn label={text[10].txt}/>
                    </div>
                </div>
            </>
            :
            <>
            </>
            
        }
    </div>
    <div className=" hide rest">
        {
            text && text.length>0 ?
            <>
                <About />
                <Projects />
                <Extra />
                <Contact />
            </>
            :
            <>
            </> 
        }
    </div>
    </>
    )
}