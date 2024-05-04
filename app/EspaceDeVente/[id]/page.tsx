import React, { Suspense } from "react";
import FetchDataComp2 from "@/app/(components)/FetchDataComp2";
import Image from "next/image";

function page({ params }: any) {
  return (
    <div>
      <Suspense
        fallback={
          <>
            <div className="h-screen w-screen  flex justify-center items-center">
              <Image
                src={"/Images/logocar2.png"}
                width={1000}
                height={1000}
                alt="logo"
                className="opacload"
              />
            </div>
          </>
        }
      >
        <FetchDataComp2 id={params} />
      </Suspense>
    </div>
  );
}

export default page;
