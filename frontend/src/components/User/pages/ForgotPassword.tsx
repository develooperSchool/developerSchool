import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [username, setUsername] = useState<string>("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5 card col-lg-5">
        <h3 className="card-header">Forgot Password</h3>
        <form onSubmit={(e) => submitHandler(e)} className=" p-3 card-body">
          <div className="form-group mt-3 ">
            <label htmlFor="username">Enter registered Email Address</label>
            <input
              type="email"
              value={username}
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-5 card-footer">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <div className="form-group mt-3">
              Already have an account?{" "}
              <Link to={"/login"} className="text-decoration-none">
                Login now
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
