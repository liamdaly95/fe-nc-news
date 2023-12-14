import ArticleList from "./ArticleList"
import { useParams } from "react-router-dom";

const TopicArticles = () => {
    const {topic} = useParams()
  return <ArticleList topic = {topic}/>
}

export default TopicArticles