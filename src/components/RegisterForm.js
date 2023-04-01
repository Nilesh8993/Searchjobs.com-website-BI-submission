import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [msg, setMsg] = useState("");

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formSubmit = () => {
    if (
      userData.username !== "" &&
      userData.email !== "" &&
      userData.password !== "" &&
      userData.confirmPassword !== "" &&
      userData.password === userData.confirmPassword
    ) {
      alert(`${userData.username} signed up successfully`);
      // console.log(userData);
      navigate("/profile");
    } else {
      setMsg("Please enter all details");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center ">
        <div
          className=" container border rounded  p-3 m-5 shadow p-3 mb-5 bg-body-tertiary rounded "
          style={{ width: "24rem" }}
        >
          <h3 style={{ textAlign: "center" }}>Sign Up</h3>
          <hr />
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
                placeholder="Username"
                autoComplete="off"
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="email"
                autoComplete="off"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="password"
                autoComplete="off"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmpassword"
                className="form-control"
                id="exampleInputConfirmPassword"
                placeholder="ConfirmPassword"
                autoComplete="off"
                onChange={(e) =>
                  setUserData({ ...userData, confirmPassword: e.target.value })
                }
              />
            </div>

            <p className="text-danger">{msg}</p>

            <div className="d-grid gap-2">
              <button
                className="btn btn-primary mt-3"
                type="button"
                onClick={formSubmit}
              >
                Register
              </button>
            </div>
            <p className="mt-3" style={{ textAlign: "center" }}>
              Aleady a user? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
