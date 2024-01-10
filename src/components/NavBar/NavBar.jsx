import React, { useContext } from 'react';
import { ColorModeContext } from '../../context/ColorModeContext';
import { LanguageContext } from '../../context/LanguageContext';

export const NavBar = () => {
    const { lightMode, setLightMode} = useContext(ColorModeContext);
    const { language, setLanguage } = useContext(LanguageContext);


    function handleViewMode(e){
        const body = document.getElementById('root');
        const themecontainer = document.getElementsByClassName("theme-container")[0];
        const langContainer = document.getElementsByClassName("lang-container")[0];
        const themeIcon = document.getElementById("theme-icon");
        const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
        const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
        setLightMode((prevState) => !prevState);

        if(!lightMode) {
            body.style.backgroundColor = '#242424';
            body.style.color = 'rgba(255, 255, 255, 0.87)';
            themecontainer.classList.remove("shadow-light");
            langContainer.classList.remove("shadow-light");
            setTimeout(() => {
            themecontainer.classList.add("shadow-dark");
            themeIcon.classList.remove("change");
            langContainer.classList.add("shadow-dark");
            }, 300);
            themeIcon.classList.add("change");
            themeIcon.src = moon;
        } else {
            body.style.backgroundColor = 'rgba(255, 255, 255, 0.87)';
            body.style.color = '#242424';

            themecontainer.classList.remove("shadow-dark");
            langContainer.classList.remove("shadow-dark");
            setTimeout(() => {
            themecontainer.classList.add("shadow-light");
            langContainer.classList.add("shadow-light");
            themeIcon.classList.remove("change");
            }, 300);
            themeIcon.classList.add("change");
            themeIcon.src = sun;
        } 
    }

    function handleLanguage(e) {
        console.log(e)
    }

    return(
        <>
        <div className="nav-bars" id='nav-bars'>
            <nav className='modes-nav'>
                <ul className='nav-ul'>
                <div className="theme-container shadow-light" onClick={(e) => handleViewMode(e)}>
                    <img id="theme-icon"    src="https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg" alt="ERR" />
                </div>
                <div className="lang-container shadow-light" onClick={(e) => handleLanguage(e)}>
                    <p>EN</p>
                </div>
{/*                     <button className='home-btn custom-mode-btn' onClick={(e) => handleViewMode(e)}>DARK MODE</button>
                    <button className='home-btn custom-mode-btn'>LANGUAGE</button> */}
                </ul>
            </nav>
            <nav className='section-nav'>
                <ul className='nav-ul'>
                    <li className='nav-li'></li>
                    <li className='nav-li'></li>
                    <li className='nav-li'></li>
                    <li className='nav-li'></li>
                </ul>
            </nav>
        </div>
        </>
    )
};