import { FaEye, FaTrashAlt, FaEdit } from "react-icons/fa";
import AxiosInstance from "../../config/axiosInstance";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Employee {
  id: number;
  name: string;
  address: string;
  email: string;
  contactNumber: string;
}

const EmployeeList: React.FC = () => {
  const myStyle = {
    color: "rgb(39, 60, 117)",
    marginTop: 15,
  };

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchText, setSearchText] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 4;

  useEffect(() => {
    getAllEmployees();
  }, [searchText]);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPages = Math.ceil(employees.length / employeesPerPage);

  const getAllEmployees = async () => {
    const response = await AxiosInstance.get("/employees/get-all-employees", {
      params: {
        searchText: searchText,
        page: 0,
        size: 10,
      },
    });

    setEmployees(response.data.data.dataList);
  };

  const searchEmployee = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    getAllEmployees();
  };

  const deleteEmployee = async (id: number) => {
    await AxiosInstance.delete("/employees/delete/" + id);
    getAllEmployees();
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center" style={myStyle}>
          {" "}
          Employee List
        </h1>

        <Link
          to="/addEmployee"
          className="btn btn-success"
          style={{ marginBottom: 5 }}
        >
          + New Employee
        </Link>

        <form className="d-flex" role="search" onSubmit={searchEmployee}>
          <input
            className="form-control me-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <br />

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
            {currentEmployees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.address}</td>
                <td>{employee.email}</td>
                <td>{employee.contactNumber}</td>

                <td className="mx-2">
                  <Link
                    className="btn btn-info"
                    to={`/employeeProfile/${employee.id}`}
                  >
                    <FaEye />
                  </Link>
                </td>

                <td className="mx-2">
                  <Link
                    to={`/editEmployee/${employee.id}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>

                <td className="mx-2">
                  <button
                    onClick={() => {
                      if (confirm("are you sure?")) {
                        deleteEmployee(employee.id);
                      }
                    }}
                    className="btn btn-danger"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: "20px" }}>
          <button
            className=" btn btn-light"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              className={`btn ${
                currentPage === index + 1
                  ? "btn-primary"
                  : "btn-outline-primary"
              } btn-sm`}
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                margin: "0 5px",
                fontWeight: currentPage === index + 1 ? "bold" : "normal",
              }}
            >
              {index + 1}
            </button>
          ))}

          <button
            className=" btn btn-light"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
