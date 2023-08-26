import React from "react";

import photoData from "mocks/photos";
import PhotoListItem from "./PhotoListItem"
import "../styles/PhotoList.scss";

function PhotoList(props) {

  const photos = props.photoData.map(photo => {

    return (
      <PhotoListItem
        key={photo.id}
        photo={photo.urls.full}
        profile={photo.user.profile}
        username={photo.user.name}
        city={photo.location.city}
        country={photo.location.country}
      />)
  })

  return (
    <ul className="photo-list">
      {photos}
    </ul>
  );

}

export default PhotoList;


