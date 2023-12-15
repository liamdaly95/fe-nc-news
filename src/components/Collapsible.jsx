import { useState } from "react";
import {voteButton} from "../../css/Buttons.module.css"

const Collapsible = ({children, setIsCollapsed, isCollapsed}) => {
    const toggleComments = () => {
        setIsCollapsed(!isCollapsed)
    }
    return (<div>
        <button className={voteButton} onClick={toggleComments}>{isCollapsed ? "Show" : "Hide"} comments</button>
        {isCollapsed ? null : children}
    </div>)
};

export default Collapsible;
