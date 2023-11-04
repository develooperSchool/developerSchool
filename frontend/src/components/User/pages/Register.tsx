import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../Style/form.css";

const Register = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [qualification, setQualification] = useState<string>("");
  const [passingYear, setPassingYear] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [caste, setCaste] = useState<string>("");
  const [subCaste, setSubCaste] = useState<string>("");

  const registerationHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      contact,
      gender,
      caste,
      subCaste,
    });
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5 form-border col-lg-5">
        <h3 className="">Registration</h3>
        <hr />
        <form onSubmit={(e) => registerationHandler(e)} className="p-3">
          <div className="form-group mt-3">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="contact">Contact</label>
            <input
              id="contact"
              type="text"
              className="form-control"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="qualification">Qualification</label>
            <input
              id="qualification"
              type="text"
              className="form-control"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="passingYear">Passing Year</label>
            <input
              id="passingYear"
              type="number"
              className="form-control"
              value={passingYear}
              onChange={(e) => setPassingYear(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="dob">Date of Birth</label>
            <input
              id="dob"
              type="date"
              className="form-control"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Gender</label>
            <select
              name="gender"
              id="gender"
              value={gender}
              className="form-control"
              onChange={(e) => setGender(e.target.value)}
            >
              <option>-- Select Gender --</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="caste">Caste</label>
            <input
              id="caste"
              type="text"
              className="form-control"
              value={caste}
              onChange={(e) => setCaste(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="sub-caste">Sub Caste</label>
            <input
              id="sub-caste"
              type="text"
              className="form-control"
              value={subCaste}
              onChange={(e) => setSubCaste(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <button type="submit" className="btn btn-success">
              Register
            </button>
            <div className="form-group mt-3">
              Already have an account?{" "}
              <Link to={"/login"} className="text-decoration-none">
                Login Here
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
