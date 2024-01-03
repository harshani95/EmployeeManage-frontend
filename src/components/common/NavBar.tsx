import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="navbar-brand">
              <img src="https://static.vecteezy.com/system/resources/previews/009/170/419/non_2x/a-unique-design-icon-of-employee-management-vector.jpg"
                 alt="" className='logo'/>
            </div>
            <a className="navbar-brand" href="#">Employee Management System</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"> <Link className="nav-link active" aria-current="page" to='/'>Home</Link></li>
                <li className="nav-item"><Link className="nav-link"  to='/employeeList'>View All Employees</Link></li>
                <li className="nav-item"><Link className="nav-link"  to='/addEmployee'>Add New Employee</Link></li>
              </ul>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
               <Link to= "/login"><button className="btn btn-primary me-md-2 button" type="button">Login</button></Link>
               <Link to= "/signup"><button className="btn btn-success button" type="button">Sign Up</button></Link>
            </div>
          </div>
        </nav>
    </>
  )
}

export default NavBar