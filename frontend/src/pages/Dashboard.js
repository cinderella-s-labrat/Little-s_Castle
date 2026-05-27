import React, { useEffect, useState } from "react"; 
// useState → store profile data
// useEffect → fetch data when component loads

import axios from "axios"; 
// For making API requests

import {useNavigate} from "react-router-dom";


// Dashboard component
export default function Dashboard() {

  const navigate = useNavigate();
  const [profile, setProfile] = useState(null); 
  // State to store user profile (initially null)

  const fullName = localStorage.getItem("fullName");
  useEffect(() => {

    // Function to fetch user profile from backend
    const fetchProfile = async () => {

      const token = localStorage.getItem("token"); 
      // Get JWT token from localStorage

      // Send GET request with Authorization header
      const res = await axios.get(
        "http://localhost:5000/api/users/profile",
        {
          headers: {
            Authorization: `Bearer ${token}` // Attach token for authentication
          }
        }
      );

      setProfile(res.data); 
      // Save received user data into state

    };

    fetchProfile(); 
    // Call function when component mounts

  }, []); 
  // Empty dependency array → runs only once


  // Show loading message until profile is fetched
  if (!profile) {
    return <p>Loading...</p>;
  }


  return (

    <div className="dashboard" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px", padding: "20px" }}>
      <h1 text-decoration="underline">Dashboard</h1>
    <div/>
      <div className="card"
        style={{
          alignItems: "center",
          gap: "10px",
          padding: "20px",
          width: "500px"
        }}>
        <div className="rounded-circle"
          style={{
            width: "200px",
            height: "200px",
            overflow: "hidden",
            border: "2px solid #ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }} >
          <img
            src={`http://localhost:5000/${profile.profilePic}`}
            alt="user image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </div>
        <div className="" style={{ textAlign: "center", fontSize: "15px", display: "flex", flexDirection: "column" }}>
          <h5 style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "Lobster Two", fontStyle: "cursive" }}>
            Welcome, {profile.Fname} {profile.midName} {profile.Lname}
          </h5>
          <p>Email : {profile.email}</p>
          <p>Phone : {profile.phone}</p>
          <p>Gender : {profile.gender}</p>
          <p>DOB : {profile.DOB} &nbsp;| &nbsp;Age : {profile.age}</p>
          <p>Address : {profile.address}</p>
          <div className="d-flex gap-3 justify-content-center">
            <button className="btn btn-info" onClick={() => navigate("/edit-profile")}>
              Edit Profile
            </button>
            <button className="btn btn-danger" onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}>
              logout
            </button>
          </div>
        </div>  
      </div>      
    </div>

  );

}
