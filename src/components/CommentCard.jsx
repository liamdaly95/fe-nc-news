import { convertDate } from "../../utils/utils";
import { commentCard, property } from "../../css/Comments.module.css";
import DeleteCommentButton from "./DeleteCommentButton";
import { useContext } from "react";
import { UserContext } from "../context/user";


const CommentCard = ({ comment, setComments }) => {
 const {user} = useContext(UserContext)

  
  const newDate = convertDate(comment.created_at);
  return (
    <div className={commentCard}>
      <p className={property}>
        {comment.author} {newDate}
      </p>
      <p className={property}>{comment.body}</p>
      <p className={property}><button>⬆</button> {comment.votes} <button>⬇</button></p>
      {user === comment.author && <DeleteCommentButton comment = {comment} setComments={setComments} />}
      
    </div>
  );
};

export default CommentCard;
