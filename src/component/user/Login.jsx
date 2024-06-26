import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card px-5 py-5">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label>Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label>Password</label>
            </div>
            <div className="mt-3">
              {" "}
              <button className="btn btn-dark w-100">Login</button>{" "}
            </div>
            <br />
            <p>Don't have an account? </p>{" "}
            <div className="mt-1">
              {" "}
              <Link to="/register" className="btn btn-dark w-100">
                Register here
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
