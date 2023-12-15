import { convertDate } from "../../utils/utils";
import { commentCard, property } from "../../css/Comments.module.css";
import DeleteCommentButton from "./DeleteCommentButton";
import { useContext, useState } from "react";
import { UserContext } from "../context/user";
import ArticleVoteButton from "./ArticleVoteButton";

const CommentCard = ({ com, setComments }) => {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState(com)
  const [isHidden, setIsHidden] = useState(true);
  const [hasVoted, setHasVoted] = useState(false);
  const newDate = convertDate(comment.created_at);
  return (
    <div className={commentCard}>
      <p className={property}>
        {newDate} by {comment.author}
      </p>
      <p className={property}>{comment.body}</p>
      <p className={property}>
        <ArticleVoteButton
          inc_votes={1}
          type={"comment"}
          id={comment.comment_id}
          setState={setComment}
          setIsHidden={setIsHidden}
          hasVoted={hasVoted}
          setHasVoted={setHasVoted}
        />{" "}
        {comment.votes} <ArticleVoteButton
          inc_votes={-1}
          type={"comment"}
          id={comment.comment_id}
          setState={setComment}
          setIsHidden={setIsHidden}
          hasVoted={hasVoted}
          setHasVoted={setHasVoted}
        />
        {isHidden ? null : "Sorry, request failed!"}
      </p>
      {user === comment.author && <DeleteCommentButton comment={comment} setComments={setComments} />}
    </div>
  );
};

export default CommentCard;
