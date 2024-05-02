import React, { Suspense } from 'react'
import FetchDataComp from '../(components)/FetchDataComp'
import Link from "next/link"
import Image from 'next/image'
function page() {
  return (
    <div> 
        <Suspense fallback={<> <span className='text-7xl text-[#FF7E14] font-bold flex gap-2 items-center'> <p>Loading Data...</p> <Image
        src={"/Images/logocar2.png"}
        width={30}
        height={30}
        alt="logo"
        className="opacload"
      /></span> </>}>
            <FetchDataComp/>
        </Suspense>
        
    </div>
  )
}

export default page