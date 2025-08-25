import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../config/axiosInstance";
import { useAuth } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

const Login: React.FC = () => {
  type JwtPayload = {
    sub: string;

    role: string[];
    iat: number;
    exp: number;
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      const token = response.data.data;
      const decodedToken = jwtDecode<JwtPayload>(token);
      const role = decodedToken.role[0] as "ADMIN" | "USER";

      const user = {
        id: decodedToken.sub,
        email: decodedToken.sub,
        role,
        token,
      };
      login(user);
      navigate("/");
    } catch (error) {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <>
      <div>
        <form>
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3">
                <br />
                <h3 className="text-center">Login</h3>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="form-control input-item"
                      id="email"
                      name="email"
                      value={email}
                      autoComplete="username"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="form-control input-item"
                      name="password"
                      value={password}
                      autoComplete="current-password"
                      required
                    />
                  </div>
                </div>

                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}

                <div className="d-grid gap-2 col-8 mx-auto">
                  <button
                    className="btn btn-primary"
                    onClick={handleLogin}
                    type="button"
                  >
                    Login
                  </button>
                  <span className="text-center">OR</span>
                  <Link
                    className="btn btn-outline-dark"
                    type="button"
                    to={"/signup"}
                    style={{ marginBottom: 30 }}
                  >
                    Create New Account
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

export default Login;
