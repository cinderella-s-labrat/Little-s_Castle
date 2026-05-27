import { useEffect, useState } from "react";
import axios from "axios";

export default function EditProfile() {

  const [form, setForm] = useState({
    Fname: "",
    email: ""
  });

  useEffect(() => {

    axios.get(
      "http://localhost:5000/api/users/profile",
      {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("token")
        }
      }
    )
    .then(res => {
      setForm({
        Fname: res.data.Fname,
        email: res.data.email
      });
    });

  }, []);

  const submit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.put(
        "http://localhost:5000/api/users/edit-profile",
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

      <h2>Edit Profile</h2>

      <input
        value={form.Fname}
        onChange={(e)=>
          setForm({
            ...form,
            Fname: e.target.value
          })
        }
      />

      <input
        value={form.email}
        onChange={(e)=>
          setForm({
            ...form,
            email: e.target.value
          })
        }
      />

      <button>Update Profile</button>

    </form>
  );
}
