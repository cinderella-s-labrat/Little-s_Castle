import { useState, useEffect } from "react";
import axios from "axios";

export default function Register() {

  const [form, setForm] = useState({
    Fname: "",
    midName: "",
    Lname: "",
    email: "",
    address: "",
    gender: "",
    age: "",
    DOB: "",
    phone: "",
    password: "",
    captcha: "",
    captchaAnswer: ""
  });

  const [profilePic, setProfilePic] = useState(null);
  const [captcha, setCaptcha] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);

    setCaptcha(`${num1} + ${num2}`);

    setForm(prev => ({
      ...prev,
      captchaAnswer: num1 + num2
    }));
  };

  const handlePhoto = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const submit = async (e) => {
    e.preventDefault();

    if (parseInt(form.captcha) !== parseInt(form.captchaAnswer)) {
      alert("Captcha incorrect");
      return;
    }

    const formData = new FormData();

    Object.keys(form).forEach(key => {
      formData.append(key, form[key]);
    });

    formData.append("profilePic", profilePic);

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert("Registered successfully, please check your email to activate your account");

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <>
      <div className="container-xxl py-5 page-header position-relative mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <h1 className="display-2 text-white mb-4">
            Register
          </h1>
        </div>
      </div>

      <form
        onSubmit={submit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "450px",
          gap: "15px",
          margin: "0 auto"
        }}
      >

        <h1>Register Now</h1>

        <input
          name="Fname"
          placeholder="Enter first name"
          onChange={(e) =>
            setForm({ ...form, Fname: e.target.value })
          }
        />

        <input
          name="midName"
          placeholder="Enter middle name"
          onChange={(e) =>
            setForm({ ...form, midName: e.target.value })
          }
        />

        <input
          name="Lname"
          placeholder="Enter last name"
          onChange={(e) =>
            setForm({ ...form, Lname: e.target.value })
          }
        />

        <input
          name="email"
          placeholder="Enter email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          name="address"
          placeholder="Enter address"
          onChange={(e) =>
            setForm({ ...form, address: e.target.value })
          }
        />

        <input
          name="phone"
          placeholder="Enter phone number"
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <select
          name="gender"
          onChange={(e) =>
            setForm({ ...form, gender: e.target.value })
          }
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input
          name="age"
          placeholder="Enter age"
          onChange={(e) =>
            setForm({ ...form, age: e.target.value })
          }
        />

        <input
          type="file"
          onChange={handlePhoto}
        />

        <input
          type="date"
          name="DOB"
          onChange={(e) =>
            setForm({ ...form, DOB: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <div>
          Solve captcha: {captcha}
          &nbsp; &nbsp;
          <input
            placeholder="Answer"
            onChange={(e) =>
              setForm({ ...form, captcha: e.target.value })
            }
          />
        </div>

        <button className="btn btn-primary">
          Register
        </button>

      </form>
    </>
  );
}