import { deleteComment } from "../../utils/api";

const DeleteCommentButton = ({ comment, setComments }) => {
  const handleClick = () => {
    ;
    deleteComment(comment_id).then(() => {
        setComments((currComments) => {
            const index = currComments.findIndex((element) => {
              return element.comment_id === comment.comment_id;
            });
            const newComments = currComments.toSpliced(index, 1);
            return newComments;
          })
    })
  };
  return (
    <>
      <button onClick={handleClick}>Delete</button>
    </>
  );
};

export default DeleteCommentButton;
