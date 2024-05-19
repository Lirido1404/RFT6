import React from "react";
import { countCommentOfIdUser } from "@/app/api/Comments/[id]/countCommentOfIdUser";
import { countParticipationsOfIdUser } from "@/app/api/Participations/[id]/countRassoOfIdUser";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
async function PageRasso() {
  const session = await getServerSession(options);
  const participationRassoOfIdUser = await countParticipationsOfIdUser(
    session?.user?.id
  );
  const userImage = session?.user?.image;
  return (
    <div>
      <div className="flex items-center gap-2 p-24">
        <div>
          {session ? (
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
                src={"/Images/profilsvg2.svg"}
                alt=""
                className={`w-40 h-40 rounded-full`}
              />
            </>
          )}
        </div>
        <div>
          <p className="text-4xl font-bold"> {session?.user?.name}</p>
          <div className="flex gap-2">
          <span className="flex gap-1 items-center">
            
          <img src="/Images/carssport.svg" alt="" className="w-7 h-7" />
            {participationRassoOfIdUser}
          </span>
          </div>
        </div>
      </div>


          <div className="w-[80%] mx-auto grid grid-cols-3">

          </div>

    </div>
  );
}

export default PageRasso;
