import { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { postNewComment } from "../../utils/api";

const AddComment = ({ article_id, setComments }) => {
  const { user } = useContext(UserContext);
  const [body, setBody] = useState("");
  const [bodyError, setBodyError] = useState(false);
  const handleChange = (event) => {
    setBody(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (body.length === 0) {
      setBodyError(true);
      console.log("comment not posted");
      setTimeout(() => {
        setBodyError(false)
      },3000)
    } else {
      setBody("");
      setBodyError(false)
      postNewComment(user, body, article_id).then(({data}) => {
          setComments((currComments) => {
              return [data.comment, ...currComments]
          })
      })
      console.log("comment posted");
    }
    
    // if (!bodyError) {
    // } else {
    //   setTimeout(() => {
    //     setBodyError(false);
    //     console.log("comment not posted");
    //   });
    // }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newComment">
          <input type="text" value={body} onChange={handleChange} />
        </label>
        {!bodyError ? null : <p>Please add text</p>}
        <button>Add comment</button>
      </form>
    </>
  );
};

export default AddComment;
