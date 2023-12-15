import { useState, useEffect } from "react";
import { articleList } from "../../css/Articles.module.css";
import ArticleCard from "./ArticleCard.jsx";
import { loading, error } from "../../utils/htmlUtils.jsx";
import { getArticles } from "../../utils/api.js";
import SearchBar from "./SearchBar.jsx";
import { useSearchParams } from "react-router-dom";
import Error from "./Error.jsx";

const ArticleList = ({topic}) => {
  const sortRef = {Date: "created_at", Comments: "comment_count", Votes: "votes"}
  const [searchParams, setSearchParams] = useSearchParams()
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [sort, setSort] = useState(sortRef[searchParams.get("sort")] || "created_at")
  const [order, setOrder] = useState(searchParams.get("order") || "DESC")

  useEffect(() => {
    getArticles(topic, sort, order)
      .then(({ data }) => {
        setArticles(data.articles);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [sort, order]);

  if (isLoading) {
    return loading();
  }
  if (error) {
    return <Error message={error}/>;
  }
  return (
    <>
    <SearchBar sort={sort} setSort={setSort} order={order} setOrder={setOrder} setSearchParams={setSearchParams} />
    <ul className={articleList}>
      {articles.map((article) => {
        return <ArticleCard key={article.title} art={article} />;
      })}
    </ul>
    </>
  );
};

export default ArticleList;
