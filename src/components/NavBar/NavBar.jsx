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
        const upContainer = document.getElementsByClassName('back-container')[0];
        const themeIcon = document.getElementById("theme-icon");
        const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
        const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";
        const upArrow = "https://www.svgrepo.com/show/93813/up-arrow.svg";
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
            upContainer.classList.remove('shadow-light');
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
            upContainer.classList.add('shadow-light');
        } 
    }

    function handleLanguage(e) {
        setTimeout(() => {
            setLanguage((prevState) => !prevState);
        }, "200");
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
                    {
                        language ?
                        <><p>EN</p></>
                        :
                        <><p>ES</p></>
                    }
                </div>
                <a href="#home">
                <div className="back-container shadow-light">
                    <img id="theme-icon" className="svgg" src="https://www.svgrepo.com/show/93813/up-arrow.svg" alt="ERR" />
                </div>
                </a>
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