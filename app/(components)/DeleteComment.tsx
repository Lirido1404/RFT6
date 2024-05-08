'use client'
import React from 'react'
import { useRouter } from 'next/navigation';


function DeleteComment ({ idOfComment }:{idOfComment:string}){
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(`/api/Comments/${idOfComment}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <button className='p-2 bg-orange-500 text-white rounded' onClick={handleDelete}>
      Delete
    </button>
  );
}

export default DeleteComment;
