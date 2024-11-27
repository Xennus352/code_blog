"use client";
import { logout } from "@/action/auth";
import { LogOut } from "lucide-react";
import React from "react";

const LogoutBtn = () => {
  return (
    <div
      onClick={() => {
        logout();
      }}
      className="btn btn-primary btn-outline"
    >
      <div className="flex gap-2 items-center justify-center">
        Logout
        <span>
          <LogOut />
        </span>
      </div>
    </div>
  );
};

export default LogoutBtn;
