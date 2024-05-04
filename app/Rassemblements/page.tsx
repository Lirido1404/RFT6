import React, { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import CalandarComp from "../(components)/CalendarComp";
import CardCalendar from "../(components)/CardCalendar";
import Image from "next/image";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import DateForm from "../(components)/DateForm";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <>
      <Drawer>
        <div className="flex flex-col gap-2 p-16">
          <h2 className="font-bold text-5xl">Dates de rassemblements</h2>
          <DrawerTrigger className="w-60 rounded text-white font-bold bg-[#FF7E14] px-4 py-2 shadow">
          Je crée mon rasso !
          </DrawerTrigger>
        </div>
        <div className="flex flex-col lg:flex-row justify-center  gap-4 w-[70%] mx-auto ">
          <div className="flex flex-col lg:flex-row gap-4">
            <CalandarComp />
            <div className="p-4 hidden lg:flex">
              <Separator orientation="vertical" />
            </div>
            <div className="p-4 lg:hidden">
              <Separator />
            </div>
          </div>

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
            <CardCalendar />
          </Suspense>
        </div>

        <DrawerContent>
          <div className="mt-10 flex justify-center items-center mb-10">
            <DateForm />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default page;
