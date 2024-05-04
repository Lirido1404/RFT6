import React from 'react'


import {fetchOneEvent} from "@/app/api/Date/fetchoneevent"

async function FetchOneEvent({id}:any) {
    const res = await fetchOneEvent(id);
  return (
    <div>
        <div className='p-16'>
        <h3 className=' text-black text-4xl font-bold'>{res.title}</h3>
        <p> {res.objectif} </p>
        <p> {res.date} </p>
        <p> {res.lieu} </p>
        <p> {res.horaire} </p>
        <p> {res.duree} </p>
        <p className='text-black'> {res.tag1} </p>
        <p> {res.tag2} </p>
        <p> {res.tag3} </p>
        <p> {res.content} </p>
        </div>
    </div>
  )
}

export default FetchOneEvent