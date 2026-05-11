import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users/profile", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then(res => setUser(res.data));
  }, []);

  return user ? <h2>Welcome {user.name}</h2> : "Loading...";
}

