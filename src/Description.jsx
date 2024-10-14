import './App.css';
import React, { useState } from 'react';
import { DogImage } from './DogImage';

export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");

  const changeImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => setDogUrl(data.message));
  };

  return (
    <>
    <div className='detail'>
      <div className='img_det'>犬の画像を表示するサイトです</div>
      <DogImage imageUrl={dogUrl} />
    </div>
    <button onClick={changeImage}>ボタン</button>
    </>
  );
}

export default Description;  // ここを追加
