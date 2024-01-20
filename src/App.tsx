import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
import Home from './components/common/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import  NavBar  from './components/common/NavBar'
import AddEmployee from './components/employee/AddEmployee';
import EmployeeList from './components/employee/EmployeeList';
import UpdateEmployee from './components/employee/UpdateEmployee';
import EmployeeProfile from './components/employee/EmployeeProfile';
import { useState } from 'react';


// const App = () => {
  
//   return (
//     <>
//     <Router >
//     <NavBar />
//     <Routes>
  
//       <Route path='/' element={<Home/>}/>
//       <Route path='/addEmployee' element={<AddEmployee/>}/>
//       <Route path='/employeeList' element={<EmployeeList/>}/>
//       <Route path='/editEmployee/:id' element={<UpdateEmployee/>}/>
//       <Route path='/employeeProfile/:id' element={<EmployeeProfile/>}/>
   
//       <Route path='/login' element={<Login/>}/>
//       <Route path='/signup' element={<Signup/>}/>
//     </Routes>
//     </Router>
//     </>
//   )
// }

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Your authentication logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Your logout logic here
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path='/signup' element={<Signup/>}/>
        {isLoggedIn && (
          <>
            <Route path="/employeeList" element={<EmployeeList />} />
            <Route path="/addEmployee" element={<AddEmployee />} />
            <Route path='/editEmployee/:id' element={<UpdateEmployee/>}/>
//          <Route path='/employeeProfile/:id' element={<EmployeeProfile/>}/>
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;



