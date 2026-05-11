import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Activate() {
  const { token } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/auth/activate/${token}`)
      .then(()=>alert("Activated"))
      .catch(()=>alert("Invalid link"));
  }, []);

  return <h2>Activating...</h2>;
}

