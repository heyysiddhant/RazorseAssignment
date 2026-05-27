import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>EMS</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/services">Services</Link>

        <Link to="/profile">Profile</Link>

        <Link to="/user">Users</Link>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
