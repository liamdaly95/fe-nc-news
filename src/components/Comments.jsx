import { useEffect, useState } from "react";
import { getCommentsByArticle } from "../../utils/api";
import CommentCard from "./CommentCard";
import { commentList, commentSection } from "../../css/Comments.module.css";
import { error, loading } from "../../utils/htmlUtils";
import Collapsible from "./Collapsible";
import AddComment from "./AddComment";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true)

  useEffect(() => {
    getCommentsByArticle(article_id)
      .then(({ data }) => {
        setComments(data.comments);
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
    <section className={commentSection}>
      <AddComment article_id={article_id} setComments={setComments} setIsCollapsed={setIsCollapsed}/>
    <Collapsible setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} >
      <ul className={commentList}>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} com={comment} setComments={setComments} />;
        })}
      </ul>
    </Collapsible>
    </section>
  );
};

export default Comments;
