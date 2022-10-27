import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,

  setCurrentImage,
}) => (
  <Item key={id}>
    <Image
      onClick={() => setCurrentImage(largeImageURL)}
      src={webformatURL}
      alt=""
    />
  </Item>
);

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  setCurrentImage: PropTypes.func.isRequired,
};
