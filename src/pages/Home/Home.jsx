import React, { useEffect, useState, useContext } from "react";
import '../../styles/home.css'
import { HomeBtn } from "../../components/HomeBtn/HomeBtn";

export const Home = () => {
    return (
    <>
    <div className="main-container">
        
        <div className="home-img-container">
            <div className="box__line box__line--top"></div>
            <div className="box__line box__line--right"></div>
            <div className="box__line box__line--bottom"></div>
            <div className="box__line box__line--left"></div>
            <img src="https://i.ibb.co/wwDVPxk/Nico.jpg" alt="" className="home-img" />
        </div>
        <div className="btn-section">
            <div className="first-set">
                <HomeBtn label='Projects'/>
                <HomeBtn label='About Me'/>
            </div>
            <div className="second-set">
                <HomeBtn label='Contact'/>
                <HomeBtn label='Extra'/>
            </div>
        </div>
    </div>
    </>
    )
}