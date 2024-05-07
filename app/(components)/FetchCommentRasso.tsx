import React, { Suspense } from "react";
import CommentsForm from "./CommentsForm";
import { fetchAllComments } from "@/app/api/Comments/fetchAllComments";
import Image from "next/image";
async function FetchCommentRasso({ id }: { id: string }) {
  
    const res = await fetchAllComments(id);
  

  

  return (
    <div>
      {res?.map((comment: any) => (
        <div key={comment._id} className="  flex p-2 mt-3 gap-2 ">
          <div className=" flex items-end">
            <img
              src={comment.profilePic}
              alt="img"
              className="h-16 w-16 rounded-full "
            />
          </div>
          <div className=" w-[80%]  rounded-2xl p-4 shadow">
            <p className="text-orange-500"> {comment.nomOfProprio} </p>

            <p className=""> {comment.contentOfComment} </p>
          </div>
        </div>
      ))}

      <CommentsForm id={id}   />
    </div>
  );
}

export default FetchCommentRasso;

/* 

<p> {comment.nomOfProprio} </p>
          <Image
            src={comment.profilePic || "/Images/profilsvg1.svg"}
            alt="img"
            width={20}
            height={20}
          />

          <p> {comment.contentOfComment} </p>

          */

          // outline outline-[2px] outline-offset-2 outline-gray-500