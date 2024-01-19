import AxiosInstance from '../config/axiosInstance';
import { SetStateAction, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup:React.FC = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({  firstName: false, lastName: false ,email: false, password: false });

    const navigate = useNavigate();

    const handleFirstNameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setFirstName(e.target.value);
      setFormErrors({ ...formErrors, firstName: false });
    };
  
    const handleLastNameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setLastName(e.target.value);
      setFormErrors({ ...formErrors, lastName: false });
    };

    const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setEmail(e.target.value);
      setFormErrors({ ...formErrors, email: false });
    };
  
    const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setPassword(e.target.value);
      setFormErrors({ ...formErrors, password: false });
    };

    const signup = async (e)=> {
      e.preventDefault(); 
        try{
            const response = await AxiosInstance.post("/users/register",{
                firstName, lastName, email, password  
              
        });
        alert("Registation Successfully");
        
        console.log(response);
        navigate('/login');
        
        setFirstName(''),
        setLastName(''),
        setEmail(''),
        setPassword(''),
        setFormErrors({ firstName: false, lastName: false, email: false, password: false });

        }catch(e){
            console.log(e);   
        }
    }

    return (
      <>
    
      <div>
        <form onSubmit={signup}>
        {formErrors.email || formErrors.password ? (
        <div className="alert alert-danger" role="alert">
          Please fill in all required fields.
        </div>
        ) : null}
        <div className='container'>
            <div className="row">
                <div className="card col-md-6 offset-md-3"><br />
                    <h2 className="text-center">Sign Up</h2>
                    <div className="card-body content">
          
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input type="text"  onChange={handleFirstNameChange} value={firstName} id='firstName' name='firstName'
                   className={`form-control input-item ${formErrors.firstName ? 'is-invalid' : ''}`} autoComplete="given-name" required/>
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input type="text"  onChange={handleLastNameChange} value={lastName} id='lastName' name='lastName'
                  className={`form-control input-item ${formErrors.lastName ? 'is-invalid' : ''}`} autoComplete="given-name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" onChange={handleEmailChange} value= {email} name="email" id="email" 
                   className={`form-control input-item ${formErrors.email ? 'is-invalid' : ''}`} autoComplete='usernamme' required/>
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" onChange={handlePasswordChange} value={password} name='password' id="password" 
                    className={`form-control input-item ${formErrors.password ? 'is-invalid' : ''}`} autoComplete="current-password" required/>
                  <div className="col-auto">
                  <span id="passwordHelpInline" className="form-text">
                      Must be 8-20 characters long.
                  </span>
                  </div>
                </div>

            </div>
          <br />
              
            <div className="d-grid gap-2 mx-auto">
              <button className="btn btn-primary" type="submit">Sign Up</button>
              <span className='text-center'>OR</span>
              <Link className="btn btn-outline-dark" type="button" to={'/login'} style={{marginBottom: 30}}>Already have an Account</Link>
            </div>
         </div>   
      </div>
      </div>
      </form>
      </div>
     
      </>
    )
  }
  
  export default Signup
  