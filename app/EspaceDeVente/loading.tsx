import Image from 'next/image'
import React from 'react'

function loading() {
  return (
    <div className='h-screen w-screen bg-red-500 flex justify-center items-center'>
        <Image src={'/Images/logocar2.png'} width={200} height={200} alt='logo' />
    </div>
  )
}

export default loading