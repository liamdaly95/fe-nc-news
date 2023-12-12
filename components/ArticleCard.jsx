import { Link } from "react-router-dom";
import { articleCard, property, articleImg, topic } from "../css/Articles.module.css";
import { convertDate } from "../utils/utils.js";
import VoteButton from "./VoteButton";


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
        <p className={property}><VoteButton direction="up"/> {article.votes} <VoteButton direction="down"/></p>
        <p className={property}>{article.comment_count} comments</p>
      </span>
    </div>
  );
};

export default ArticleCard;
