import React from "react";

import "../styles/TopicListItem.scss";

// const topicData = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <ul className="topic-list__title">{props.slug}</ul>
    </div>
  );
};


export default TopicListItem;
