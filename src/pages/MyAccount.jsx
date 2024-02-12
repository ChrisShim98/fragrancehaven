import React, { useState } from "react";
import PageHeader from "../components/PageHeader";

import UpdatePassword from "./User/UpdatePassword";
import Transactions from "./User/Transactions";

const MyAccount = () => {
  let username = localStorage.getItem("username");

  return (
    <div className="w-full flex flex-col gap-4">
      <PageHeader pageHeader={"My Account"} />
      <div className="flex flex-col p-8 gap-12">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-medium text-xl sm:text-2xl">Hi {username}</h1>
          <span className="w-24 h-1 border-black border-t-[1px]" />
          <p className="text-sm text-center">
            You can find all of your profile settings here
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col gap-1 w-full max-w-[800px]">
            <h1 className="font-medium text-lg lg:text-xl">Update Password</h1>
            <span className="w-24 h-1 border-black border-t-[1px]" />
          </div>
          <UpdatePassword username={username} />
        </div>
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex flex-col gap-1 w-full max-w-[800px]">
            <h1 className="font-medium text-lg lg:text-xl">Your Transactions</h1>
            <span className="w-24 h-1 border-black border-t-[1px]" />
          </div>
          <Transactions username={username} />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
