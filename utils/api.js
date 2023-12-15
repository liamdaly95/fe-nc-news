import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-z45s.onrender.com/api",
});

export const getArticles = (topic, sort_by, order) => {
  const queryParams = { topic, sort_by, order };
  return newsApi.get(`/articles`, { params: queryParams });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`);
};

export const updateArticleVote = (article_id, inc_votes) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes });
};

export const updateCommentVote = (comment_id, inc_votes) => {
  return newsApi.patch(`/comments/${comment_id}`, { inc_votes });
};

export const getCommentsByArticle = (article_id) => {
    return axios.get(`https://nc-news-z45s.onrender.com/api/articles/${article_id}/comments`)
}

export const postNewComment = (username, body, article_id) => {
  return axios.post(`https://nc-news-z45s.onrender.com/api/articles/${article_id}/comments`, {body, username})
}


export const deleteComment = (comment_id) => {
  return axios.delete(`https://nc-news-z45s.onrender.com/api/comments/${comment_id}`);
};



export const getTopics = () => {
  const queryParams = {  };
  return newsApi.get(`/topics`, { params: queryParams });
};