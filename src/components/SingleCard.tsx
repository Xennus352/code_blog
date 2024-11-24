import { BookMarked } from "lucide-react";
import Link from "next/link";
import React from "react";

const SingleCard = () => {
  return (
    <div className=" border m-2 p-2 rounded-md">
      {/* avata and date  */}

      <div>
        <div className="avatar flex justify-start gap-4">
          <div className="w-14 h-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          <div>
            <p>Admin</p>
            <p>Created at 123</p>
          </div>
        </div>
      </div>

      <form action="" className="flex gap-3">
        <div className="btn btn-outline btn-primary">Delete Post</div>
        <div className="btn btn-outline btn-primary">Edit Post</div>
      </form>

      <div className="divider divider-primary"></div>
      {/* card body  */}
      <p className="p-2">
        Paragraphs are the building blocks of papers. Many students define
        paragraphs in terms of length: a paragraph is a group of at least five
        sentences, a paragraph is half a page long, etc. In reality, though, the
        unity and coherence of ideas among sentences is what constitutes a
        paragraph.
      </p>

      <Link
        href={"/"}
        className="underline text-info  hover:cursor-pointer m-2"
      >
        {" "}
        Paragraphs are the building blocks of papers.
      </Link>
      <div className=" flex ">
        {/* tags  */}
        <div className="border rounded-md w-fit text-white m-2 p-2">
          <p className="flex">JavaScript, php</p>
        </div>
        {/* save button  */}
        <form>
          <button type="submit" className="btn m-2 btn-primary btn-outline">
            Save <BookMarked />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleCard;
