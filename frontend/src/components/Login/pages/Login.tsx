import React, { useState } from "react";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5 card col-lg-5">
        <h3 className="mb-3 card-header">Login</h3>
        <form onSubmit={(e) => loginHandler(e)} className=" p-3 card-body">
          <div className="form-group mt-3 ">
            <label htmlFor="username">Username</label>
            <input
              type="email"
              value={username}
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
          <div className="form-group mt-3 d-flex justify-content-end card-footer">
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
