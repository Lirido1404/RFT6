"use client";
import React, { useState } from "react";
import DeleteComment from "./DeleteComment";
import UpdateComment from "./UpdateComment";

function EspaceComm({ res, sessionid }: { res: any; sessionid: string }) {
  const [editMode, setEditMode] = useState(false);

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
    <div className="mt-6">
      {res?.map((comment: any) => (
        <div key={comment._id} className="  flex p-2 mt-2 gap-2 relative ">
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

              {sessionid === comment.idOfUser && !editMode && (
                <>
                  <div className="flex gap-2">
                    <button
                      className="p-2 bg-orange-500 text-white rounded"
                      onClick={() => setEditMode(!editMode)}
                    >
                      Edit
                    </button>
                    <DeleteComment idOfComment={comment._id} />
                  </div>
                </>
              )}

              {sessionid === comment.idOfUser && editMode && (
                <>
                  <div className="flex gap-2">
                    <button
                      className="p-2 bg-orange-500 text-white rounded"
                      onClick={() => setEditMode(!editMode)}
                    >
                      Back
                    </button>
                  </div>
                </>
              )}
            </div>

            {editMode && sessionid === comment.idOfUser ? (
              <UpdateComment
                idOfComment={comment._id}
                contentOfComment={comment.contentOfComment}
              />
            ) : (
              <p className="mt-2"> {comment.contentOfComment} </p>
            )}
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
  );
}

export default EspaceComm;
