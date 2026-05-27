import axios from "axios";

import { useEffect, useState } from "react";

export default function Dashboard() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios.get(
      "http://localhost:5000/api/admin/users",

      {
        headers: {
          Authorization:
            "Bearer " +
            localStorage.getItem(
              "adminToken"
            )
        }
      }
    )

    .then((res) => {
      setUsers(res.data);
    });

  }, []);

  const styles = {
  border: "1px solid black",
  padding: "12px",
  textAlign: "center"
  };

 return (

  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>

    <h1 style={{textDecoration: "underline"}}>Admin Dashboard</h1>

    <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>

      <thead>
        <tr>
          <th style={styles}>FirstName</th>
          <th style={styles}>MiddleName</th>
          <th style={styles}>LastName</th>
          <th style={styles}>Email</th>
          <th style={styles}>Phone</th>
          <th style={styles}>Address</th>
          <th style={styles}>Age</th>
          <th style={styles}>DOB</th>
          <th style={styles}>Gender</th>
          <th style={styles}>Role</th>
        </tr>
      </thead>

      <tbody>

        {
          users.map((user) => (

            <tr key={user._id}>

              <td style={styles}>{user.Fname}</td>

              <td style={styles}>{user.midName}</td>

              <td style={styles}>{user.Lname}</td>

              <td style={styles}  >{user.email}</td>

              <td style={styles}>{user.phone}</td>

              <td style={styles}>{user.address}</td>

              <td style={styles}>{user.age}</td>

              <td style={styles}>{user.dob}</td>

              <td style={styles}>{user.gender}</td>
              
              <td style={styles}>{user.role}</td>
              

            </tr>

          ))
        }

      </tbody>

    </table>

  </div>
);
}
