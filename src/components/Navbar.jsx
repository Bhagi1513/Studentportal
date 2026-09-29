import { Link, useNavigate ,useLocation} from "react-router";

function Navbar() {

    const navigate = useNavigate();
     const location = useLocation();

    const isLoggedIn =
        localStorage.getItem("isLoggedIn") === "true";

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };

    return (
        <nav className="Navbar">

            <h2>Student Portal</h2>

            <div className="Navlinks">

                <Link to="/">Home</Link>

                <Link to="/courses">Courses</Link>

               {isLoggedIn && (
    <Link
        to="/dashboard"
        className={
            location.pathname.startsWith("/dashboard")
                ? "active-nav"
                : ""
        }
    >
        Dashboard
    </Link>
)}

                {!isLoggedIn ? (
                    <Link
                        to="/login"
                        className="login-link"
                    >
                        Login
                    </Link>
                ) : (
                    <button
                        className="logout-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                )}

            </div>

        </nav>
    );
}

export default Navbar;