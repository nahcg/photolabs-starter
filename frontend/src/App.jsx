import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {

  const { state, actions } = useApplicationData();
  const { selectedPhoto, favorites, modalOpen } = state;

  const { 
    openModal, 
    closeModal, 
    toggleFavorite, 
    setSelectedPhoto, 
    getPhotosByTopic, 
    topicData, 
    photoData 
  } = actions;

  return (
    <div className="App">
      <HomeRoute
        topicData={topicData}
        photoData={photoData}
        openModal={openModal}
        closeModal={closeModal}
        toggleFavorite={toggleFavorite}
        setSelectedPhoto={setSelectedPhoto}
        getPhotosByTopic={getPhotosByTopic}
        selectedPhoto={selectedPhoto}
        favorites={favorites}
        modalOpen={modalOpen}
      />
    </div>
  );
};

export default App;
