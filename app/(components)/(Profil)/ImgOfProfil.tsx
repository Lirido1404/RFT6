'use client'
import React from "react";
import { useDateStore } from "@/app/(store)/store";

function ImgOfProfil() {
    const setSrcImage = useDateStore((state) => state.setSrcImage);
  const srcImage = useDateStore((state) => state.srcImage);
  return (
    <img
      src={srcImage || "/Images/profilsvg1.svg"}
      alt=""
      className={`w-40 h-40 rounded-full border`}
    />
  );
}

export default ImgOfProfil;
