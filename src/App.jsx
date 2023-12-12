import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../components/Header";
import ArticleList from "../components/ArticleList"
import SingleArticle from "../components/singleArticle";

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/articles" element = {<ArticleList/>} />
        <Route path="/articles/:article_id" element = {<SingleArticle/>} />
      </Routes>
      
    </>
  );
}

export default App;
