import BackButton from "@/components/BackButton";
import ProfileCard from "@/components/ProfileCard";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col  h-screen">
        {/* hadder  */}
        <div className="flex justify-between m-2 items-center">
          <BackButton /> <p className="btn btn-primary btn-outline">Logout</p>
        </div>
        {/* bio contact */}
        <div className="flex flex-col items-center justify-center ">
          <h2 className="uppercase font-semibold underline">Profile</h2>
          <ProfileCard />
        </div>

        {/* save posts */}
        <div className="  m-2 grid gap-4">
          <h2>save posts</h2>
          <div className="flex gap-3 flex-wrap items-center justify-around">
            <div className=" w-[130px] mb-20 h-[130px] m-2 rounded-md border border-info"></div>
            <div className=" w-[130px] mb-20 h-[130px] m-2 rounded-md border border-info"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
