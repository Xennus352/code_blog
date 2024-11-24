import Image from "next/image";
import React from "react";
import next from "../../public/next.svg";

const ProfileCard = () => {
  return (
    <div>
      <div className="m-10 max-w-sm">
        <div className=" px-4 pt-8 pb-10 ">
          <div className="relative mx-auto w-36 rounded-full">
            <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
            <Image
              width={2}
              height={2}
              className="mx-auto h-auto w-full rounded-full"
              src={next}
              alt="user photo"
            />
          </div>
          <h1 className="my-1 text-center text-xl font-bold leading-8 text-snow">
            Test User
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
