import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonalInfo from "./PersonalInfo";
import EducationDetails from "./EducationDetails";
import OtherDetails from "./OtherDetails";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    address: "",
    collegeName: "",
    degree: "",
    stream: "",
    yearOfPassing: "",
    percentage: 0,
    jobProfile: "",
    organization: "",
    location: "",
    startDate: "",
    endDate: "",
    currentlyWorkingHere: "",
    jobDescription: "",
  });

  const FormTitles = [
    "Personal Information",
    "Educational Details",
    "Job Details",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <EducationDetails formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherDetails formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          className="container border rounded p-3 m-3 shadow bg-body-tertiary rounded "
          style={{ width: "35rem" }}
        >
          <div className="text-center p-1">
            <h3>{FormTitles[page]}</h3>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              className="btn btn-primary me-1 float-start ps-4 pe-4"
            >
              PREV
            </button>
            <button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("Profile Updated");
                  console.log(formData);

                  navigate("/jobs");
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
              className="btn btn-primary float-end ps-4 pe-4"
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
