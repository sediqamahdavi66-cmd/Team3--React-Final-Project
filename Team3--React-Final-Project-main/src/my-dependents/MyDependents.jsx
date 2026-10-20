import { useState } from "react";
import "./MyDependents.css";

function MyDependents() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    month: "",
    day: "",
    year: "",
    relation: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.month ||
      !formData.day ||
      !formData.year ||
      !formData.relation ||
      !formData.gender
    ) {
      alert("Please complete all the information.");
      return;
    }

    alert("Dependent information saved successfully!");
  };

  return (
    <div className="dependent-page">
      <div className="breadcrumb">
        <span>⌂</span>
        <span>/</span>
        <span>Mydependents</span>
      </div>

      <h2 className="page-title">Mydependents</h2>

      <div className="profile-card">
        <h1>Build Your Profile</h1>

        <p className="family-text">
          This information will let us know more about your Family.
        </p>

        <div className="registration-step">
          <div className="step-dot"></div>
          <span>Dependents Registration</span>
        </div>

        <div className="basic-information">
          <h2>Let's start with the basic information</h2>

          <p>
            Let us know With name and last name, contacting you at
          </p>

          <form onSubmit={handleNext}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Eg. Michael"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Eg. Tomson"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Birth Date</label>

              <div className="birth-row">
                <select
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                >
                  <option value="">Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>

                <select
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                >
                  <option value="">Day</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1}>{i + 1}</option>
                  ))}
                </select>

                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                >
                  <option value="">Year</option>
                  {Array.from({ length: 80 }, (_, i) => (
                    <option key={2026 - i}>{2026 - i}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Relation</label>
                <select
                  name="relation"
                  value={formData.relation}
                  onChange={handleChange}
                >
                  <option value="">Eg. Brother, Child</option>
                  <option>Brother</option>
                  <option>Sister</option>
                  <option>Child</option>
                  <option>Father</option>
                  <option>Mother</option>
                  <option>Spouse</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>I'm</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="button-container">
              <button type="submit">NEXT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyDependents;