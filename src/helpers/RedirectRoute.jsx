import { Navigate } from "react-router-dom";

const RedirectRoute = ({ children }) => {
  let userLoggedIn = localStorage.getItem('token') !== null

  if (userLoggedIn) {
    return <Navigate to="/myAccount" replace />;
  }
  return children;
};

export default RedirectRoute;
