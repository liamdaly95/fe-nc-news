import { useState, useEffect } from "react";
import { articleList } from "../css/Articles.module.css";
import ArticleCard from "./ArticleCard.jsx";
import { loading, error } from "../utils/htmlUtils";
import { getArticles } from "../utils/api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getArticles().then(({data}) => {
        setArticles(data.articles)
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
    <ul className={articleList}>
      {articles.map((article) => {
        return (<ArticleCard key={article.title} article={article} />);
      })}
    </ul>
  );
};

export default ArticleList;
