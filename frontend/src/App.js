import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Activate from "./pages/Activate";
import About from "./pages/about";
import Class from "./pages/class";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthRedirect from "./components/AuthRedirect";
import { Footer } from "./components/Footer";
import React from "react";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />} />

        <Route path="/classes" element={<Class />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={
          <AuthRedirect><Login /></AuthRedirect>
        } />

        <Route path="/register" element={
          <AuthRedirect><Register /></AuthRedirect>
        } />

        <Route path="/activate/:token" element={<Activate />} />

        <Route path="/dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
