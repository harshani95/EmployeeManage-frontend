import AxiosInstance from "../config/axiosInstance";
import { SetStateAction, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [formErrors, setFormErrors] = useState({
    username: false,
    email: false,
    password: false,
    role: false,
  });

  const navigate = useNavigate();

  const handleUsernameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setUsername(e.target.value);
    setFormErrors({ ...formErrors, username: false });
  };

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
    setFormErrors({ ...formErrors, email: false });
  };

  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
    setFormErrors({ ...formErrors, password: false });
  };

  const handleRoleChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setRole(e.target.value);
    setFormErrors({ ...formErrors, role: false });
  };

  const signup = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await AxiosInstance.post("/users/register", {
        username,
        email,
        password,
        role,
      });
      alert("Registation Successfully");

      console.log(response);
      navigate("/login");

      setUsername(""),
        setEmail(""),
        setPassword(""),
        setRole(""),
        setFormErrors({
          username: false,
          email: false,
          password: false,
          role: false,
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={signup}>
          {formErrors.email || formErrors.password ? (
            <div className="alert alert-danger" role="alert">
              Please fill in all required fields.
            </div>
          ) : null}
          <div className="container">
            <div className="row">
              <div className="card col-md-5 offset-md-3">
                <br />
                <h2 className="text-center">Sign Up</h2>
                <div className="card-body content">
                  <div className="form-group">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      onChange={handleUsernameChange}
                      value={username}
                      id="username"
                      name="username"
                      className={`form-control input-item ${
                        formErrors.username ? "is-invalid" : ""
                      }`}
                      autoComplete="given-name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      onChange={handleEmailChange}
                      value={email}
                      name="email"
                      id="email"
                      className={`form-control input-item ${
                        formErrors.email ? "is-invalid" : ""
                      }`}
                      autoComplete="usernamme"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      onChange={handlePasswordChange}
                      placeholder="Must be 8-20 characters long"
                      value={password}
                      name="password"
                      id="password"
                      className={`form-control input-item ${
                        formErrors.password ? "is-invalid" : ""
                      }`}
                      autoComplete="current-password"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="role" className="form-label">
                      Role
                    </label>
                    <select
                      onChange={handleRoleChange}
                      value={role}
                      id="role"
                      name="role"
                      className={`form-control input-item ${
                        formErrors.role ? "is-invalid" : ""
                      }`}
                      autoComplete="given-name"
                      required
                    >
                      <option value="ROLE_USER">User</option>
                      <option value="ROLE_ADMIN">Admin</option>
                    </select>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2 justify-content-center mt-3">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    style={{
                      marginBottom: 30,
                    }}
                  >
                    Sign Up
                  </button>
                  <span
                    style={{
                      marginBottom: 30,
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  >
                    OR
                  </span>
                  <Link
                    className="btn btn-outline-dark"
                    to="/login"
                    style={{ marginBottom: 30 }}
                  >
                    Already have an Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
