import { useState } from "react";
import axios from "axios";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const submit = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/contact",
        form
      );
      
      alert("Thank you for contacting us. We will get back to you shortly.");

    

    } catch (err) {

      console.log(err);
      alert(
        err.response?.data?.msg ||
        "Failed to send message"
      );

    }

  };
  return (
    <>
      {/* <!-- Page Header End --> */}
          <div className="container-xxl py-5 page-header position-relative mb-5">
              <div className="container py-5">
                  <h1 className="display-2 text-white animated slideInDown mb-4">Contact Us</h1>
                  <nav aria-label="breadcrumb animated slideInDown">
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="#">Home</a></li>
                          <li className="breadcrumb-item"><a href="#">Pages</a></li>
                          <li className="breadcrumb-item text-white active" aria-current="page">Contact Us</li>
                      </ol>
                  </nav>
              </div>
          </div>
          {/* <!-- Page Header End --> */}


          {/* <!-- Contact Start --> */}
          <div className="container-xxl py-5">
                  <div className="bg-light rounded">
                      <div className="row g-0">
                          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                              <div className="h-100 d-flex flex-column justify-content-center p-5">
                                <p>Our team is always ready to assist you with any questions or concerns you may have. Feel free to reach out to us using the contact information below.</p>

                                  <form onSubmit={submit}>
                                      <div className="row g-3">
                                          <div className="col-sm-6">
                                              <div className="form-floating">
                                                  <input type="text" className="form-control border-0" id="name" placeholder="Your Name" name="name" value={form.name} onChange= {(e) =>
                                                    setForm({ ...form, name: e.target.value })
                                                }/>
                                                  <label htmlFor="name">Your Name</label>
                                              </div>
                                          </div>
                                          <div className="col-sm-6">
                                              <div className="form-floating">
                                                  <input type="email" className="form-control border-0" id="email" placeholder="Your Email" name="email" value={form.email} onChange= {(e) =>
                                                    setForm({ ...form, email: e.target.value })
                                                  } />
                                                  <label htmlFor="email">Your Email</label>
                                              </div>
                                          </div>
                                          <div className="col-12">
                                              <div className="form-floating">
                                                  <input type="text" className="form-control border-0" id="subject" value={form.subject} placeholder="Subject" onChange={(e) => setForm({...form, subject: e.target.value})}/>
                                                  <label htmlFor="subject">Subject</label>
                                              </div>
                                          </div>
                                          <div className="col-12">
                                              <div className="form-floating">
                                                  <textarea className="form-control border-0" value={form.message} placeholder="Leave a message here" id="message" style={{ height: "100px" }} onChange={(e) => setForm({...form, message: e.target.value})}></textarea>
                                                  <label htmlFor="message">Message</label>
                                              </div>
                                          </div>
                                          <div className="col-12">
                                              <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: "400px" }}>
                              <div className="position-relative h-100">
                                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117223.77996815203!2d85.32132625000001!3d23.343204800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1779310437912!5m2!1sen!2sin" width="600" height="450" 
                                  style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
  </>
  );
}