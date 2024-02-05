import { Navigate } from "react-router-dom";

const RedirectRoute = ({ children }) => {
  let userLoggedIn = localStorage.getItem('token') !== null
  let adminCheck =
    localStorage.getItem("role") !== null &&
    localStorage.getItem("role") === "Admin";

  if (userLoggedIn && !adminCheck) {
    return <Navigate to="/myAccount" replace />;
  } else if (adminCheck) {
    return <Navigate to="/adminDashboard" replace />;
  }
  return children;
};

export default RedirectRoute;
