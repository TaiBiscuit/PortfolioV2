import React from "react";
import { BsGithub, BsFillTelephoneFill } from "react-icons/bs"; 
import { MdMail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { GoBackBtn } from "../../components";

export const Contact = () => {
    return (
    <>
        <GoBackBtn label={'home'} />
        <div className="contact-section">
            <p>You can contact me in all the places below!</p>
            <div className="contact-icons">
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
                        <a href="#" className="contact-link" target="_blank">
                            <BsFillTelephoneFill size={50} className="contact-icon" style={{color: 'black'}} />
                        </a>  
                        <p className="contact-txt-B">(+54) 9 11 44089846</p>
                    </div>      
                    <div className="contact-link">
                        <a href="mailto: nicolas.l.campos1@gmail.com" className="contact-link" target="_blank">
                            <MdMail size={50} className="contact-icon" style={{color: 'black'}} /> 
                        </a>
                        <p className="contact-txt-B">nicolas.l.campos1@gmail.com</p>
                    </div>               
            </div>
        </div>
    </>
    )
}