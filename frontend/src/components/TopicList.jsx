import React from "react";

import "../styles/TopicList.scss";
import topicData from "topicData";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const topics = props.topicData.map(topic => {

    return (
      <TopicListItem
        key={topic.id}
        slug={topic.slug}
        title={topic.title}
      />)
  })

  return (
    <div className="top-nav-bar__topic-list">
      {topics}
    </div>
  );
};


export default TopicList;
