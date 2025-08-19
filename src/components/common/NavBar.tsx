import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";

const NavBar: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Employee Management System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {" "}
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              {isAuthenticated && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/employeeList">
                      View All Employees
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/addEmployee">
                      Add New Employee
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="d-flex flex-column flex-md-row gap-2">
            {isAuthenticated ? (
              <button
                className="btn btn-danger"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="mb-2 mb-md-0">
                  <button
                    className="btn btn-primary w-100 w-md-auto"
                    type="button"
                  >
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button
                    className="btn btn-success w-100 w-md-auto"
                    type="button"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
