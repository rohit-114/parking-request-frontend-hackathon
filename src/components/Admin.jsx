import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminForm from "./AdminForm";

const Admin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API and update the state
    axios
      .get("https://user-details-api.onrender.com/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Parking Requests</h1>
      <Table>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Parking Requests</th>
            <th>Employee emailid</th>
            <th>Vehicle Type</th>
            <th>Vehicle Number</th>
            <th>Parking From Date</th>
            <th>Parking To Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={entry._id}>
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.id}</td>
              <td>{entry.vehicleType}</td>
              <td>{entry.vehicleNumber}</td>
              <td>{new Date(entry.startDate).toLocaleDateString()}</td>
              <td>{new Date(entry.endDate).toLocaleDateString()}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AdminForm />
    </div>
  );
};

export default Admin;
