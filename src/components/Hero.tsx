"use client";

import { login } from "@/action/auth";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col justify-evenly gap-4 items-center h-screen ">
        <div>
          <p className="text-xl opacity-30">Everyday New Learning</p>
          <p className="text-2xl font-bold">Programming Blog</p>
        </div>
        <div className=" flex gap-2">
          <button
            className="btn btn-outline uppercase btn-secondary"
            onClick={() => {
              router.push("/");
            }}
          >
            Sign in
          </button>

          <button
            className="btn btn-outline uppercase btn-primary"
            onClick={() => {
              login("google");
            }}
          >
            Sign in with google
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
