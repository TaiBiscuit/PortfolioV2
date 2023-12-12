import React, { useEffect, useState, useContext } from "react";
import { GoBackBtn } from "../../components";

export const Extra = () => {
    return (
    <>
        <GoBackBtn label={'home'} />

        <p className="extra-intro">I am also active in these coding platforms!</p>
        <div className="extras-zone">
                <a href="https://www.frontendmentor.io/profile/TaiBiscuit" target="_blank"><button className="extra-btn-B">Frontend Mentor</button></a>
                <a href="https://leetcode.com/TaiBiscuit/" target="_blank"><button className="extra-btn-B">LeetCode</button></a>
                <a href="https://www.codewars.com/users/TaiBiscuit" target="_blank"><button className="extra-btn-B">CodeWars</button></a>
        </div>
    </>
    )
}