import { useState, useEffect } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    gender: "",
    age: "",
    DOB: "",
    password: "",
    captcha: "",
    captchaAnswer: ""
  });

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

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/register", form);
    alert("Check email");
  };

  return (
    <>
    <div class="container-xxl py-5 page-header position-relative mb-5">
            <div class="container py-5">
                <h1 class="display-2 text-white animated slideInDown mb-4">Appointment</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Appointment</li>
                    </ol>
                </nav>
            </div>
        </div>
                                
                                <form onSubmit={submit} style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  width: "450px",
                                  gap: "15px",
                                  alignContent: "center",
                                  margin: "0 auto"
                                }}>
                                <h1 class="mb-4">Register Now</h1>
                                <input name="name" placeholder="Enter name" onChange={e=>setForm({...form,name:e.target.value})}/>
                                <input name="email" placeholder="Enter email" onChange={e=>setForm({...form,email:e.target.value})}/>
                                <input name="address" placeholder="Enter address" onChange={e=>setForm({...form,address:e.target.value})}/>
                                
                                <select name="gender" onChange={e=>setForm({...form,gender:e.target.value})}>
                                  <option value="">Select Gender</option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                  <option value="other">Other</option>
                                </select>
                                
                                <input name="age" placeholder="Enter age" onChange={e=>setForm({...form,age:Number(e.target.value)})}/>
                                {/* <input name="photo" placeholder="photo" onChange={e=>setForm({...form,photo:e.target.value})}/> */}
                                
                                <form action="">
                                  <label htmlFor="DOB">
                                    Enter your DOB:&nbsp;
                                    <input type="date" name="DOB" onChange={e=>setForm({...form,DOB:e.target.value})}>
                                    </input>
                                  </label>
                                </form>
                                
                                <label htmlFor="password">
                                  Enter password:&nbsp;
                                  <input name="password" type="password" placeholder="password"
                                  onChange={e=>setForm({...form,password:e.target.value})}/>
                                </label>
                                
                                  <p>Solve the captcha:&nbsp; {captcha} &nbsp;
                                    <input name="captcha" placeholder="Enter captcha answer" onChange={e=>setForm({...form,captcha:e.target.value})}/>
                                    <button type="button" onClick={generateCaptcha}>
                                      <i className="bi bi-arrow-clockwise"></i>
                                    </button>
                                  </p>
                                <button className="btn btn-primary" style={{ display: "block", margin: "0 auto" }}>Register</button>
                              </form>
    </>
  );
}

