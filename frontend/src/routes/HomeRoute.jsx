import React, { useState } from "react";

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from "./PhotoDetailsModal";


const HomeRoute = (props) => {
  const { 
    photoData, 
    topicData,
    openModal, 
    closeModal, 
    toggleFavorite, 
    setSelectedPhoto, 
    getPhotosByTopic,
    modalOpen,
    selectedPhoto,
    favorites
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        favoriteExists={favorites.length > 0}
        topicData={topicData}
        getPhotosByTopic={getPhotosByTopic}
      />
      <PhotoList
        photoData={photoData}
        topicData={topicData}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        openModal={openModal}
        closeModal={closeModal}
        setSelectedPhoto={setSelectedPhoto}
        modalOpen={modalOpen}
        selectedPhoto={selectedPhoto}
         />
      {modalOpen && (selectedPhoto !== null) && (
        <PhotoDetailsModal
          photoData={photoData}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          openModal={openModal}
          closeModal={closeModal}
          setSelectedPhoto={setSelectedPhoto}
          modalOpen={modalOpen}
          selectedPhoto={selectedPhoto} />
      )}
    </div>
  );
};


export default HomeRoute;
