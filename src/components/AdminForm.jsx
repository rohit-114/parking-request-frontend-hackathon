import React, { useState } from "react";
import axios from "axios";

const AdminForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const requestData = {
      id: formData.id,
      status: formData.status,
      reason: formData.reason,
    };
    console.log("request", requestData);
    axios
      .post("https://approve-reject-api.onrender.com/req", requestData)
      .then((response) => {
        console.log(response.status, response.data);
      });
    alert("Request successful!");
  };

  return (
    <div>
      <label className="label">
        Email-ID:
        <input
          name="id"
          className="input"
          type="text"
          placeholder="Enter Email"
          value={formData.id}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        Reason:
        <input
          name="reason"
          className="input"
          type="text"
          value={formData.reason}
          placeholder="Enter Reason"
          onChange={handleChange}
        />
      </label>
      <select
        name="status"
        type="text"
        className="input w-48"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="None">None</option>
        <option value="approve">Approve</option>
        <option value="reject">Reject</option>
      </select>
      <button
        onClick={handleSubmit}
        className="border-2 rounded bg-green-500 border-green-500 text-white p-1 mx-6 my-3"
      >
        Submit
      </button>
    </div>
  );
};
export default AdminForm;
