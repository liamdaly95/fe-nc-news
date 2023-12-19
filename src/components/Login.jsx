import { useContext, useState } from "react"
import { UserContext } from "../context/user"
import {loginInput} from "../../css/Login.module.css"
import {voteButton} from "../../css/Buttons.module.css"

const Login = () => {
    const {user, setUser} = useContext(UserContext)
    const [input, setInput] = useState("")
    
    const handleChange = (event) => {
        setInput(event.target.value)
    }
    const handleSubmit = () => {
        setUser(input)
    }
    if(user) {
        return (<p>Welcome {user}!</p>)
    }
    else {
        return (<form onSubmit={handleSubmit}>
            <label>Please login</label>
            <input type="text" placeholder="username..." value={input} onChange={handleChange} className={loginInput}></input>
            <button className={voteButton}>Login</button>
        </form>)
    }
}

export default Login;