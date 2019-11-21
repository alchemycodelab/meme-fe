import React from 'react';
import PropTypes from 'prop-types';
import styles from './Meme.css';

const Meme = ({ top, imageUrl, bottom }) => (
  <section className={styles.Meme}>
    <h2>{top}</h2>
    <img src={imageUrl} alt="meme" />
    <h2>{bottom}</h2>
  </section>
);

Meme.propTypes = {
  top: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  bottom: PropTypes.string
};

export default Meme;
