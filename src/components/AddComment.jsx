import { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { postNewComment } from "../../utils/api";

const AddComment = ({ article_id, setComments }) => {
  const { user } = useContext(UserContext);
  const [body, setBody] = useState("");
  const [bodyError, setBodyError] = useState(false);
  const [isPosting, setIsPosting] = useState(false)
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
      })
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newComment">
          <input type="text" value={body} onChange={handleChange} />
        </label>
        {!bodyError ? null : <p>Please add text</p>}
        {!isPosting ? null : <p>Comment is being posted...</p>}
        <button disabled={isPosting}>Add comment</button>
      </form>
    </>
  );
};

export default AddComment;
