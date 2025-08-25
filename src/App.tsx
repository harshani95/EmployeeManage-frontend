import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import AddEmployee from "./pages/AddEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";
import EmployeeProfile from "./pages/EmployeeProfile";

import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/AuthContext";

const App: React.FC = () => {
  const { user } = useAuth();
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/employeeList"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/addEmployee"
          element={
            user?.role === "ADMIN" ? (
              <AddEmployee />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
        <Route path="/employeeProfile/:id" element={<EmployeeProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
