import React, { useState } from 'react';

import { getQuery } from '../../services/rijksMuseumAPI';
import { useDispatch } from 'react-redux';

const Form = () => {
  const [searchArtist, setSearchArtist] = useState('');
  const dispatch = useDispatch();
  

  const handleSubmit = event => {
    event.preventDefault();
    // setSearchArtist('');
    dispatch(getQuery(searchArtist));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchArtist} onChange={({ target }) => setSearchArtist(target.value)} />
      <button>Submit</button>
    </form>
  );
};

export default Form;
