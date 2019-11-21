import React from 'react';
import PropTypes from 'prop-types';
import Meme from './Meme';
import styles from './Memes.css';

const Memes = ({ memes }) => {
  const memeElements = memes.map(meme => (
    <Meme key={`${meme.top}-${meme.imageUrl}-${meme.bottom}`} {...meme}/>
  ));

  return (
    <section className={styles.Memes}>
      {memeElements}
    </section>
  );
};

Memes.propTypes = {
  memes: PropTypes.arrayOf(PropTypes.shape({
    top: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    bottom: PropTypes.string
  })).isRequired
};

export default Memes;
