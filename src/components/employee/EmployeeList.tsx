
import {FaEye, FaTrashAlt, FaEdit} from 'react-icons/fa'

const EmployeeList =() => {
    
    return (
     <div className='container'><br />
      <h2 className='text-center'> Employee List</h2> <br />
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form><br />
        <table className="table table-hover table-bordered">
          <thead>
           <tr className="text-center">
            <th>ID</th>
            <th>Full Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th colSpan={3}>Actions</th>
           </tr>
          </thead>
 
          <tbody className="text-center">
            <tr>
                <td>1</td>
                <td>Saman Silva</td>
                <td>Colombo</td>
                <td>saman@gmail.comm</td>
                <td>0112225555</td>

                <td className="mx-2"><button className="btn btn-info"><FaEye/></button></td>
                <td className="mx-2"><button className="btn btn-warning"><FaEdit/></button></td>
                <td className="mx-2"><button  className="btn btn-danger"><FaTrashAlt/></button></td>
                
            </tr>
        
           
          </tbody>
        </table>
 
     </div>
   )
 }
 
 export default EmployeeList
 