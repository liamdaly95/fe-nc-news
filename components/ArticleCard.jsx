import { Link } from "react-router-dom";
import { articleCard, property, articleImg, topic } from "../css/ArticleCard.module.css";
import { convertDate } from "../utils/utils.js";

const ArticleCard = ({ article }) => {
  const newDateTime = convertDate(article.created_at);
  const newTopic = `${article.topic.slice(0,1).toUpperCase()}${article.topic.slice(1)}`
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
        <p className={property}>⬆ {article.votes} ⬇</p>
        <p className={property}>{article.comment_count} comments</p>
      </span>
    </div>
  );
};

export default ArticleCard;