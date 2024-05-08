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
      router.refresh();
    }
  };

  return (
    <button className='bg-white p-1 border-2 border-red-500 text-white rounded-lg hover:bg-red-500 ease-in-out duration-150' onClick={handleDelete}>
      <img src="/Images/trashcann.svg" className="w-6 w-6" alt="" />
    </button>
  );
}

export default DeleteComment;
