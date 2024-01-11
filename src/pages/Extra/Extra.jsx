import React, { useEffect, useState, useContext } from "react";
import { GoBackBtn, Loader} from "../../components";
import { TextContext } from "../../context/TextContext";

export const Extra = () => {
    const currentUrl = location.pathname.includes('/extra');
    const {text} = useContext(TextContext);


    setTimeout(() => {
        document.querySelector('.main-container').classList.remove('hide')
      }, "500");
    return (
    <>
        <div className="hide main-container animate__animated animate__fadeIn" id="Extra">
            <h1 className="section-sub">Extra</h1>
        {
            currentUrl ?
            <>
            <GoBackBtn label={'Home'} />
            </>
            :
            <>
            </>
        }
        {
            text && text.length>0 ?
            <>
            <p className="extra-intro">{text[15].txt}</p>
            </>
            :
            <>
            </>
        }
            <div className="extras-zone">
                
                    <a href="https://www.frontendmentor.io/profile/TaiBiscuit" target="_blank"><button className="go-extra-btn custom-btn-3">Frontend Mentor</button></a>
                    <a href="https://leetcode.com/TaiBiscuit/" target="_blank"><button className="go-extra-btn custom-btn-3">LeetCode</button></a>
                    <a href="https://www.codewars.com/users/TaiBiscuit" target="_blank"><button className="go-extra-btn custom-btn-3">CodeWars</button></a>
            </div>
        </div>
    </>
    )
}