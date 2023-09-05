import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

//displays yellow circle alert if a selectedPhoto exists in favorites array
const FavBadge = (props) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={props.isFavPhotoExists} selected={true} />
    </div>
  )
};

export default FavBadge;