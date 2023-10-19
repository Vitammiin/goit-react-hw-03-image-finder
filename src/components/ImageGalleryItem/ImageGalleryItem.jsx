import css from '../styles.module.css';

const ImageGalleryItem = ({ images }) => {
  <div>
    {images.map(imag => (
      <li className={css.ImageGalleryItemimage}>
        <img src={imag.largeImageURL} alt="" />
      </li>
    ))}
    ;
  </div>;
};

export default ImageGalleryItem;
