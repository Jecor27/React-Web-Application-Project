import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <Link to="/">
          <button>Bounties</button>
        </Link>
        <Link to="/Worlds">
          <button>Worlds</button>
        </Link>
      </div>
    </>
  );
}
