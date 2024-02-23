import React from "react";
import UpdatePassword from "../User/UpdatePassword";

const ModifyAccount = () => {
  let username = localStorage.getItem("username");
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <h1 className="font-medium text-xl sm:text-3xl pb-2">Modify My Account</h1>
      <span className="w-24 h-4 border-black border-t-2 pb-4" />
      <div className="flex flex-col gap-1 w-full max-w-[800px]">
        <h1 className="font-medium text-lg lg:text-xl">Update Password</h1>
        <span className="w-24 h-1 border-black border-t-[1px]" />
      </div>
      <UpdatePassword username={username} />
    </div>
  );
};

export default ModifyAccount;
