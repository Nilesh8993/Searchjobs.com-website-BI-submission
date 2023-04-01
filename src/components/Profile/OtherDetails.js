import React from "react";

const OtherDetails = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="d-flex flex-column p-2">
        <div className="mb-2">
          <label class="form-label">Profile</label>
          <input
            className="form-control"
            type="text"
            placeholder="Profile"
            value={formData.profile}
            onChange={(e) =>
              setFormData({ ...formData, profile: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label class="form-label">Organization</label>
          <input
            className="form-control"
            type="text"
            placeholder="Organization"
            value={formData.organization}
            onChange={(e) =>
              setFormData({ ...formData, organization: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label class="form-label">Location</label>
          <input
            className="form-control "
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
        </div>
        <div className="d-flex">
          <div>
            <label
              class="form-check-label mb-3 me-2"
              htmlFor="flexCheckChecked"
            >
              Start Date
            </label>
            <input
              className="form control me-3"
              type="Date"
              placeholder="Start Date"
              value={formData.startDate}
              onChange={(e) =>
                setFormData({ ...formData, startDate: e.target.value })
              }
            />
          </div>
          <div>
            <label
              class="form-check-label mb-3 me-2 "
              htmlFor="flexCheckChecked"
            >
              End Date
            </label>
            <input
              className="form-label"
              type="Date"
              placeholder="End Date"
              value={formData.endDate}
              onChange={(e) =>
                setFormData({ ...formData, endDate: e.target.value })
              }
            />
          </div>
        </div>

        <div class="form-check float-end mb-2">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked={formData.currentlyWorkingHere}
            onChange={(e) =>
              setFormData({
                ...formData,
                currentlyWorkingHere: e.target.checked,
              })
            }
          />
          <label class="form-check-label" htmlFor="flexCheckChecked">
            Currently working here
          </label>
        </div>

        <div className="mb-2">
          <label class="form-label">Job Description</label>
          <textarea
            class="form-control"
            placeholder="Roles/ Responsibilities"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            value={formData.jobDescription}
            onChange={(e) =>
              setFormData({ ...formData, jobDescription: e.target.value })
            }
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
