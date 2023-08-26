import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [selected, notSelected] = useState(false);
  const handleEvent = () => notSelected(false ? selected === true : selected === false);
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleEvent}>
        <FavIcon selected={selected} />
      </div>
    </div >
  );
}

export default PhotoFavButton;