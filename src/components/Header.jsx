import {nav} from "../../css/Header.module.css"
import {Link} from "react-router-dom"
import {link} from "../../css/Header.module.css"
const Header = () => {
   return <nav className={nav}>
    <Link to="/articles" className={link}>Articles</Link>
    <Link to="/topics" className={link}>Topics</Link>
   </nav>
}

export default Header