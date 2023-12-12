import { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { postNewComment } from "../../utils/api";

const AddComment = ({article_id, setComments}) => {
  const { user } = useContext(UserContext);
  const [body, setBody] = useState("");
  const [bodyError, setBodyError] = useState(false)
  const handleChange = (event) => {
    setBody(event.target.value);
  };
  const validateInput = (body) => {
    console.log(body, "<<body");
    if(body === ""){setBodyError(true) 
        console.log(bodyError);}
    else {setBodyError(false) 
        console.log(bodyError);}
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    validateInput(body)
    if(!bodyError){
        setBody("")
    postNewComment(user, body, article_id).then(({data}) => {
        setComments((currComments) => {
            return [data.comment, ...currComments]
        })
    })
    } else {setTimeout(() => {
        setBodyError(false)
    })}
    
  }
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
