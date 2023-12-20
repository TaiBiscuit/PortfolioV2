import React, { useEffect, useState, useContext } from "react";
import '../../styles/home.css'
import { HomeBtn } from "../../components/HomeBtn/HomeBtn";

export const Home = () => {

    setTimeout(() => {
        document.querySelector('.main-container').classList.remove('hide')
      }, "500");

    setTimeout(() => {
        document.querySelector('.btn-section').classList.remove('hide')
      }, "1500");

    return (
    <>
    <div className=" hide main-container">
        <div className="animate__animated animate__fadeIn home-img-container">
            <div className="box__line box__line--top"></div>
            <div className="box__line box__line--right"></div>
            <div className="box__line box__line--bottom"></div>
            <div className="box__line box__line--left"></div>
            <img src="https://i.ibb.co/wwDVPxk/Nico.jpg" alt="" className="home-img" />
        </div>
        <p>Hey! I am Nico</p>
        <p>A web developer</p>
        <div className=" hide btn-section animate__animated animate__fadeIn">
            <div className="first-set">
                <HomeBtn label='Projects'/>
                <HomeBtn label='About Me'/>
            </div>
            <div className=" second-set">
                <HomeBtn label='Contact'/>
                <HomeBtn label='Extra'/>
            </div>
        </div>
    </div>
    </>
    )
}