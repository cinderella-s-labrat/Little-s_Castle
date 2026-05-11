import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({});

const submit = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
        );

        localStorage.setItem("token", res.data.token);
        window.location = "/dashboard";

        } catch (err) {
            alert(err.response?.data?.message || "Login failed");
        }
    };

  return (
    <form onSubmit={submit}>
      <input name="email" placeholder="email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input name="password" type="password" placeholder="password"
        onChange={e=>setForm({...form,password:e.target.value})}/>
      <button>Login</button>
    </form>
  );
}

