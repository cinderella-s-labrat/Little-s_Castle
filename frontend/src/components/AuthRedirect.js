import { Navigate } from "react-router-dom";

export default function AuthRedirect({ children }) {
  return localStorage.getItem("token")
    ? <Navigate to="/dashboard" />
    : children;
}

