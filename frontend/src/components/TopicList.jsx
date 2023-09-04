import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const topics = props.topicData.map(topic => {

    return (
      <TopicListItem
        key={topic.id}
        slug={topic.slug}
        title={topic.title}
        id={topic.id}
        getPhotosByTopic={props.getPhotosByTopic}
      />)
  })

  return (
    <div className="top-nav-bar__topic-list">
      {topics}
    </div>
  );
};


export default TopicList;
