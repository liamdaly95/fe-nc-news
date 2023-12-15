import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils/api";
import { loading, error } from "../../utils/htmlUtils";
import { singleArticle, property, articleImg } from "../../css/SingleArticle.module.css";
import { convertDate } from "../../utils/utils";
import Comments from "./Comments";
import ArticleVoteButton from "./ArticleVoteButton";
import Error from "./Error";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [article, setArticle] = useState({});
  const [isHidden, setIsHidden] = useState(true);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    getArticleById(article_id)
      .then(({ data }) => {
        setArticle(data.article);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return loading();
  }
  if (error) {
    return <Error message = {error} />;
  }
  const newDateTime = convertDate(article.created_at);
  const newTopic = `${article.topic.slice(0, 1).toUpperCase()}${article.topic.slice(1)}`;

  return (
    <>
      <article className={singleArticle}>
        <p>{article.title} by {article.author}</p>
        <img className={articleImg} src={article.article_img_url} />
        <p className={property}>{newTopic}</p>
        <p className={property}>{newDateTime}</p>
        <p className={property}>{article.body}</p>
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
        <Comments article_id = {article.article_id} />
      </article>
    </>
  );
};

export default SingleArticle;
