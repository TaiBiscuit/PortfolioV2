import React, { useContext } from "react";
import { BsGithub, BsFillTelephoneFill } from "react-icons/bs"; 
import { MdMail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { GoBackBtn } from "../../components";
import { ColorModeContext } from "../../context/ColorModeContext";
import { TextContext } from "../../context/TextContext";

export const Contact = () => {
    const currentUrl = location.pathname.includes('/contact');
    const { lightMode} = useContext(ColorModeContext);
    const {text} = useContext(TextContext);

    setTimeout(() => {
        document.querySelector('.contact-main-container').classList.remove('hide')
      }, "500");
    return (
    <>
        <div className="hide contact-main-container animate__animated animate__fadeIn" id="Contact">
        <div id="Contacto"></div>
        <h1 className="section-sub">{text[6].txt}</h1>
        {
            currentUrl ?
            <>
            <GoBackBtn label={'Home'} />
            </>
            :
            <>
            </>
        }
            <div className="contact-section">
                {
                    text && text.length>0 ?
                    <>
                    <p>{text[16].txt}</p>
                    </>
                    :
                    <>
                    </>
                }
                <div className="contact-icons">
                    {
                        !lightMode ?
                        <>
                        <div className="contact-link">
                            <a href="https://github.com/TaiBiscuit" className="contact-link" target="_blank">
                            <BsGithub size={50} className="contact-icon" style={{color: 'black'}}/> 
                            </a>
                            <p className="contact-txt-B" >TaiBiscuit</p>
                        </div>
                        <div className="contact-link">
                            <a href="https://www.linkedin.com/in/nicolas-cam-pos/" className="contact-link" target="_blank">
                                <ImLinkedin size={50} className="contact-icon" style={{color: 'black'}} /> 
                            </a>
                            <p className="contact-txt-B"> Nicolás Campos </p>
                        </div> 
                        <div className="contact-link">
                            <a href="tel:5491144089846" className="contact-link" target="">
                                <BsFillTelephoneFill size={50} className="contact-icon" style={{color: 'black'}} />
                            </a>  
                            <p className="contact-txt-B">(+54) 9 11 44089846</p>
                        </div>      
                        <div className="contact-link">
                            <a href="mailto: nicolas.l.campos1@gmail.com" className="contact-link" target="">
                                <MdMail size={50} className="contact-icon" style={{color: 'black'}} /> 
                            </a>
                            <p className="contact-txt-B">nicolas.l.campos1@gmail.com</p>
                        </div>   
                        </>
                        :
                        <>
                        <div className="contact-link">
                        <a href="https://github.com/TaiBiscuit" className="contact-link" target="_blank">
                        <BsGithub size={50} className="contact-icon" style={{color: 'white'}}/> 
                        </a>
                        <p className="contact-txt-A">TaiBiscuit</p>
                         </div>
                        <div className="contact-link">
                            <a href="https://www.linkedin.com/in/nicolas-cam-pos/" className="contact-link" target="_blank">
                                <ImLinkedin size={50} className="contact-icon" style={{color: 'white'}} /> 
                            </a>
                            <p className="contact-txt-A"> Nicolás Campos </p>
                        </div> 
                        <div className="contact-link">
                            <a href="#" className="contact-link" target="_blank">
                                <BsFillTelephoneFill size={50} className="contact-icon" style={{color: 'white'}} />
                            </a>  
                            <p className="contact-txt-A">(+54) 9 11 44089846</p>
                        </div>      
                        <div className="contact-link">
                            <a href="mailto: nicolas.l.campos1@gmail.com" className="contact-link" target="_blank">
                                <MdMail size={50} className="contact-icon" style={{color: 'white'}} /> 
                            </a>
                            <p className="contact-txt-A">nicolas.l.campos1@gmail.com</p>
                        </div>                
                        </>
                    }
            
                </div>
            </div>
        </div>

    </>
    )
}