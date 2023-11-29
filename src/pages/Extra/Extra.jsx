import React, { useEffect, useState, useContext } from "react";
import { GoBackBtn } from "../../components";

export const Extra = () => {
    return (
    <>
        <GoBackBtn label={'home'} />
        <div className="extra-section">
        <p>You can find me interacting in these other platforms!</p>
                <a href="https://www.frontendmentor.io/profile/TaiBiscuit" target="_blank"><button className="extra-btn-B">Frontend Mentor</button></a>
                <a href="https://leetcode.com/TaiBiscuit/" target="_blank"><button className="extra-btn-B">LeetCode</button></a>
                <a href="https://www.codewars.com/users/TaiBiscuit" target="_blank"><button className="extra-btn-B">CodeWars</button></a>
        </div>
    </>
    )
}