/* eslint-disable func-style */
import React from 'react';

import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

function PhotoDetailsModal(props) {
  const openModalClick = () => {
    props.openModal(true);
    props.setSelectedPhoto(props.photo.id);
  };
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__fav-button">
        <PhotoFavButton
          photoId={props.selectedPhoto.id}
          favorites={props.favorites}
          toggleFavorite={props.toggleFavorite}
        />
      </div>
      <div className="photo-details-modal__image-container">
        <img src={props.selectedPhoto.urls.full} className="photo-details-modal__image" />
        <div className="photo-details-modal____user-details">
          <img className="photo-list__user-profile" src={props.selectedPhoto.user.profile} />
          <div className="photo-details-modal__user-info">
            <ul className="photo-details-modal__user-username">{props.selectedPhoto.user.name}</ul>
            <ul className="photo-details-modal__user-location">{props.selectedPhoto.location.city}, {props.selectedPhoto.location.country}</ul>
          </div>
        </div>
      </div>
      <p className="photo-details-modal__header">
        Similar Photos
      </p>
      <div className="photo-details-modal__images">
        <PhotoList
          photoData={Object.values(props.selectedPhoto.similar_photos)}
          photo={props.selectedPhoto}
          favorites={props.favorites}
          toggleFavorite={props.toggleFavorite}
          openModal={props.openModal}
          closeModal={props.closeModal}
          setSelectedPhoto={props.setSelectedPhoto}
          modalOpen={props.modalOpen}
          selectedPhoto={props.selectedPhoto}
          openModalClick={openModalClick}
        />
      </div>
    </div >
  );
}


export default PhotoDetailsModal;

