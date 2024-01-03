
import { Link } from "react-router-dom";

const AddEmployee = () => {

  return (
    <div><br />
        <div className='container'>
            <div className="row">
                <div className="card col-md-6 offset-md-3"><br />
                    <h3 className="text-center">Add Employee</h3>
                    <div className="card-body">
                    <form>
                        <div className='form-group'>
                            <label htmlFor="fullName">Full Name : </label>
                            <input placeholder="Full Name" name="fullName" className="form-control" 
                            />
                        </div><br />
                        <div className='form-group'>
                            <label htmlFor="address">Address : </label>
                            <input placeholder="Address" name="address" className="form-control" 
                             />
                        </div><br />
                        <div className='form-group'>
                            <label htmlFor="email">Email : </label>
                            <input placeholder="Email" name="email" className="form-control" 
                            />
                        </div><br />
                        <div className='form-group'>
                            <label htmlFor="contactNumber">Contact Number : </label>
                            <input placeholder="Contact Number" name="contactNumber" className="form-control" 
                             />
                        </div><br />

                        <button className="btn btn-success" type="submit">Save</button>
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