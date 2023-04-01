import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const LoginForm = (props) => {
  const navigate = useNavigate();

  const [msg, setMsg] = useState("");

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    if (user.username !== "" && user.password !== "") {
      alert(`${user.username} logged in successfully`);
      props.setUserTag(user.username);
      navigate("/jobs");
    } else {
      setMsg("Please enter valid username and password");
    }
  };

  return (
    <div className="d-flex justify-content-center  ">
      <div
        className=" container border rounded p-3 m-5 shadow p-3 mb-5 bg-body-tertiary rounded"
        style={{ width: "24rem" }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <hr />
        <form className="needs-validation">
          <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="username"
              autoComplete="off"
              required
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="password"
              autoComplete="off"
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <p className="text-danger">{msg}</p>

          <div className="d-grid gap-2">
            <button
              onClick={handleLogin}
              className="btn btn-primary mt-4"
              type="button"
            >
              Login
            </button>
          </div>
          <p className="mt-5" style={{ textAlign: "center" }}>
            Not a user? <Link to="/register">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
