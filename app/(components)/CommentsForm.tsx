"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

function CommentsForm({ id }: { id: string }) {
  const { data: session } = useSession();
  const nameOfProprio = session?.user?.name;
  const userImage = session?.user?.image;
  const idUser = session?.user?.id;
  const [formData, setFormData] = useState({
    contentOfComment: "",
    idOfRasso: id,
    nomOfProprio: nameOfProprio,
    profilePic:userImage,
    idOfUser:idUser,

  });
  const router = useRouter();
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/Comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    router.refresh();
  };

  return (
    <>
    <Separator className="w-[60%] mx-auto mt-8"/>
    <form onSubmit={handleSubmit} className="flex justify-center gap-3 w-full mt-4  ">
      
      <input
        type="text"
        onChange={handleChange}
        name="contentOfComment"
        className=" border rounded-full p-1 w-96 bg-gray-200 hover:pl-5 ease-in-out duration-300 text-sm pl-4"
        placeholder="Mon message..."
        required
      />
      <button type="submit" className="flex justify-center items-center border border-gray-200 rounded-full p-2 hover:border-orange-500 hover:text-white ease-in-out duration-200 hover:-rotate-90">
        <img src="/Images/sendd.svg" className="h-6 w-6" alt="send"  />
      </button>
    </form>
    </>
  );
}

export default CommentsForm;
