import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-z45s.onrender.com/api",
});

export const getArticles = (topic) => {
  const searchParams = { topic };
  return newsApi.get(`/articles`, { params: searchParams });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`);
};

export const updateArticleVote = (article_id, inc_votes) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes });
};

export const getCommentsByArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`);
};

export const getTopics = () => {
  const searchParams = {  };
  return newsApi.get(`/topics`, { params: searchParams });
};