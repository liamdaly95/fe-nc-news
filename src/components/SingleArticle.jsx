import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils/api";
import { loading, error } from "../../utils/htmlUtils";
import { singleArticle, property, articleImg } from "../../css/SingleArticle.module.css";
import { convertDate } from "../../utils/utils";
import Comments from "./Comments";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(article_id)
      .then(({ data }) => {
        setArticle(data.article);
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
  const newDateTime = convertDate(article.created_at);
  const newTopic = `${article.topic.slice(0, 1).toUpperCase()}${article.topic.slice(1)}`;

  return (
    <>
      <article className={singleArticle}>
        <img className={articleImg} src={article.article_img_url} />
        <p className={property}>{newTopic}</p>
        {article.title} by {article.author}
        <p className={property}>{newDateTime}</p>
        <p className={property}>{article.body}</p>
        <p className={property}>
        <button>⬆</button> {article.votes} <button>⬇</button>
        </p>
        <p className={property}>{article.comment_count} comments</p>
        <Comments article_id = {article.article_id} />
      </article>
    </>
  );
};

export default SingleArticle;
