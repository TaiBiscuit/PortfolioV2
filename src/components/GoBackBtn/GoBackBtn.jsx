import React from 'react';
import { useNavigate } from 'react-router-dom';

export const GoBackBtn = ({label}) => {
  const navigate = useNavigate()
    
  function handleGoTo (here) {
    const goHere = here.innerText.trim().toLowerCase();
    navigate(`/${goHere}`);
  }
  return(
    <button className='return-btn custom-btn-2' onClick={(e) => handleGoTo(e.target)}>Home</button>
);
}