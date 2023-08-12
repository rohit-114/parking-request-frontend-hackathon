import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { addDays } from "date-fns";
import "./EmployeePortal.css";

const EmployeePortal = () => {
  const [formData, setFormData] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [data, setData] = useState([]);

  const clearInputs = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      id: "",
      vehicleType: "",
      vehicleNumber: "",
      startDate: "",
      endDate: "",
    });
  };

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
    const employeeData = {
      name: formData.name,
      id: formData.id,
      vehicleType: formData.vehicleType,
      vehicleNumber: formData.vehicleNumber,
      startDate: startDate,
      endDate: endDate,
    };
    console.log(employeeData);
    axios
      .post("https://employeeapi-ewtb.onrender.com/form", employeeData)
      .then((response) => {
        console.log(response.status, response.data);
      });
    alert("Request successful!");
  };

  useEffect(() => {
    axios
      .get("https://approve-reject-api.onrender.com/status")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex flex-col background w-full">
      <div className="flex justify-center ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-1/3 p-5 rounded border shadow-md bg-white m-5"
        >
          <label className="label">
            Employee Name:
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className="label">
            Employee email:
            <input
              name="id"
              className="input"
              type="email"
              placeholder="Enter Your Kohler email-id"
              value={formData.id}
              onChange={handleChange}
            />
          </label>
          <label className="label">
            Vehicle Type:
            <select
              name="vehicleType"
              type="text"
              className="input w-48"
              value={formData.vehicleType}
              onChange={handleChange}
            >
              <option value="None">None</option>
              <option value="Two Wheeler">Two Wheeler</option>
              <option value="Four Wheeler">Four Wheeler</option>
            </select>
          </label>
          <label className="label">
            Vehicle Number:
            <input
              name="vehicleNumber"
              className="input"
              type="text"
              placeholder="MH 00 CA 1234"
              value={formData.vehicleNumber}
              onChange={handleChange}
            />
          </label>
          <label className="label">
            Parking from Date:
            <DatePicker
              className="input w-48"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              maxDate={addDays(new Date(), 365)}
              showIcon
              placeholderText="Select a date between today and 1 year"
            />
          </label>
          <label className="label">
            Parking to Date:
            <DatePicker
              className="input w-48"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              minDate={startDate}
              maxDate={addDays(new Date(), 365)}
              showIcon
              placeholderText="Select a date between today and 1 year"
            />
          </label>
          <div className="flex justify-end">
            <button className="border-2 rounded bg-green-500 border-green-500 text-white p-1 mx-6 my-3">
              Submit
            </button>

            <button
              onClick={clearInputs}
              className="border-2 rounded bg-red-500 border-red-500 text-white p-1 mx-2 my-3"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
      <div>
        <h1>Parking Requests</h1>
        <Table>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Parking Requests</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => {
              console.log(entry);
              return (
                <tr key={entry._id}>
                  <td>{index + 1}</td>
                  <td>{entry.reason}</td>
                  <td>{entry.status}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default EmployeePortal;
