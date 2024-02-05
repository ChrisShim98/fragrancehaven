import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { Navigate } from "react-router-dom";
import { logout } from "../helpers/parseJWT";

const MyAccount = () => {
  let username = localStorage.getItem("username");
  const [redirect, setRedirect] = useState(false);
  return (
    <div className="w-full flex flex-col gap-4">
      <PageHeader pageHeader={"My Account"} />
      <div className="flex flex-col gap-4 items-center">
        <h1>Hi {username}</h1>
      </div>
      {redirect && <Navigate to="/" replace />}
    </div>
  );
};

export default MyAccount;
