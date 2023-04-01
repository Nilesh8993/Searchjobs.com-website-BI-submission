import React, { useState } from "react";
import "./style.css";

const JobCard = ({ id, title, company, location, salary }) => {
  const [apply, setApply] = useState("Apply Now");

  const handleApply = () => {
    setApply("Applied");
  };

  return (
    <>
      {/* static data to render  */}

      {/* <div className="jobcard">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Full Stack Developer</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Farsoft Infotech Private Limited
            </h6>
            <p className="card-text">
              <i className="fa-solid fa-location-dot me-1"></i>
              Mumbai
            </p>
            <p className="card-text">
              <i className="fa-solid fa-money-check me-1"></i> 5 - 8 LPA
            </p>
            <button className="btn btn-primary">View Details</button>
            <button className="mx-3 btn btn-primary ">Apply Now</button>
          </div>
        </div>
      </div> */}

      <div className="jobcard" key={id}>
        <div className="card" style={{ width: "21rem" }}>
          <div className="card-body" key={id}>
            <div className="company ">
              <img
                className="img-thumbnail rounded float-start p-1"
                src="data:image/png;base64,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"
              ></img>
              <h5 className="card-title">{title}</h5>
            </div>
            <h6 className="card-subtitle mb-3 text-body-secondary">
              <i className="fa-sharp fa-solid fa-industry me-1"></i>
              {company}
            </h6>
            <p className="card-text">
              <i className="fa-solid fa-location-dot me-1 text-body-secondary"></i>
              {location}
            </p>
            <p className="card-text">
              <i className="fa-solid fa-money-check me-1 text-body-secondary"></i>
              {salary[0] + Math.ceil(salary.slice(1))}
            </p>
            <button className="btn btn-outline-primary btn-sm">
              View Details
            </button>
            <button
              className="mx-3 btn btn-primary btn-sm apply "
              onClick={handleApply}
            >
              {apply}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
