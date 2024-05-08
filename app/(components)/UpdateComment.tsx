import React, { useState } from "react";
import { useRouter } from "next/navigation";
function UpdateComment({
  idOfComment,
  contentOfComment,
}: {
  idOfComment: string;
  contentOfComment: string;
}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    contentOfComment: contentOfComment,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async () => {
    const res = await fetch(`/api/Comments/${idOfComment}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          onChange={handleChange}
          value={formData.contentOfComment}
          name="contentOfComment"
          className="border-black border rounded w-[70%]"
        />
        <button
          type="submit"
          className="flex justify-center items-center border border-gray-200 rounded-full p-2 hover:border-orange-500 hover:text-white ease-in-out duration-200 hover:-rotate-90"
        >
          <img src="/Images/sendd.svg" className="h-6 w-6" alt="send" />
        </button>
      </form>
    </>
  );
}

export default UpdateComment;
