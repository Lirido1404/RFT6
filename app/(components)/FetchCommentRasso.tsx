import { CommandFailedEvent } from "mongodb";
import React, { Suspense } from "react";
import CommentsForm from "./CommentsForm";
import { fetchAllComments } from "@/app/api/Comments/fetchAllComments";
async function FetchCommentRasso({id}:{id:string}) {
  const res = await fetchAllComments(id);
  const data = JSON.stringify(res);

  console.log(res);
  console.log(data);
  return (
    <div>
      {res?.map((comment: any) => (
        <>
          <p> {comment.nomOfProprio} </p>

          <p> {comment.contentOfComment} </p>
        </>
      ))}
      <p>1</p>

      <p>2</p>

      <CommentsForm id={id} />
    </div>
  );
}

export default FetchCommentRasso;
