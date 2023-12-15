import { Link } from "react-router-dom";
import { articleCard, property, articleImg, topic, link} from "../../css/Articles.module.css";
import { convertDate } from "../../utils/utils.js";
import { useState } from "react";
import ArticleVoteButton from "./ArticleVoteButton.jsx";

const ArticleCard = ({ art }) => {
  const [article, setArticle] = useState(art);
  const [isHidden, setIsHidden] = useState(true);
  const [hasVoted, setHasVoted] = useState(false);
  const newDateTime = convertDate(article.created_at);
  const newTopic = `${article.topic.slice(0, 1).toUpperCase()}${article.topic.slice(1)}`;

  return (
    <div className={articleCard}>
      <img className={articleImg} src={article.article_img_url} />
      <span>
        <Link className={link} to={`/articles/${article.article_id}`}>
          <p className={property}>
            {article.title} by {article.author}
          </p>
        </Link>
        <Link className={link} to={`/topics/${article.topic}`}>
          <p className={topic}>
            {newTopic}
            </p>
          </Link>
        <p className={property}>{newDateTime}</p>
        <p className={property}>
          <ArticleVoteButton
            inc_votes={1}
            type={"article"}
            id={article.article_id}
            setState={setArticle}
            setIsHidden = {setIsHidden}
            hasVoted = {hasVoted}
            setHasVoted = {setHasVoted}
          />{" "}
          {article.votes}{" "}
          <ArticleVoteButton
            inc_votes={-1}
            type={"article"}
            id={article.article_id}
            setState={setArticle}
            setIsHidden = {setIsHidden}
            hasVoted = {hasVoted}
            setHasVoted = {setHasVoted}
          />{" "}
          {isHidden ? null : "Sorry, request failed!"}
        </p>
        <p className={property}>{article.comment_count} comments</p>
      </span>
    </div>
  );
};

export default ArticleCard;
