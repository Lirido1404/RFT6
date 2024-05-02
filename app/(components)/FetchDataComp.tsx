import React from "react";
import { fetchDataCar } from "@/app/api/Cars/FetchDataOfCar";
import CompForFetch1 from "./CompForFetch1";




async function FetchDataComp() {
  const res = await fetchDataCar();
  return (
    <div>
      <CompForFetch1 res={res} />
    </div> 
  );
}

export default FetchDataComp;
