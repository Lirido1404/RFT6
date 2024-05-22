"use client";
import React, { useEffect } from "react";
import { useDateStore } from "@/app/(store)/store";

function ImgOfProfil({text}:{text:string}) {
  const setSrcImage = useDateStore((state) => state.setSrcImage);
  const srcImage = useDateStore((state) => state.srcImage);

  const setSrcImage2 = useDateStore((state) => state.setSrcImage2);
  const srcImage2 = useDateStore((state) => state.srcImage2);

  const setUserId = useDateStore((state) => state.setUserId);
  const userId = useDateStore((state) => state.userId);

  return (
    <>
      
      <img
        src={srcImage2 || srcImage || "/Images/profilsvg1.svg"}
        alt=""
        className={`w-40 h-40 rounded-full border`}
      />
      <p> {text} </p>
    </>
  );
}

export default ImgOfProfil;
