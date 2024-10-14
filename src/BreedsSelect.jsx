import React from 'react';

export const BreedsSelect = ({ breeds, selectedBreed, breedchange }) => {
  // breedsオブジェクトのキーを取得
  const list = Object.keys(breeds);
  
  return (
    <select value={selectedBreed} onChange={breedchange}>
      {list.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  );
};

export default BreedsSelect;
