import { useEffect, useState } from "react";
import { getCommentsByArticle } from "../utils/api";
import CommentCard from "./CommentCard";
import { commentList } from "../css/Comments.module.css";
import { error, loading } from "../utils/htmlUtils";
import Collapsible from "./Collapsible";

const Comments = ({article_id}) => {
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
    <Collapsible >
    <ul className={commentList}>
      {comments.map((comment) => {
        return (
        <CommentCard key={comment.comment_id} comment={comment} />
        );
      })}
    </ul>
    </Collapsible>
  );
};

export default Comments;
