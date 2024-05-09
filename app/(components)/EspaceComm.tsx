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
      {res?.map((comment: any,index:number) => (
        <div
          key={comment._id}
          className={`flex p-2 mt-2 gap-2 relative ${
            sessionid === comment.idOfUser ? "flex-row-reverse " : ""
          } `}
        >
          <div className="flex items-end">
            <img
              src={comment.profilePic || "/Images/profilsvg1.svg"}
              alt="img"
              className="h-16 w-16 rounded-full border border-gray-200"
            />
          </div>
          <div
            className={`w-[70%] rounded-2xl p-4 shadow relative ${
              sessionid === comment.idOfUser ? "bg-[#ff6262] shadow-lg" : ""
            } ${index === res.length - 1 ? "elementascale" : ""}`}
          >
            <div className="flex justify-between">
              {sessionid === comment.idOfUser ? (
                <></>
              ) : (
                <>
                  <p className="text-[#C91313]">
                    {comment.nomOfProprio
                      ? comment.nomOfProprio
                      : "Utilisateur"}
                  </p>
                </>
              )}

              {sessionid === comment.idOfUser && !editMode && (
                <>
                  <div className="flex gap-2 py-1 absolute -top-4 right-4">
                    <button
                      className="p-1 border-2 border-[#1A73E8] text-white rounded-lg bg-white hover:bg-[#1A73E8] ease-in-out duration-150"
                      onClick={() => setEditMode(!editMode)}
                    >
                      <img src="/Images/pencill.svg" className="w-6" alt="" />
                    </button>
                    <DeleteComment idOfComment={comment._id}  />
                  </div>
                </>
              )}

              {sessionid === comment.idOfUser && editMode && (
                <>
                  <div className="flex gap-2 py-1 absolute -top-4 right-4">
                    <button
                      className="p-1 border-2 border-[#1A73E8] text-white bg-white rounded-lg hover:bg-[#1A73E8] ease-in-out duration-150"
                      onClick={() => setEditMode(!editMode)}
                    >
                      <img src="/Images/backk.svg" className="w-6" alt="" />
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
              <p className={`mt-2 ${
                sessionid === comment.idOfUser ? " text-white" : ""
              }`}>{comment.contentOfComment}</p>
            )}
            <p className="text-sm absolute bottom-0 right-0 py-2 px-4 text-gray-400">
              <span className="italic">
                {formatTimestamp(comment.createdAt)}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EspaceComm;
