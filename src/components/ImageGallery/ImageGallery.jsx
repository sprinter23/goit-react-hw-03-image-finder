import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images, setCurrentImage }) => (
  <List>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        id={id}
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        setCurrentImage={setCurrentImage}
      />
    ))}
  </List>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  setCurrentImage: PropTypes.func.isRequired,
};
