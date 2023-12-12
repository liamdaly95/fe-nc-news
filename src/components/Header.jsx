import {nav} from "../../css/Header.module.css"
import {Link} from "react-router-dom"

const Header = () => {
   return <nav className={nav}>
    <Link to="/articles">Articles</Link>
    <Link to="/topics">Topics</Link>
   </nav>
}

export default Header