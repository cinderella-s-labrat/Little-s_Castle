import axios from "axios";

import { useState } from "react";

export default function AdminLogin() {

  const [form, setForm] = useState({});

  const submit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        form
      );

      localStorage.setItem(
        "adminToken",
        res.data.token
      );

      localStorage.setItem(
        "adminRole",
        res.data.admin.role
      );

      window.location =
        "/admin/dashboard";

    } catch (err) {

      alert(
        err.response?.data?.msg
      );

    }

  };

  return (

    <form onSubmit={submit}>

      <input
        placeholder="Email"

        onChange={(e)=>
          setForm({
            ...form,
            email:e.target.value
          })
        }
      />

      <input
        type="password"
        placeholder="Password"

        onChange={(e)=>
          setForm({
            ...form,
            password:e.target.value
          })
        }
      />

      <button>
        Admin Login
      </button>

    </form>
  );
}