import FetchOneEvent from "@/app/(components)/FetchOneEvent";
import Image from "next/image";
import React, { Suspense } from "react";

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
        <FetchOneEvent id={params.id} />
      </Suspense>
    </div>
  );
}

export default page;
