import { Link } from "react-router-dom";
import { articleCard, property, articleImg, topic } from "../../css/Articles.module.css";
import { convertDate } from "../../utils/utils.js";
import { updateArticleVote } from "../../utils/api.js";
import { useState } from "react";

const ArticleCard = ({ art }) => {
  const [article, setArticle] = useState(art)
  const [isHidden, setIsHidden] = useState(true)
  const newDateTime = convertDate(article.created_at);
  const newTopic = `${article.topic.slice(0, 1).toUpperCase()}${article.topic.slice(1)}`;
  const handleClick = (inc_votes) => {
    updateArticleVote(article.article_id,inc_votes).catch(() => {
      setArticle((currArticle) => {
        return {...currArticle, votes: currArticle.votes - inc_votes}
      })
      setIsHidden(false)
      setTimeout(() => {
      setIsHidden(true)
      }, 3000)
    })
    setArticle((currArticle) => {
      return {...currArticle, votes: currArticle.votes + inc_votes}
    })
    
  }
  return (
    <div className={articleCard}>
      <img className={articleImg} src={article.article_img_url} />
      <span>
        <Link to={`/articles/${article.article_id}`}>
          <p className={property}>
            {article.title} by {article.author}
          </p>
        </Link>
        <p className={topic}>{newTopic}</p>
        <p className={property}>{newDateTime}</p>
        <p className={property}>
        <button onClick={() => {
      handleClick(1)
    }}>⬆</button> {article.votes} <button onClick={() => {
      handleClick(-1)
    }}>⬇</button> {isHidden ? null : "Sorry, request failed!"}
        </p>
        <p className={property}>{article.comment_count} comments</p>
      </span>
    </div>
  );
};

export default ArticleCard;
