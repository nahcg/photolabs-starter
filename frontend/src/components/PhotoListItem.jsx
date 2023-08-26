import React from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

function PhotoListItem(props) {
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={props.photo} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile} />
        <div className="photo-list__user-info">
          <ul className="photo-list__user-username">{props.username}</ul>
          <ul className="photo-list__user-location">{props.city}, {props.country}</ul>
        </div>
      </div>
    </div >
  );
}

export default PhotoListItem;
