import { useState } from "react";
import { deleteComment } from "../../utils/api";
import { voteButton } from "../../css/Buttons.module.css";
const DeleteCommentButton = ({ comment, setComments }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [requestFailed, setRequestFailed] = useState(false);
  const handleClick = () => {
    setIsDeleting(true);
    deleteComment(comment.comment_id)
      .then(() => {
        setComments((currComments) => {
          const index = currComments.findIndex((element) => {
            return element.comment_id === comment.comment_id;
          });
          const newComments = currComments.toSpliced(index, 1);
          return newComments;
        });
      })
      .catch(() => {
        setRequestFailed(true);
      })
      .finally(() => {
        setIsDeleting(false);
        setTimeout(() => {
          setRequestFailed(false);
        }, 3000);
      });
  };
  return (
    <>
      <button className={voteButton} disabled={isDeleting} onClick={handleClick}>
        Delete
      </button>
      {!isDeleting ? null : <p>Comment is being deleted...</p>}
      {!requestFailed ? null : <p>Sorry request failed!</p>}
    </>
  );
};

export default DeleteCommentButton;
