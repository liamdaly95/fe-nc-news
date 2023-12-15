import { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { postNewComment } from "../../utils/api";
import {voteButton} from "../../css/Buttons.module.css"
import {addComment, commentInput} from "../../css/Comments.module.css"
import Error from "../components/Error.jsx"

const AddComment = ({ article_id, setComments, setIsCollapsed }) => {
  const { user } = useContext(UserContext);
  const [body, setBody] = useState("");
  const [bodyError, setBodyError] = useState(false);
  const [isPosting, setIsPosting] = useState(false)
  const [requestFailed, setRequestFailed] = useState(false)

  const handleChange = (event) => {
    setBody(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (body.length === 0) {
      setBodyError(true);
      setTimeout(() => {
        setBodyError(false)
      },3000)
    } else {
      setBody("");
      setBodyError(false)
      setIsPosting(true)
      postNewComment(user, body, article_id).then(({data}) => {
          setComments((currComments) => {
              return [data.comment, ...currComments]
          })
          setIsPosting(false)
          setIsCollapsed(false)
      }).catch(() => {
        setIsPosting(false)
        setRequestFailed(true)
      }).finally(() => {
        setTimeout(() => {
        setRequestFailed(false)
        }, 3000);
      })
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={addComment}>
        <label htmlFor="newComment" >
          <input type="text" value={body} className={commentInput} placeholder="type comment here" onChange={handleChange} />
        </label>
        {!bodyError ? null : <Error message = {"Please add text"}/>}
        {!isPosting ? null : <p>Comment is being posted...</p>}
        
        {!requestFailed ? null : <Error message = {"Sorry request failed!"}/>}
        <button className={voteButton} disabled={isPosting}>Add comment</button>
        
      </form>
    </>
  );
};

export default AddComment;
