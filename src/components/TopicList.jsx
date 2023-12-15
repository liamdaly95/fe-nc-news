import { useState, useEffect } from "react";
import { loading, error } from "../../utils/htmlUtils.jsx";
import { getTopics } from "../../utils/api.js";
import {topicList, topicCard, topicName, topicDesc, topicLink} from "../../css/Topics.module.css"
import {Link} from "react-router-dom"


const TopicList = () => {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
      getTopics()
        .then(({ data }) => {
          setTopics(data.topics);
        })
        .catch(() => {
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, []);
  
    if (isLoading) {
      return loading();
    }
    if (isError) {
      return error();
    }
    return (
      <ul className={topicList}>
        {topics.map((topic) => {
            const newTopic = `${topic.slug.slice(0, 1).toUpperCase()}${topic.slug.slice(1)}`;
          return (<div className={topicCard} key={newTopic}><Link className={topicLink} to={`/topics/${topic.slug}`}>
          <p className={topicName}>{newTopic}</p>
          <p className={topicDesc}>{topic.description}</p>
          </Link></div>);
        })}
      </ul>
    );
}

export default TopicList