import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Window } from './Modal.styled';


const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    alt: PropTypes.string.isRequired,
    largeImg: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    const { largeImg, alt } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <Window>
          <img src={largeImg} alt={alt} />
        </Window>
      </Overlay>,
      modalRoot
    );
  }
}
