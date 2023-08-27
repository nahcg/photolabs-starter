import React, { useState } from "react";

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from "./PhotoDetailsModal";
// move topicData and PhotoData to app.jsx and pass down and props


const HomeRoute = (props) => {
  const { photoData, topicData } = props;

  //save modal open or close as state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState('');

  const openModal = (photoId) => {
    setSelectedPhoto(photoId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  //create favorites as empty array
  const [favorites, setFavorites] = useState([]);
  //toggleFavorite saves favorited photoId state in favorites array
  const toggleFavorite = (photoId) => {
    if (favorites.includes(photoId)) {
      const copyOfFavorites = [...favorites].filter(favPhotoId => favPhotoId !== photoId)
      setFavorites(copyOfFavorites)
      return
    }
    setFavorites(prev => [...prev, photoId])
  }

  return (
    <div className="home-route">
      <TopNavigation favoriteExists={favorites.length > 0} />
      <PhotoList photoData={photoData} topicData={topicData} favorites={favorites} toggleFavorite={toggleFavorite} openModal={openModal} closeModal={closeModal} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {modalOpen && selectedPhoto !== null && (
        <PhotoDetailsModal photoData={photoData} openModal={openModal} closeModal={closeModal} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};


export default HomeRoute;
