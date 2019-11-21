import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import styles from './Meme.css';

const Meme = ({ top, imageUrl, bottom }) => {
  const ref = useRef();

  const handleClick = () => {
    domToImage.toPng(ref.current)
      .then(image => {
        return fileSaver.saveAs(image, 'meme.png');
      });
  };
  return (
    <section className={styles.Meme} ref={ref} onClick={handleClick}>
      <h2>{top}</h2>
      <img src={imageUrl} alt="meme" />
      <h2>{bottom}</h2>
    </section>
  );
};

Meme.propTypes = {
  top: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  bottom: PropTypes.string
};

export default Meme;
