import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomeBtn = ({label}) => {
  const navigate = useNavigate()
    
  function handleGoTo (here) {
    const goHere = here.innerText.trim().toLowerCase();
    navigate(`/${goHere}`);
  }
  return(
    <button className='home-btn' onClick={(e) => handleGoTo(e.target)}>{label}</button>
);
}