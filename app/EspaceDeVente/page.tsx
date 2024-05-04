import React, { Suspense } from "react";
import FetchDataComp from "../(components)/FetchDataComp";
import Link from "next/link";
import Image from "next/image";
function page() {
  return (
    <div>
      <Suspense
        fallback={
          <>
            {" "}
            <div className="h-screen w-screen  flex justify-center items-center">
              <Image
                src={"/Images/logocar2.png"}
                width={1000}
                height={1000}
                alt="logo"
                className="opacload"
              />
            </div>{" "}
          </>
        }
      >
        <FetchDataComp />
      </Suspense>
    </div>
  );
}

export default page;
