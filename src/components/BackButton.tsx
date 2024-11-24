"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <div>
      <button
        className="btn btn-primary btn-outline m-2 rounded-md p-2"
        onClick={() => {
          router.back();
        }}
      >
        {" "}
        <ChevronLeft />
      </button>
    </div>
  );
};

export default BackButton;
