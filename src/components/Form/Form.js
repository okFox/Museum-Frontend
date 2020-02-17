import React, { useState } from 'react';
// import { useAddVideo } from '../../hooks/videos';

const Form = () => {
  const [searchArtist, setSearchArtist] = useState('');
  

  const handleSubmit = event => {
    event.preventDefault();
    setSearchArtist('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchArtist} onChange={({ target }) => setSearchArtist(target.value)} />
      <button>Submit</button>
    </form>
  );
};

export default Form;
