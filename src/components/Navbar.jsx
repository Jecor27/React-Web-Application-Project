import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/">
          <button className="nav-button">Bounties</button>
        </Link>
      </div>
      <div className="right">
        <Link to="/Worlds">
          <button className="nav-button">Worlds</button>
        </Link>
      </div>
    </nav>
  );
}
