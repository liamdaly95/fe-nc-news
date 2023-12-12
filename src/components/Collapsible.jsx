import { useState } from "react";

const Collapsible = ({children}) => {
    const [isHidden, setIsHidden] = useState(false)
    const toggleComments = () => {
        setIsHidden(!isHidden)
    }
    return (<div>
        <button onClick={toggleComments}>{isHidden ? "Show" : "Hide"} comments</button>
        {isHidden ? null : children}
    </div>)
};

export default Collapsible;
