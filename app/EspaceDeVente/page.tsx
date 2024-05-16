import React, { Suspense } from "react";
import FetchDataComp from "../(components)/FetchDataComp";
import Link from "next/link";
import Image from "next/image";
function Page({searchParams}:any) {
  let page = parseInt(searchParams.page,10);
  console.log("Car : " + searchParams.car);
   const query = searchParams?.car || "";


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
        <FetchDataComp page={page} query={query} />
      </Suspense>
    </div>
  );
}

export default Page;
