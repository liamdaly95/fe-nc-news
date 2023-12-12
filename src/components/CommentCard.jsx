import { convertDate } from "../../utils/utils";
import { commentCard, property } from "../../css/Comments.module.css";

const CommentCard = ({ comment }) => {
  const newDate = convertDate(comment.created_at);
  return (
    <div className={commentCard}>
      <p className={property}>
        {comment.author} {newDate}
      </p>
      <p className={property}>{comment.body}</p>
      <p className={property}><button>⬆</button> {comment.votes} <button>⬇</button></p>
    </div>
  );
};

export default CommentCard;
