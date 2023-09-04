import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={props.topicData} getPhotosByTopic={props.getPhotosByTopic}/>
      <FavBadge isFavPhotoExists={props.favoriteExists} />
    </div>
  )
}



export default TopNavigation;