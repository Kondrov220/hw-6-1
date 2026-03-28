import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <ul className="header">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
    </ul>
    </>
  );
}

export default Header;
