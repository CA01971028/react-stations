import './App.css';
import React from 'react';

export const DogImage = (props) =>{
  return(
    <>
      <img src={props.imageUrl} alt="dog image" className='img'/>
    </>
  )
}

export default DogImage;