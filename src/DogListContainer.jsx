import { useEffect, useState } from 'react';
import BreedsSelect from './BreedsSelect';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState({});
  const [selectedBreed, setSelectedBreed] = useState('bulldog'); // 初期値を設定
  const [pictureBreed, setPictureBreed] = useState([]);
  const [loading, setLoading] = useState(false); // ローディング状態を管理

  const breedChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        setBreeds(data.message);
      });
  }, []);

  const dogPic = () => {
    if (!selectedBreed) return; // 選択されていない場合は何もしない
    setLoading(true); // ローディングを開始
    const textUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`;
    fetch(textUrl)
      .then(response => response.json())
      .then(data => {
        setPictureBreed(data.message);
        setLoading(false); // ローディングを終了
      })
      .catch(() => {
        setLoading(false); // エラー時にもローディングを終了
      });
  };

  return (
    <div>
      <p>Breeds List</p>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        breedchange={breedChange}
      />
      <button className="kousinbutton" onClick={dogPic} disabled={loading}>
        {loading ? '読み込み中...' : '表示'}
      </button>
      <div>
        {pictureBreed.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {pictureBreed.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Dog ${index + 1}`}
                style={{ margin: '5px', width: '150px', height: 'auto' }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DogListContainer;
