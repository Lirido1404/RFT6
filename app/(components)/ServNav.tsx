import React from 'react'
import Nav from './Nav'
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
async function ServNav() {
    const session = await getServerSession(options)

  return (
    <>
    <Nav session={session} />
    </>
  )
}

export default ServNav