import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let userLoggedIn = localStorage.getItem('token') !== null

  if (!userLoggedIn) {
    return <Navigate to="/signIn" replace />;
  }
  return children;
};

export default ProtectedRoute;
