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
        const sun = "https://www.svgrepo.com/show/889/sun.svg";
        const moon = `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0174 2.80157C6.37072 3.29221 2.75 7.22328 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C16.7767 21.25 20.7078 17.6293 21.1984 12.9826C19.8717 14.6669 17.8126 15.75 15.5 15.75C11.4959 15.75 8.25 12.5041 8.25 8.5C8.25 6.18738 9.33315 4.1283 11.0174 2.80157ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.7166 1.25 13.0754 1.82126 13.1368 2.27627C13.196 2.71398 13.0342 3.27065 12.531 3.57467C10.8627 4.5828 9.75 6.41182 9.75 8.5C9.75 11.6756 12.3244 14.25 15.5 14.25C17.5882 14.25 19.4172 13.1373 20.4253 11.469C20.7293 10.9658 21.286 10.804 21.7237 10.8632C22.1787 10.9246 22.75 11.2834 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z" fill="#ffffff"></path> </g></svg>`;
        const upArrow = "https://www.svgrepo.com/show/93813/up-arrow.svg";
        const sunSvg = `<svg className="theme-icon" fill="#000000" height="30px" width="30px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="m256,105.5c-83.9,0-152.2,68.3-152.2,152.2 0,83.9 68.3,152.2 152.2,152.2 83.9,0 152.2-68.3 152.2-152.2 0-84-68.3-152.2-152.2-152.2zm0,263.5c-61.4,0-111.4-50-111.4-111.4 0-61.4 50-111.4 111.4-111.4 61.4,0 111.4,50 111.4,111.4 0,61.4-50,111.4-111.4,111.4z"></path> <path d="m256,74.8c11.3,0 20.4-9.1 20.4-20.4v-23c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v23c2.84217e-14,11.3 9.1,20.4 20.4,20.4z"></path> <path d="m256,437.2c-11.3,0-20.4,9.1-20.4,20.4v22.9c0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4v-22.9c0-11.2-9.1-20.4-20.4-20.4z"></path> <path d="m480.6,235.6h-23c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h23c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z"></path> <path d="m54.4,235.6h-23c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h22.9c11.3,0 20.4-9.1 20.4-20.4 0.1-11.3-9.1-20.4-20.3-20.4z"></path> <path d="M400.4,82.8L384.1,99c-8,8-8,20.9,0,28.9s20.9,8,28.9,0l16.2-16.2c8-8,8-20.9,0-28.9S408.3,74.8,400.4,82.8z"></path> <path d="m99,384.1l-16.2,16.2c-8,8-8,20.9 0,28.9 8,8 20.9,8 28.9,0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-7.9-28.9,0z"></path> <path d="m413,384.1c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l16.2,16.2c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-16.2-16.2z"></path> <path d="m99,127.9c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-16.2-16.2c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l16.2,16.2z"></path> </g> </g> </g></svg>`
        setLightMode((prevState) => !prevState);

        if(!lightMode) {
            body.style.backgroundColor = '#242424';
            body.style.color = 'rgba(255, 255, 255, 0.87)';
            themecontainer.classList.remove("shadow-light");
            langContainer.classList.remove("shadow-light");
            setTimeout(() => {
            themecontainer.classList.add("shadow-dark");
/*             themeIcon.classList.remove("change"); */
            langContainer.classList.add("shadow-dark");
            }, 300);
/*             themeIcon.classList.add("change");
            themeIcon.src = moon; */
            themecontainer.innerHTML= moon
            upContainer.classList.remove('shadow-light');
        } else {
            body.style.backgroundColor = 'rgba(255, 255, 255, 0.87)';
            body.style.color = '#242424';

            themecontainer.classList.remove("shadow-dark");
            langContainer.classList.remove("shadow-dark");
            setTimeout(() => {
            themecontainer.classList.add("shadow-light");
            langContainer.classList.add("shadow-light");
/*             themeIcon.classList.remove("change"); */
            }, 300);
/*             themeIcon.classList.add("change");
            themeIcon.src = sun; */
            themecontainer.innerHTML= sunSvg
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
                    <img id="theme-icon" src="https://www.svgrepo.com/show/889/sun.svg" alt="ERR" className='theme-icon'/>
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