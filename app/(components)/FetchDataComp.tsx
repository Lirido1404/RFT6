import React from "react";
import { fetchDataCar } from "@/app/api/Cars/FetchDataOfCar";
import CompForFetch1 from "./CompForFetch1";




async function FetchDataComp({ page, query }: { page: number,query:string }) {
  page = !page || page < 1 ? 1 : page;
  const perPage = 4;

  const res = await fetchDataCar(perPage, page,query);
  const totalPages = Math.ceil(res?.itemCount / perPage);
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;
  return (
    <div>
      <CompForFetch1
        res={res}
        page={page}
        prevPage={prevPage}
        nextPage={nextPage}
        totalPages={totalPages}
        query={query}
      />
    </div>
  );
}

export default FetchDataComp;
