import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const toggleFavoritePhoto = () => {
    props.toggleFavorite(props.photoId)
  }
  const colorCheck = props.favorites.includes(props.photoId)
  console.log(props)

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavoritePhoto}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={colorCheck} />
      </div>
    </div >
  );
}


export default PhotoFavButton;