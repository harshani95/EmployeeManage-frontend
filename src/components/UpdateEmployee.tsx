import React, { useEffect, useState } from "react";
import AxiosInstance from "../config/axiosInstance";
import { Link, useNavigate, useParams } from "react-router-dom";

interface UpdateEmployee {
  id: number;
  name: string;
  address: string;
  email: string;
  contactNumber: string;
}

const UpdateEmployee: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [updateName, setUpdateName] = useState("");
  const [updateAddress, setUpdateAddress] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updateContactNumber, setUpdateContactNumber] = useState("");

  const updateEmployee = async () => {
    try {
      await AxiosInstance.put(`/admin/update/${id}`, {
        name: updateName,
        address: updateAddress,
        email: updateEmail,
        contactNumber: updateContactNumber,
      });
      navigate("/employeeList");
    } catch (e) {
      console.log(e);
    }
  };

  const loadEmployee = async () => {
    try {
      const response = await AxiosInstance.get(`/admin-user/get-by-id/${id}`);
      const employeeData: UpdateEmployee = response.data.data; // Adjusted the type based on the provided interface
      console.log(response.data.data);

      setUpdateName(employeeData.name);
      setUpdateAddress(employeeData.address);
      setUpdateEmail(employeeData.email);
      setUpdateContactNumber(employeeData.contactNumber);
    } catch (error) {
      console.error("Error fetching employee:", error);
    }
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3">
              <br />
              <h3 className="text-center">Update Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name : </label>
                    <input
                      type="text"
                      defaultValue={updateName}
                      onChange={(e) => setUpdateName(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="address">Address : </label>
                    <input
                      onChange={(e) => setUpdateAddress(e.target.value)}
                      type="text"
                      defaultValue={updateAddress}
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="email">Email : </label>
                    <input
                      onChange={(e) => setUpdateEmail(e.target.value)}
                      type="text"
                      defaultValue={updateEmail}
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number : </label>
                    <input
                      onChange={(e) => setUpdateContactNumber(e.target.value)}
                      type="text"
                      defaultValue={updateContactNumber}
                      className="form-control"
                    />
                  </div>
                  <br />

                  <button
                    type="button"
                    className="btn-success btn"
                    onClick={updateEmployee}
                  >
                    Update
                  </button>
                  <Link
                    className="btn btn-danger"
                    to={"/employeeList"}
                    type="button"
                    style={{ marginLeft: "20px" }}
                  >
                    Cancel
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateEmployee;
