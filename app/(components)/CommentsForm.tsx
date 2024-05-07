"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function CommentsForm({ id }: { id: string }) {
  const { data: session } = useSession();
  const nameOfProprio = session?.user?.name;
  const [formData, setFormData] = useState({
    contentOfComment: "",
    idOfRasso: "",
    nomOfProprio: nameOfProprio,
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
    <form onSubmit={handleSubmit} className="flex gap-1 w-full bg-blue-500">
      <p>NameOfProprio : {nameOfProprio} </p>
      <input
        type="text"
        onChange={handleChange}
        name="contentOfComment"
        className="bg-red-500"
      />
      <input type="submit" value={"Envoyer"} />
    </form>
  );
}

export default CommentsForm;
