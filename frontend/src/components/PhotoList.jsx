import React from "react";

import PhotoListItem from "./PhotoListItem"
import "../styles/PhotoList.scss";

//pass down photo which holds whole object, destructure in child PhotoListItem
function PhotoList(props) {
  const photos = props.photoData.map(photo => {
    const openModalClick = () => {
      props.openModal(true);
      props.setSelectedPhoto(props.photo.id);
    };
    return (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        openModal={props.openModal}
        closeModal={props.closeModal}
        setSelectedPhoto={props.setSelectedPhoto}
        favorites={props.favorites}
        toggleFavorite={props.toggleFavorite}
        modalOpen={props.modalOpen}
        selectedPhoto={props.selectedPhoto}
        openModalClick={openModalClick}
      />)
  })

  return (
    <ul className="photo-list">
      {photos}
    </ul>
  );

}


export default PhotoList;


