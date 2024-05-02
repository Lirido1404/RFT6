import React, { Suspense } from "react";
import FetchDataComp2 from "@/app/(components)/FetchDataComp2";

function page({params}:any) {
  return (
    <div>
      <Suspense
        fallback={
          <>
            {" "}
            <p className="text-4xl text-red-500 font-bold">
              Loading Data...
            </p>{" "}
          </>
        }
      >
        <FetchDataComp2 id={params} />
      </Suspense>
    </div>
  );
}

export default page;
