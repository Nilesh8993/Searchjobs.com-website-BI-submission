import React from "react";

const EducationDetails = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="d-flex flex-column p-3">
        <div className="mb-2">
          <label className="form-label">College Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="College Name"
            value={formData.collegeName}
            onChange={(e) =>
              setFormData({ ...formData, collegeName: e.target.value })
            }
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Degree</label>
          <input
            className="form-control"
            type="text"
            placeholder="Degree"
            value={formData.degree}
            onChange={(e) =>
              setFormData({ ...formData, degree: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Stream</label>
          <input
            className="form-control"
            type="text"
            placeholder="Stream"
            value={formData.stream}
            onChange={(e) =>
              setFormData({ ...formData, stream: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Year of passing</label>
          <input
            className="form-control "
            type="text"
            placeholder="Year of passing"
            value={formData.yearOfPassing}
            onChange={(e) =>
              setFormData({ ...formData, yearOfPassing: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Percentage</label>
          <input
            className="form-control "
            min="0"
            max="100"
            type="number"
            placeholder="Percentage/ CGPA"
            value={formData.percentage}
            onChange={(e) =>
              setFormData({ ...formData, percentage: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EducationDetails;
