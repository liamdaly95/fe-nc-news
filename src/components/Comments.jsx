import { useEffect, useState } from "react";
import { getCommentsByArticle } from "../../utils/api";
import CommentCard from "./CommentCard";
import { commentList } from "../../css/Comments.module.css";
import { error, loading } from "../../utils/htmlUtils";
import Collapsible from "./Collapsible";
import AddComment from "./AddComment";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
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
    <Collapsible>
      <AddComment article_id={article_id} setComments={setComments} />
      <ul className={commentList}>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} setComments={setComments} />;
        })}
      </ul>
    </Collapsible>
  );
};

export default Comments;
