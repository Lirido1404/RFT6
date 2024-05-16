import React from 'react'
import { Separator } from "@/components/ui/separator";

function FiltreVoiture() {
  return (
    <>
      <h1 className="text-center text-4xl font-bold mt-4">Filtre</h1>
      <div className="w-full mt-4 flex flex-col gap-1  ">
        <Separator className="w-[70%] bg-[#C91313] mx-auto" />
        <span className="flex items-center justify-between hover:bg-[#C91313] hover:text-white hover:gap-3 ease-in-out duration-150 cursor-pointer">
          <p className="text-5xl ml-16">BMW</p>
          <img src="/Images/bmwlogo.svg" className="w-16 h-16 mr-16" alt="" />
        </span>
        <Separator className="w-[70%] bg-[#C91313] mx-auto" />
      </div>
      <div className="w-full mt-4 flex flex-col gap-1 ">
        <Separator className="w-[70%] bg-[#C91313] mx-auto" />
        <span className="flex items-center justify-between hover:bg-[#C91313] hover:text-white hover:gap-3 ease-in-out duration-150 cursor-pointer">
          <p className="text-5xl ml-16">Mercedes</p>
          <img
            src="/Images/mercedeslogo.svg"
            className="w-16 h-16 mr-16"
            alt=""
          />
        </span>
        <Separator className="w-[70%] bg-[#C91313] mx-auto" />
      </div>
      <div className="w-full mt-4 flex flex-col gap-1 ">
        <Separator className="w-[70%] bg-[#C91313] mx-auto" />
        <span className="flex items-center justify-between hover:bg-[#C91313] hover:text-white hover:gap-3 ease-in-out duration-150 cursor-pointer">
          <p className="text-5xl ml-16">Audi</p>
          <img src="/Images/audilogo.svg" className="w-16 h-16 mr-16" alt="" />
        </span>
        <Separator className="w-[70%] bg-[#C91313] mx-auto" />
      </div>
    </>
  );
}

export default FiltreVoiture