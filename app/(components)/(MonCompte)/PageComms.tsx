import React from "react";
import { countCommentOfIdUser } from "@/app/api/Comments/[id]/countCommentOfIdUser";
import { countParticipationsOfIdUser } from "@/app/api/Participations/[id]/countRassoOfIdUser";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { commentsOfIdUser } from "@/app/api/Comments/[id]/commentsOfIdUser";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";













async function PageComms({idOfAccount}:{idOfAccount:string}) {

    
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

  const session = await getServerSession(options);
  const commentOfIdUser = await countCommentOfIdUser(idOfAccount);
  const participationRassoOfIdUser = await countParticipationsOfIdUser(
    idOfAccount
  );

  const commentairesIdUser = await commentsOfIdUser(idOfAccount);

  const userImage = session?.user?.image;
  return (
    <div>
      <div className="flex items-center gap-2 p-24">
        <div>
          {session?.user?.id == idOfAccount ? (
            <>
              <img
                src={userImage || "/Images/profilsvg1.svg"}
                alt=""
                className={`w-32 h-32 rounded-full`}
              />
            </>
          ) : (
            <>
              <img
                src={"/Images/profilsvg1.svg"}
                alt=""
                className={`w-40 h-40 rounded-full border`}
              />
            </>
          )}
        </div>
        <div>
          {session?.user?.id == idOfAccount ? (
            <>
            <p className="text-4xl font-bold"> {session?.user?.name}</p>
            </>
          ):(
            <>
            <p className="text-4xl font-bold"> Utilisateur</p>
            </>
          )}
          <div className="flex gap-2">
            <span className="flex gap-1 items-center">
              <img src="/Images/commentss.svg" alt="" className="w-8 h-8" />
              <span className="font-bold">
                {" "}
                {commentOfIdUser}{" "}
                {commentOfIdUser <= 1 ? "message" : "messages"}
              </span>{" "}
              sur toute la plateforme.
            </span>
          </div>
        </div>
      </div>
      <div className="grid w-[80%] mx-auto grid-cols-3 gap-8">
        {commentairesIdUser.map((comment: any) => (
          <Card
            key={comment._id}
            className="hover:shadow-[#C91313] hover:shadow-md ease-in-out duration-150"
          >
            <Link className="" href={`/Rassemblements/${comment.idOfRasso}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                {session?.user?.id == idOfAccount ? (
            <>
              <img
                src={userImage || "/Images/profilsvg1.svg"}
                alt=""
                className={`w-12 h-12 rounded-full`}
              />
            </>
          ) : (
            <>
              <img
                src={"/Images/profilsvg1.svg"}
                alt=""
                className={`w-12 h-12 rounded-full border`}
              />
            </>
          )}
                  {session?.user?.id == idOfAccount ? (
            <>
            <p className="text-base text-gray-700"> {session?.user?.name}</p>
            </>
          ):(
            <>
            <p className="text-base text-gray-700"> Utilisateur</p>
            </>
          )}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="py-2 pl-2 border-l-2 font-bold border-red-500">
                  {comment.contentOfComment}
                </p>
              </CardContent>

              <CardFooter className="flex justify-between items-center">
                <Link
                  href={`/Rassemblements/${comment.idOfRasso}`}
                  className="px-4 py-1 rounded-md bg-[#1C74E9] hover:bg-[#4480c9] text-white"
                >
                  Voir commentaire
                </Link>

                <p className="italic text-sm opacity-40">
                  {formatTimestamp(comment.createdAt)}
                </p>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PageComms;
