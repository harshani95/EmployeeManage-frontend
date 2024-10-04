import AxiosInstance from '../config/axiosInstance';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/authSlice';

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async()=> {
        try{
            const response = await AxiosInstance.post("/users/login",{
                email, password  
        });

        const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate()+2);

            const cookieValue=encodeURIComponent('token')+'='
                +encodeURIComponent(response.data)+'; expires='+expirationDate.toUTCString()+'; path=/';

            document.cookie=cookieValue;
            console.log(response.data);

    
        if (response.status === 200) {
        const token = response.data.data;
        localStorage.setItem('token', token);
        
        dispatch(loginSuccess(token));
        console.log('successfully logged');
        navigate('/');
        }

        setEmail(''),
        setPassword(''),
        setErrorMessage('');
        
        }catch(error){
            console.log(error);   
            setErrorMessage('Incorrect email or password. Please try again.');
        }
        
    };
    
    return (
      <>
      <div>
        <form>
        
      <div className='container'>
     <div className="row">
        <div className="card col-md-6 offset-md-3"><br />
            <h3 className="text-center">Login</h3>
        <div className="card-body">
            
              <div className="form-group">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email"   onChange={(e)=>{setEmail(e.target.value)}} className='form-control input-item'
                  id="email"  name="email" autoComplete="username" required/>
              </div>

              <div className="form-group">
                  <label htmlFor="inputPassword" className="form-label">Password</label>
                  <input type="password" id='password'  onChange={(e)=>{setPassword(e.target.value)}}
                    className='form-control input-item' name="password" autoComplete="current-password" required/>
              </div>
          </div>
        
          {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
            )}

   
          <div className="d-grid gap-2 col-8 mx-auto">
              <button className="btn btn-primary" onClick={login} type="button">Login</button>
              <span className='text-center'>OR</span>
              <Link className="btn btn-outline-dark" type="button" to={'/signup'} style={{marginBottom: 30}}>Create New Account</Link>
              
          
          </div>
            
      </div>
      </div>
      </div>
    

      </form>
      </div>
      
      </>
      
    )
  }
  
export default Login
  
