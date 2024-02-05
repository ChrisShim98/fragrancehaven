import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  let userLoggedIn = localStorage.getItem("token") !== null;
  let adminCheck =
    localStorage.getItem("role") !== null &&
    localStorage.getItem("role") === "Admin";

  if (userLoggedIn && adminCheck) {
    return children;
  }
  return <Navigate to="/signIn" replace />;
};

export default AdminProtectedRoute;
