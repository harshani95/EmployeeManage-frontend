
import {FaEye, FaTrashAlt, FaEdit} from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Employee{
    id: number,
    fullName: string,
    address: string,
    email: string,
    contactNumber: string
}

const EmployeeList:React.FC = () => {

    const [employees, setEmployees] = useState<Employee[]>([]);


    const loadEmployees = async () => {
        const response = await axios.get("http://localhost:8080/api/v1/employees/get-all-employees");
        setEmployees(response.data.data);
    };



    // const loadEmployees = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:8080/api/v1/employees/get-all-employees");
    //         console.log('API Response:', response.data);
    
    //         // Check if response.data.data is an array
    //         if (Array.isArray(response.data.data)) {
    //             setEmployees(response.data.data);
    //         } else {
    //             console.error('Invalid response format - data is not an array:', response.data);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching employees:', error);
    //     }
    // };
    
    

    const deleteEmployee = async (id:number) => {
        await axios.delete('http://localhost:8080/api/v1/employees/delete/'+id);
        loadEmployees();
    }

    useEffect(()=> {
        loadEmployees();
    }, []);

    
    return (
        <>
     <div className='container'>
      <h2 className='text-center'> Employee List</h2> <br />

      <Link to='/addEmployee' className="btn btn-primary" >+ New Employee</Link><br /><br />

        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form><br />

        <table className="table table-hover table-bordered shadow">
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
            {employees.map((employee,index) => (
                <tr key={index}>
                    <td>{employee.id}</td>
                    <td>{employee.fullName}</td>
                    <td>{employee.address}</td>
                    <td>{employee.email}</td>
                    <td>{employee.contactNumber}</td>

                    <td className="mx-2"><button className="btn btn-info"><FaEye/></button></td>

                    <td className="mx-2"><Link to={`/editEmployee/${employee.id}`} className="btn btn-warning"><FaEdit/></Link></td>

                    <td className="mx-2"><button onClick={()=>{if (confirm('are you sure?')){deleteEmployee(employee.id) }}}
                    className="btn btn-danger"><FaTrashAlt/></button></td>
                
                </tr>
            ))}
           
        </tbody>
        </table>
 
     </div>

     </>
   )
 }
 
 export default EmployeeList
 