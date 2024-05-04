import React from 'react'


import {fetchOneEvent} from "@/app/api/Date/fetchoneevent"

async function FetchOneEvent({id}:any) {
    const res = await fetchOneEvent(id);
  return (
    <div>
        <div className='p-16'>
        <h3 className=' text-black text-4xl font-bold'>{res.title}</h3>
        </div>
    </div>
  )
}

export default FetchOneEvent