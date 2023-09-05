import React from "react";

import "../styles/TopicListItem.scss";

//renders each topic in navbar and allows user to click each topic 
const TopicListItem = (props) => {
  const topicClick = () => {
    props.getPhotosByTopic(props.id); 
  };
  return (
    <div className="topic-list__item">
      <ul className="topic-list__item-title" onClick={topicClick}>{props.title}</ul>
    </div>
  );
};


export default TopicListItem;
