import { Provider } from 'react-redux';
import store from './redux/store';

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

const App: React.FC = () => {
  
  return (
    <Provider store={store}>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup/>}/>
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path='/editEmployee/:id' element={<UpdateEmployee/>}/>
          <Route path='/employeeProfile/:id' element={<EmployeeProfile/>}/>
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;



