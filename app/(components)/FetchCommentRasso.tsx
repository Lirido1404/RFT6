

import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import React, { Suspense } from "react";
import CommentsForm from "./CommentsForm";
import { fetchAllComments } from "@/app/api/Comments/fetchAllComments";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import EspaceComm from "./EspaceComm";





async function FetchCommentRasso({ id }: { id: string }) {
  const session = await getServerSession(options);
  const sessionid = session?.user?.id;
  const nameOfProprio = session?.user?.name;
  const userImage = session?.user?.image;
  const res = await fetchAllComments(id);

  
  

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
          <EspaceComm res={res} sessionid={sessionid}  />
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
