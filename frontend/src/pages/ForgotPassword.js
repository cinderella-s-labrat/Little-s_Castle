import { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {

  const [email, setEmail] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );

      alert(res.data.msg);

    } catch (err) {
      alert(err.response?.data?.msg);
    }
  };

  return (
    <form onSubmit={submit}>

      <h2>Forgot Password</h2>

      <input
        type="email"
        placeholder="Enter email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <button>Send Reset Link</button>

    </form>
  );
}
