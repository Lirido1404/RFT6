"use client";
import React, { useEffect } from "react";
import { useDateStore } from "@/app/(store)/store";

function ImgOfProfil({ text }: { text: string }) {
  const setSrcImage = useDateStore((state) => state.setSrcImage);
  const srcImage = useDateStore((state) => state.srcImage);

  

  return (
    <>
      <img
        src={srcImage || "/Images/profilsvg1.svg"}
        alt=""
        className={`w-40 h-40 rounded-full border`}
      />
      <p> {text} </p>
    </>
  );
}

export default ImgOfProfil;
