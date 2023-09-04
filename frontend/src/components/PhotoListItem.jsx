import React from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

function PhotoListItem(props) {
  const openModalClick = () => {
      props.openModal(true);
      props.setSelectedPhoto(props.photo);
    };
  return (
    <div className="photo-list__item" >
      <PhotoFavButton
        photoId={props.photo.id}
        favorites={props.favorites}
        toggleFavorite={props.toggleFavorite}
      />
      <img className="photo-list__image" src={props.photo.urls.full} onClick={openModalClick} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.user.profile} />
        <div className="photo-list__user-info">
          <ul className="photo-list__user-username">{props.photo.user.username}</ul>
          <ul className="photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</ul>
        </div>
      </div>
    </div >
  );
}

export default PhotoListItem;
