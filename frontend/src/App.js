import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Activate from "./pages/Activate";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthRedirect from "./components/AuthRedirect";
import { Footer } from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
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
