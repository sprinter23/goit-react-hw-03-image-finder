import PropTypes from 'prop-types';
import { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';


export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  static propTypes = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const {
      image: { webformatURL, tags, largeImageURL },
    } = this.props;

    return (
      <>
        <Item onClick={this.toggleModal}>
          <Image src={webformatURL} alt={tags} loading="lazy" />
        </Item>
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImg={largeImageURL}
            alt={tags}
          />
        )}
      </>
    );
  }
}
