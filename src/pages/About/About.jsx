import React, { useState, useEffect, useRef, useContext } from "react";
import { GoBackBtn } from "../../components";
import { TextContext } from "../../context/TextContext";
import { LanguageContext } from '../../context/LanguageContext';

export const About = () => {
    const [data, setData] = useState([]);
    const [altData, setAltData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {text} = useContext(TextContext);
    const { language } = useContext(LanguageContext);
    const ref = useRef(null);
    const currentUrl = location.pathname.includes('/aboutme');
    const currentUrlEsp = location.pathname.includes('/sobremí');  

    const getTechData = () => {
        fetch('./assets/tech.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson){
            setData(myJson);
            setLoading(false)
        });
        fetch('./assets/techES.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson){
            setAltData(myJson);
        }) 
    };

    const checkTech = (id) =>{
        console.log(currentUrlEsp)
        const itemSelected = document.getElementById(`${id}`)
        const itemId = parseInt(itemSelected.id);

        writeTechText(itemId)
    };

    const checkAltTech = (id) =>{
        const itemSelected = document.getElementById(`${id}`)
        const itemId = parseInt(itemSelected.id);

        writeAltTechText(itemId)
    }

    const writeTechText = (id) => {
        const techText = document.getElementById('tech-info');
        const textInfo = data[id -1].info;

    
        
        techText.innerHTML=
        `
        <div class="tech-info-choosen animate__animated animate__bounceIn">
        <img src="${data[id -1].image}" class="tech-info-img" />
        </div>
        <div class="tech-info-txt animate__animated animate__bounceInRight">
            ${textInfo}
        </div>
        `
    }

    const writeAltTechText = (id) => {
        const techText = document.getElementById('tech-info');
        const textInfo = altData[id -1].info;
        
        techText.innerHTML=
        `
        <div class="tech-info-choosen animate__animated animate__bounceIn">
        <img src="${altData[id -1].image}" class="tech-info-img" />
        </div>
        <div class="tech-info-txt animate__animated animate__bounceInRight">
            ${textInfo}
        </div>
        `
    }

    setTimeout(() => {
        const sections = document.querySelectorAll('.main-section')
        sections.forEach(element => {
            element.classList.remove('hide')
        });
      }, "500");

    useEffect(()=>{
        getTechData()
    },[]);
    
    return (
    <>
        <div className="hide main-section animate__animated animate__fadeIn" id="About me">
            <div id="Sobre mí"></div>
        <h1 className="section-sub">{text[3].txt} </h1>
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
            <div className="about-section section">
            <div className="about-img-container">
                <img src="https://i.ibb.co/FmDrdbZ/1kjh-1.png" alt="" className="home-img"  />
                </div>
                <p id="about-txt" className="about-txt">{text[13].txt}</p>
            </div>
            <div className="tech-section">
                <p className="tech-i-use">{text[14].txt}</p>
                <div className="tech-icons-zone" id="tech-zone">
                {
                    language ?
                    <>
                    {
                    data && data.length>0 && data.map((item) =>{
                        return(
                            <div className='tech' key={item.key} id={item.id} onClick={() => checkTech(item.id)}>
                            <img src={item.image} alt="Tech" className="tech-img"/>
                            <p className="tech-txt">{item.name}</p>
                            </div>
                        )
                    }
                    )
                    }
                    </>
                    :
                    <>
                    {
                    data && data.length>0 && data.map((item) =>{
                        return(
                            <div className='tech' key={item.key} id={item.id} onClick={() => checkAltTech(item.id)}>
                            <img src={item.image} alt="Tech" className="tech-img"/>
                            <p className="tech-txt">{item.name}</p>
                            </div>
                        )
                    }
                    )
                    }
                    </>
                }
                </div>
                <div className="tech-info" id="tech-info" ref={ref}></div>
            </div>
            </>
            :
            <>
            </> 
        }
        </div>
    </>
    )
}