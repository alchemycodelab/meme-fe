import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Meme from './Meme';

const MemeForm = ({ handleSubmit }) => {
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  return (
    <>
      <form onSubmit={event => handleSubmit(event, top, bottom, imageUrl)}>
        <input type="text" value={top} onChange={({ target }) => setTop(target.value)} />
        <input type="text" value={bottom} onChange={({ target }) => setBottom(target.value)} />
        <input type="text" value={imageUrl} onChange={({ target }) => setImageUrl(target.value)} />
        <button>Create</button>
      </form>
      <Meme top={top} bottom={bottom} imageUrl={imageUrl} />
    </>
  );
};

MemeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default MemeForm;
