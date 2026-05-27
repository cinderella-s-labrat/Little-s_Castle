import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function ResetPassword() {

  const { token } = useParams();
  const nav = useNavigate();
  const [password, setPassword] = useState("");

  const submit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        { password }
      );

      alert(res.data.msg);
      nav("/login");

    } catch (err) {

      alert(err.response?.data?.msg);
    }
  };

  return (
    <form onSubmit={submit}>

      <h2>Reset Password</h2>

      <input
        type="password"
        placeholder="New Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button>Reset Password</button>

    </form>
  );
}

