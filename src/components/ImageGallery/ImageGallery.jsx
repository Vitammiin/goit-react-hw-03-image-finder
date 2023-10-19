import React from 'react';
import css from '../styles.module.css';

const ImageGallery = ({ images, posts }) => {
  return (
    <div>
      <ul className={css.ImageGallery}>
        {posts &&
          images.map(imag => (
            <li key={imag.id}>
              <img src={imag.webformatURL} alt="cat" />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
