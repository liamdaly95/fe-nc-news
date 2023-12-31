import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import TopicArticles from "./components/TopicArticles";
import TopicList from "./components/TopicList";
import Error from "./components/Error";
import Login from "./components/Login"

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/topics" element={<TopicList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/topics/:topic" element={<TopicArticles />} />
        <Route path="/*" element={<Error message={"Route does not exist."} />} />
      </Routes>
    </>
  );
}

export default App;
