import { Link, useNavigate } from "react-router-dom";
import { LogOut, LayoutDashboard, BookOpen } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("registeredUser") || "{}"
  );

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  };

  return (
    <nav className="navbar">

      {/* Logo */}

      <Link to="/dashboard" className="navbar-logo">

        <div className="navbar-logo-icon">
          DS
        </div>

        <div>
          <strong>Digital Seva</strong>
          <span>Training Portal</span>
        </div>

      </Link>


      {/* Navigation */}

      <div className="navbar-links">

        <Link to="/dashboard">
          <LayoutDashboard size={17} />
          Dashboard
        </Link>

        <Link to="/digilocker">
          <BookOpen size={17} />
          Training
        </Link>

      </div>


      {/* User */}

      <div className="navbar-user">

        <div className="navbar-user-info">

          <div className="user-avatar">
            {user?.name
              ? user.name.charAt(0).toUpperCase()
              : "U"}
          </div>

          <div className="user-details">

            <strong>
              {user?.name || "User"}
            </strong>

            <span>
              Learner
            </span>

          </div>

        </div>


        <button
          className="logout-button"
          onClick={handleLogout}
        >
          <LogOut size={17} />
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;