import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import "./Navbar.css";

export default function Navbar() {
  const { userData, logout } = useUserContext();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        {userData ? (
          <Link to="/profil">
            <li>profil</li>
          </Link>
        ) : (
          <Link to="/login">
            <li>Login</li>
          </Link>
        )}
        {!userData || userData !== null   && <button className='navButton' onClick={handleLogout}>Logout</button>}
      </ul>
    </nav>
  );
}
