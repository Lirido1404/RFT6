"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";

function CommentsForm({ id }: { id: string }) {
  const { data: session } = useSession();
  const nameOfProprio = session?.user?.name;
  const userImage = session?.user?.image;
  const [formData, setFormData] = useState({
    contentOfComment: "",
    idOfRasso: "",
    nomOfProprio: nameOfProprio,
    profilePic:userImage,

  });
  const router = useRouter();
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      idOfRasso: id,
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
    <form onSubmit={handleSubmit} className="flex justify-center gap-1 w-full bg-blue-500">
      
      <input
        type="text"
        onChange={handleChange}
        name="contentOfComment"
        className="border-black border rounded-full p-1 w-96 bg-gray-200"
      />
      <input type="submit" value={"Envoyer"} className="bg-green-500" />
    </form>
  );
}

export default CommentsForm;
