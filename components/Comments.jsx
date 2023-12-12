import { useEffect } from "react";
import { getCommentsByArticle } from "../utils/api";
import CommentCard from "./CommentCard";
import { commentList } from "../css/Comments.module.css";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getCommentsByArticle()
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
    <ul className={commentList}>
      {comments.map((comment) => {
        <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </ul>
  );
};

export default Comments;
