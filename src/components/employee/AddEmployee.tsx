
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosInstance from '../../config/axiosInstance';

interface AddEmployee{
    id: number,
    name: string,
    address: string,
    email: string,
    contactNumber: string
}

  
const AddEmployee:React.FC = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const saveEmployee = async ()=> {

        if (!name || !address || !email || !contactNumber) {
            setErrorMessage("All fields required.");
            return;
        }

        try{
            const response = await AxiosInstance.post("/employees/save",{
                name,address,email,contactNumber   
        });
        
        console.log(response);
        
        setName('');
        setAddress('');
        setEmail(''),
        setContactNumber(''),
        setErrorMessage("Employee saved successfully!");

        }catch(e){
            console.log(e);   
            setErrorMessage("Error saving employee. Please try again.");
        
        }
        
        setTimeout(() => {
            setErrorMessage(null); 
            navigate("/employeeList");
          }, 2000);
        
    }

  return (
    <div>
        <div className='container'>
            <div className="row">
                <div className="card col-md-6 offset-md-3"><br />
                    <h3 className="text-center">Add Employee</h3>
                    <div className="card-body">
                    <form>
                        <div className='form-group'>
                            <label htmlFor="employeeName">Full Name : </label>
                            <input onChange={(e) => {setName(e.target.value) }} value={name} type="text" placeholder="Full Name" id="employeeName" className="form-control" required
                            />
                        </div><br />
                        <div className='form-group'>
                            <label htmlFor="employeeAddress">Address : </label>
                            <input onChange={(e) => {setAddress(e.target.value) }} value={address} placeholder="Address" id="employeeAddress" className="form-control" required
                             />
                        </div><br />
                        <div className='form-group'>
                            <label htmlFor="employeeEmail">Email : </label>
                            <input onChange={(e) => {setEmail(e.target.value) }} value={email} placeholder="Email" id="employeeEmail" className="form-control" required
                            />
                        </div><br />
                        <div className='form-group'>
                            <label htmlFor="employeeContactNumber">Contact Number : </label>
                            <input onChange={(e) => {setContactNumber(e.target.value) }} value={contactNumber} placeholder="Contact Number" id="employeeContactNumber" className="form-control" required
                             />
                        </div><br />
                        {errorMessage && <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>}

                        <button onClick={()=>saveEmployee()} className="btn btn-success" type="button">Save</button>
                        <Link className="btn btn-danger" to={'/employeeList'} style={{marginLeft: "20px"}}>Cancel</Link>
                       
                    </form>

                    </div>
                </div>
            </div>
             

        </div>
    </div>
    
  )
}

export default AddEmployee