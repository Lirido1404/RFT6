import React, { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchOneEvent } from "@/app/api/Date/fetchoneevent";
import { Separator } from "@radix-ui/react-separator";
import { Badge } from "@/components/ui/badge"
import FetchCommentRasso from "./FetchCommentRasso";
import Image from "next/image";
import {countAllComments} from "@/app/api/Comments/countComment"

async function FetchOneEvent({ id }: any) {




  const res0 = await countAllComments(id);
  const res = await fetchOneEvent(id);

  const returnTag1 = () => {
    const tag1 = res.tag1;

    switch (tag1) {
      case "Parking":
        return (
          <div className="flex gap-1 items-center p-1">
            {" "}
            <img src="/Images/parkingg.svg" alt="" className="h-6 w-6" />{" "}
            <p className='text-black font-bold'> {tag1} </p>{" "}
          </div>
        );
        break;
      case "Exploration":
        return (
          <div className="flex gap-1 items-center p-1">
            {" "}
            <img
              src="/Images/explorationn.svg"
              alt=""
              className="h-6 w-6"
            />{" "}
            <p className='text-black font-bold'> {tag1} </p>{" "}
          </div>
        );
        break;
      case "Course":
        return (
          <div className="flex gap-1 items-center p-1">
            {" "}
            <img src="/Images/racee.svg" alt="" className="h-6 w-6" />{" "}
            <p className='text-black font-bold'> {tag1} </p>{" "}
          </div>
        );
        break;
      case "Fête":
        return (
          <div className="flex gap-1 items-center p-1">
            {" "}
            <img src="/Images/partyy.svg" alt="" className="h-6 w-6" />{" "}
            <p className='text-black font-bold'> {tag1} </p>{" "}
          </div>
        );
        break;
    }
  };

  const returnTag2 = () => {
    const tag2 = res.tag2;

    return (
      <div className="flex gap-1 items-center p-1">
        {" "}
        <img src="/Images/peoplee.svg" alt="" className="h-6 w-6" /> <p className="text-black font-bold"> {tag2} </p>
      </div>
    );
  };

  const returnTag3 = () => {
    const tag3 = res.tag3;

    return (
      <div className="flex gap-1 items-center p-1">
        {" "}
        <img src="/Images/carssport.svg" alt="" className="h-6 w-6" />  <p className="text-black font-bold"> {tag3} </p>
      </div>
    );
  };

  return (
    <div>
      <div className="p-16 " >
        <h3 className=" font-bold text-4xl text-black inline-block p-4 border-l-2 border-[#FF7E14] ">{res.title}</h3>
        <div className="flex gap-4 border-l-2 border-[#FF7E14]">
        <p className="ml-4 flex gap-1 items-center"><img src="/Images/peoplee.svg" alt="Personnes" className="h-8 w-8" /> <span className="text-[#FF7E14] font-bold"> X </span> </p>
        <p className="ml-4 flex gap-1 items-center"> <img src="/Images/commentss.svg" alt="Commentaires" className="h-8 w-8" /> <span className="text-[#FF7E14] font-bold">{res0}</span></p>
        </div>
      </div>
      <div className="flex gap-20 p-20">
        <div className="w-[40%] ">
          <Card className=" sticky top-8 ">
            <CardHeader>
              <CardTitle> {res.title} </CardTitle>
              <CardDescription className="flex gap-4">
                Remplacement
                  {/*<span className="flex items-center gap-2">
                    <img
                      src="/Images/calendaricon.svg"
                      alt=""
                      className="h-6 w-6"
                    />
                    <p>
                      {res.date} | {res.horaire}h{" "}
                    </p>
                  </span>
                  <span className="flex items-center gap-2">
                    <img src="/Images/mapicon.svg" alt="" className="h-6 w-6" />
                    <p>{res.lieu}</p>
                  </span> */}
                
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="italic"> Objectif : {res.objectif} </p>
              <p className="text-justify mt-4"> {res.content} </p>
            </CardContent>
            <CardFooter className=" justify-between">
              <p className="p-2 bg-[#D0FECF] text-black rounded-lg cursor-pointer">Je participe</p>
              <div className="flex gap-1">
              <Badge className="bg-white border border-[#FF7E14] hover:bg-[#FF7E14]">
                {returnTag1()}
              </Badge>
              <Badge className="bg-white border border-[#FF7E14] hover:bg-[#FF7E14]">
                {returnTag2()}
              </Badge>
              <Badge className="bg-white border border-[#FF7E14] hover:bg-[#FF7E14]">
                {returnTag3()}
              </Badge>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className=" w-[60%]">
          <p className="text-3xl  text-black font-bold inline-block p-3 border-l-2 border-[#FF7E14]">Commentaires - {res.title} </p>
          
          <Suspense fallback={<div className="flex justify-center"> <Image src={'/Images/logocar2.png'} width={100} height={100} className="opacload" alt="logo"/> </div>}>
          <FetchCommentRasso id={res._id} />
          </Suspense>

        </div>
      </div>
    </div>
  );
}

export default FetchOneEvent;

