import { nav } from "../../css/Header.module.css";
import { Link } from "react-router-dom";
import { link } from "../../css/Header.module.css";
import { useContext } from "react";
import { UserContext } from "../context/user";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <nav className={nav}>
      <Link to="/" className={link}>
        {user ? user : "Login"}
      </Link>
      <Link to="/articles" className={link}>
        Articles
      </Link>
      <Link to="/topics" className={link}>
        Topics
      </Link>
    </nav>
  );
};

export default Header;
