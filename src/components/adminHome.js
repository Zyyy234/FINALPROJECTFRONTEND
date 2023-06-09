import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminHome({ userData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = () => {
    fetch("http://localhost:3000/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  };

  const updateUser = (_id) => {
    window.localStorage.clear();
    window.location.href = `/updateUser/${_id}`;
  };

  const deleteUser = (id, ID) => {
    if (window.confirm(`Are you sure you want to delete ${ID}`)) {
      fetch("http://localhost:3000/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    }
  };

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="auth-inner" style={{ width: "auto" }}>
        <h3>Welcome Admin</h3>
        <h3>User Data</h3>
        <div className="d-flex justify-content-end">
          <Link to="/sign-up" className="btn btn-info">
            Add User +
          </Link>
        </div>
        <table style={{ width: 600 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Position</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Contact No.</th>
              <th>Email</th>
              <th>User Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i) => (
              <tr key={i._id}>
                <td>{i.ID}</td>
                <td>{i.fname}</td>
                <td>{i.lname}</td>
                <td>{i.position}</td>
                <td>{i.gender}</td>
                <td>{i.address}</td>
                <td>{i.contactNumber}</td>
                <td>{i.email}</td>
                <td>{i.userType}</td>
                <td>
                  <button
                    onClick={() => updateUser(i._id)}
                    className="btn btn-success btn-sm"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteUser(i._id, i.ID)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={logOut} className="btn btn-primary">
          Log Out
        </button>
      </div>
    </div>
  );
}




