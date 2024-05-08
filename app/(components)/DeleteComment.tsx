'use client'
import React from 'react'
import { DeleteOneComment } from "@/app/api/Comments/DeleteComment";

interface DeleteCommentProps {
  idOfComment: string;
}

const DeleteComment: React.FC<DeleteCommentProps> = ({ idOfComment }) => {
  const handleDelete = async () => {
    await DeleteOneComment(idOfComment);
  }

  return (
    <button className='p-2 bg-orange-500 text-white rounded' onClick={handleDelete}>
      Delete
    </button>
  );
}

export default DeleteComment;
