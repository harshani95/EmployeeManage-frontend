import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
import Home from './components/common/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import  NavBar  from './components/common/NavBar'
import AddEmployee from './components/employee/AddEmployee';
import EmployeeList from './components/employee/EmployeeList';

function App() {

  return (
    <>
    <Router >
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/addEmployee' element={<AddEmployee/>}/>
      <Route path='/employeeList' element={<EmployeeList/>}/>
    </Routes>
    </Router>
   
    </>
  )
}

export default App