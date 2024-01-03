import React, { useContext } from 'react';
import { ColorModeContext } from '../../context/ColorModeContext';
import { LanguageContext } from '../../context/LanguageContext';

export const NavBar = () => {
    const { lightMode, setLightMode} = useContext(ColorModeContext);
    const { language, setLanguage } = useContext(LanguageContext);


    function handleViewMode(e){
        const body = document.getElementById('root');
        setLightMode((prevState) => !prevState);

        if(!lightMode) {
            body.style.backgroundColor = '#242424';
            body.style.color = 'rgba(255, 255, 255, 0.87)';
            /*         nav.style.backgroundColor = '#333';
        links.forEach(link => {
            link.style.color = 'rgba(255, 255, 255, 0.87)';
        });    */
        } else {
            body.style.backgroundColor = 'rgba(255, 255, 255, 0.87)';
            body.style.color = '#242424';
        /*  nav.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            links.forEach(link => {
                link.style.color = '#242424'
            }); */
        } 
    }

    return(
        <>
        <div className="nav-bars">
            <nav className='modes-nav'>
                <ul className='nav-ul'>
                    <button className='home-btn custom-mode-btn' onClick={(e) => handleViewMode(e)}>DARK MODE</button>
                    <button className='home-btn custom-mode-btn'>LANGUAGE</button>
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