import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AxiosInstance from "../../config/axiosInstance";
import profileImage from "../../assets/profile.png";

interface EmployeeProfile {
  id: number;
  name: string;
  address: string;
  email: string;
  contactNumber: string;
}

const EmployeeProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const loadEmployee = async () => {
    try {
      const response = await AxiosInstance.get(`/employees/get-by-id/${id}`);
      const employeeData: EmployeeProfile = response.data.data; // Adjusted the type based on the provided interface
      console.log(response.data.data);

      setName(employeeData.name);
      setAddress(employeeData.address);
      setEmail(employeeData.email);
      setContactNumber(employeeData.contactNumber);
    } catch (error) {
      console.error("Error fetching employee:", error);
    }
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  return (
    <>
      <br />
      <section
        className="shadow container"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-3">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src={profileImage}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  />{" "}
                  <br />
                  <div className="d-flex justify-content-center mb-2">
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        disabled
                        data-bs-toggle="button"
                      >
                        {name}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9 mt-3">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">
                      Full Name
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={name}
                      onChange={(e) => setName(e.target.value)}
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>{" "}
                  <br />
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">
                      Address
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={address}
                      onChange={(e) => setAddress(e.target.value)}
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                  <br />
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">
                      Email
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                  <br />
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">
                      Contact Number
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Link
                className="btn btn-dark me-md-4"
                type="button"
                to={"/employeeList"}
              >
                Close
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeProfile;
