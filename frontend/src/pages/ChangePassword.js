import { useState } from "react";
import axios from "axios";

export default function ChangePassword() {

  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: ""
  });

  const submit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.put(
        "http://localhost:5000/api/users/change-password",
        form,
        {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token")
          }
        }
      );

      alert(res.data.msg);

    } catch (err) {

      alert(err.response?.data?.msg);
    }
  };

  return (
    <form onSubmit={submit}>

      <h2>Change Password</h2>

      <input
        type="password"
        placeholder="Old Password"
        onChange={(e)=>
          setForm({
            ...form,
            oldPassword: e.target.value
          })
        }
      />

      <input
        type="password"
        placeholder="New Password"
        onChange={(e)=>
          setForm({
            ...form,
            newPassword: e.target.value
          })
        }
      />

      <button>Change Password</button>

    </form>
  );
}
