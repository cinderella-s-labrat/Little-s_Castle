import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear();
    nav("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            <a href="index.html" className="navbar-brand">
                <h1 className="m-0 text-primary"><i className="fa fa-book-reader me-3"></i>Little's Castel</h1>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto">
                    <Link to="/" className="nav-item nav-link active">
                        Home
                    </Link>
                    <Link to="/about" className="nav-item nav-link">
                        About Us
                    </Link>
                    <Link to="/classes" className="nav-item nav-link">
                        Classes
                    </Link>
                    {/* <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <a href="facility.html" className="dropdown-item">School Facilities</a>
                            <a href="team.html" className="dropdown-item">Popular Teachers</a>
                            <a href="call-to-action.html" className="dropdown-item">Become A Teachers</a>
                            <a href="appointment.html" className="dropdown-item">Make Appointment</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="404.html" className="dropdown-item">404 Error</a>
                        </div>
                    </div> */}
                    <Link to="/contact" className="nav-item nav-link">
                        Contact Us
                    </Link>
                </div>
                {!token && (
                <div style={{ display: "flex", gap: 5 , alignItems: "right"}}>
                  <Link to="/login">
                    <button className="btn btn-primary round-pill px-3 d-none d-lg-block">Login</button >
                  </Link> 
                  <Link to="/register">
                    <button className="btn btn-primary round-pill px-3 d-none d-lg-block">Register</button>
                  </Link>
                </div>
              )}

                {token && (
                  <div style={{ display: "flex", gap: 5}}>
                    <Link to="/dashboard">
                      <button className="btn btn-primary round-pill px-3 d-none d-lg-block">Dashboard</button>
                    </Link>
                  </div>
                )}
            </div>
        </nav>
      
    </div>
  );
}

