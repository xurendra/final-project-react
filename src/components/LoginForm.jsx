import React from "react";
import "../LoginForm.css";

const onSubmit = () => {};

const LoginForm = () => {
  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="login rounded">
        <h2 className="mb-3">Login Form</h2>

        <form className="needs-validation">
          <div className="form-group was-validated mb-2">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" required></input>
            <div className="invalid-feedback">Please enter your email</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" required></input>
            <div className="invalid-feedback">Please enter your password</div>
          </div>
          <div className="form-group form-check mb-2">
            <input type="checkbox" className="form-check-input"></input>
            <label htmlFor="check" className="form-check-label">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-success w-100 mt-2">
            SIGN IN
          </button>
          <button className="btn btn-link mt-2">Register</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
