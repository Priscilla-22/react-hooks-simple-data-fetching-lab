// create your App component here
import React, { useEffect, useState } from 'react';
function App() {
  const [dogImgUrl, setDogImgUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((r) => r.json())
      .then((data) => {
        setDogImgUrl(data.message);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  },[]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <img src={dogImgUrl} alt='A Random Dog' />
    </div>
  );
}
export default App;
