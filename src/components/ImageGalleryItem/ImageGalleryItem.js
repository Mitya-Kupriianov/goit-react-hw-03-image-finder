import Modal from 'components/Modal';
import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
  };

  onModal = () => {
    this.setState(({ modalIsOpen }) => ({ modalIsOpen: !modalIsOpen }));
  };

  render() {
    const { id, tags, webformatURL, largeImageURL } = this.props;
    const { modalIsOpen } = this.state;
    return (
      <li className={s.item}>
        <img
          className={s.image}
          id={id}
          alt={tags}
          src={webformatURL}
          onClick={this.onModal}
        />
        {modalIsOpen && (
          <Modal
            tags={tags}
            largeImageURL={largeImageURL}
            handleClose={this.onModal}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
