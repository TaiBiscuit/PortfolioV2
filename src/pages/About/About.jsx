import React, { useState, useEffect } from "react";
import { GoBackBtn } from "../../components";

export const About = () => {
    const [data, setData] = useState([]);
/*     const [altData, setAltData] = useState([]); */
    const [loading, setLoading] = useState(true);

    const getTechData = () => {
        fetch('./assets/tech.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson){
            setData(myJson);
            console.log(myJson)
            setLoading(false)
        });
/*         fetch('./assets/techES.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson){
            setAltData(myJson);
        }) */
    };

    const checkTech = (id) =>{
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


    useEffect(()=>{
        getTechData()
    },[]);
    
    return (
    <>
        <GoBackBtn label={'home'} />
        <div className="about-section section">
            <div className="about-img-container">
                <img src="https://i.ibb.co/r7YXMVJ/Nico.jpg" alt="" className="home-img"  />
            </div>
            <p id="about-txt" className="about-txt">Hello! My name is Nico, a Frontend developer from Argentina. I am a Computer Science student at UBA (Universidad de Buenos Aires) and learning Fullstack development at Coderhouse and I am interested in everything referred to web development. I can also speak Spanish at a native level, and Japanese at an intermediate level. I am currently looking for my first work experience in the IT field, in the meantime I keep learning and making projects.</p>
        </div>
        <div className="tech-section">
            <p className="tech-i-use">Technologies that I use</p>
            <div className="tech-icons-zone" id="tech-zone">
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
            </div>
            <div className="tech-info" id="tech-info">

            </div>
        </div>
    </>
    )
}