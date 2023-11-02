import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginService from "../service/loginService";
import ILogin from "../model/ILogin";

const Login: React.FC = () => {
  const [email, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
    let data: ILogin = { email, password };
    loginService
      .login(data)
      .then((response) => console.log(response))
      .catch((error) => alert(error.response.data.message));
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5 card col-lg-5">
        <h3 className="card-header">Login</h3>
        <form onSubmit={(e) => loginHandler(e)} className=" p-3 card-body">
          <div className="form-group mt-3 ">
            <label htmlFor="username">Username</label>
            <input
              type="email"
              value={email}
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-end">
            <Link to={"/forgot-password"} className="nav-link">
              <u>Forgot Password ?</u>
            </Link>
          </div>
          <div className="mt-3 card-footer">
            <button type="submit" className="btn btn-success">
              Login
            </button>
            <div className="form-group mt-3">
              Don't have an account?{" "}
              <Link to={"/register"} className="text-decoration-none">
                Register here
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
