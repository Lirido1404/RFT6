import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import React, { Suspense } from "react";
import CommentsForm from "./CommentsForm";
import { fetchAllComments } from "@/app/api/Comments/fetchAllComments";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Timestamp } from "mongodb";

async function FetchCommentRasso({ id }: { id: string }) {
  const session = await getServerSession(options);
  const sessionid = session?.user?.id;
  const nameOfProprio = session?.user?.name;
  const userImage = session?.user?.image;
  const res = await fetchAllComments(id);

  const formatTimestamp = (timestamp: any) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const date = new Date(timestamp);
    const formatedDate = date.toLocaleDateString("fr-FR", options);

    return formatedDate;
  };

  return (
    <div>
      {res?.length === 0 ? (
        <>
          <p className="p-2 font-bold">
            Dans l&apos;attente de ton commentaire...
          </p>
          <div className="flex p-2 mt-3 gap-2">
            <div className="flex items-end">
              <Skeleton circle height={64} width={64} />
            </div>
            <div className="w-[80%] rounded-2xl p-4 shadow">
              <Skeleton />
              <Skeleton width={"30%"} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mt-6">
            {res?.map((comment: any) => (
              <div
                key={comment._id}
                className="  flex p-2 mt-2 gap-2 relative "
              >
                <div className=" flex items-end">
                  <img
                    src={comment.profilePic || "/Images/profilsvg1.svg"}
                    alt="img"
                    className="h-16 w-16 rounded-full border border-gray-200 "
                  />
                </div>
                <div className=" w-[80%]  rounded-2xl p-4 shadow relative">
                  <div className="flex justify-between">
                    <p className="text-orange-500">
                      {" "}
                      {comment.nomOfProprio
                        ? comment.nomOfProprio
                        : "Utilisateur"}{" "}
                    </p>

                    {sessionid === comment.idOfUser && (
                      <>
                        <div className="flex gap-2">
                          <p className="text-orange-500">Edit</p>
                          <p className="text-orange-500">Delete</p>
                        </div>
                      </>
                    )}
                  </div>

                  <p className="mt-2"> {comment.contentOfComment} </p>
                  <p className="text-sm absolute bottom-0 right-0 py-2 px-4  text-gray-400">
                    <span className="italic">
                      {" "}
                      {formatTimestamp(comment.createdAt)}
                    </span>{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <CommentsForm
        id0={id}
        nameOfProprio={nameOfProprio}
        userImage={userImage}
        idUser={sessionid}
      />
    </div>
  );
}

export default FetchCommentRasso;
