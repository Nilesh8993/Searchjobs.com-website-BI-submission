import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="d-flex flex-column p-3">
        <div className="mb-2">
          <label className="form-label">First Name</label>
          <input
            className=" form-control"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Last Name</label>
          <input
            className="form-control "
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Email</label>
          <input
            className="form-control "
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Mobile Number</label>
          <input
            className="form-control"
            type="text"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={(e) =>
              setFormData({ ...formData, mobileNumber: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Address</label>
          <textarea
            className="form-control"
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
