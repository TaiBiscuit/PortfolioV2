import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomeBtn = ({label}) => {
  const navigate = useNavigate()
    
  function handleGoTo (here) {
    console.log('TODO')
/*     const goHere = here.innerText.toLowerCase();
    const noSpaces = goHere.replace(/\s/g, "");
    navigate(`/${noSpaces}`);  */
  }
  return(
    <a href={"#"+label}><button className='home-btn custom-btn' onClick={(e) => handleGoTo(e.target)}>{label}</button></a>
);
}