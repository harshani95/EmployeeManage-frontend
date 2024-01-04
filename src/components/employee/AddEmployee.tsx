
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface AddEmployee{
    id: number,
    fullName: string,
    address: string,
    email: string,
    contactNumber: string
}

const AddEmployee:React.FC = () => {

    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");


    const saveEmployee = async ()=> {
        try{
            const  response = await axios.post("http://localhost:8080/api/v1/employees/save",{
                fullName,address,email,contactNumber
            
        });
        console.log(response);
        setFullName('');
        setAddress('');
        setEmail(''),
        setContactNumber('')

        }catch(e){
            console.log(e);   
        }
    }

  return (
    <div><br />
        <div className='container'>
            <div className="row">
                <div className="card col-md-6 offset-md-3"><br />
                    <h3 className="text-center">Add Employee</h3>
                    <div className="card-body">
                    <form>
                        <div className='form-group'>
                            <label htmlFor="employeeName">Full Name : </label>
                            <input onChange={(e) => {setFullName(e.target.value) }} value={fullName} type="text" placeholder="Full Name" id="employeeName" className="form-control" 
                            />
                        </div><br />
                        <div className='form-group'>
                            <label htmlFor="employeeAddress">Address : </label>
                            <input onChange={(e) => {setAddress(e.target.value) }} value={address} placeholder="Address" id="employeeAddress" className="form-control" 
                             />
                        </div><br />
                        <div className='form-group'>
                            <label htmlFor="employeeEmail">Email : </label>
                            <input onChange={(e) => {setEmail(e.target.value) }} value={email} placeholder="Email" id="employeeEmail" className="form-control" 
                            />
                        </div><br />
                        <div className='form-group'>
                            <label htmlFor="employeeContactNumber">Contact Number : </label>
                            <input onChange={(e) => {setContactNumber(e.target.value) }} value={contactNumber} placeholder="Contact Number" id="employeeContactNumber" className="form-control" 
                             />
                        </div><br />

                        <button onClick={saveEmployee} className="btn btn-success" type="submit">Save</button>
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