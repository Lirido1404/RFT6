import React from "react";
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

async function FetchOneEvent({ id }: any) {
  const res = await fetchOneEvent(id);
  return (
    <div>
      <div className="p-16">
        <h3 className=" text-black text-4xl font-bold">{res.title}</h3>
      </div>
      <div className="flex gap-20 p-20">
        <div className="w-[30%] bg-red-500">
          <Card>
            <CardHeader>
              <CardTitle> {res.title} </CardTitle>
              <CardDescription>
                <div className="flex gap-4 ">
                  <span className="flex items-center gap-2">
                    {" "}
                    <img
                      src="/Images/calendaricon.svg"
                      alt=""
                      className="h-6 w-6"
                    />{" "}
                    <p>{res.date}</p>{" "}
                  </span>
                  <span className="flex items-center gap-2">
                    {" "}
                    <img
                      src="/Images/mapicon.svg"
                      alt=""
                      className="h-6 w-6"
                    />{" "}
                    <p>{res.lieu}</p>
                  </span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
        <div className="bg-blue-500 flex-grow">h</div>
      </div>
    </div>
  );
}

export default FetchOneEvent;

/*
<p> {res.objectif} </p>
<p> {res.date} </p>
<p> {res.lieu} </p>
<p> {res.horaire} </p>
<p> {res.duree} </p>
<p className='text-black'> {res.tag1} </p>
<p> {res.tag2} </p>
<p> {res.tag3} </p>
<p> {res.content} </p>
*/
