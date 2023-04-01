import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();

  const [msg, setMsg] = useState("");

  const [contactForm, setContactForm] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    if (
      contactForm.username !== "" &&
      contactForm.email !== "" &&
      contactForm.message !== ""
    ) {
      navigate("/jobs");
      alert("Form Submitted successfully");
    } else {
      setMsg("Please enter all details");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-start ">
        <div
          className="container border rounded  p-3 m-5 shadow p-3 mb-5 bg-body-tertiary rounded "
          style={{ width: "30rem" }}
        >
          <h2 className="text-center">Contact Us</h2>
          <hr />
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) =>
                  setContactForm({ ...contactForm, username: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) =>
                  setContactForm({ ...contactForm, email: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e) =>
                  setContactForm({ ...contactForm, message: e.target.value })
                }
              ></textarea>
            </div>
            <p className="text-danger">{msg}</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
