"use client";
import React, { useState } from "react";
import {useRouter} from "next/navigation"
function CommentsForm() {
  const [formData, setFormData] = useState({ contentOfComment: "" });
  const router = useRouter();
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <form onSubmit={handleSubmit} className="flex gap-1">
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
