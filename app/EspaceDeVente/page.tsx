import React, { Suspense } from 'react'
import FetchDataComp from '../(components)/FetchDataComp'
import Link from "next/link"
function page() {
  return (
    <div>
        <Suspense fallback={<> <p className='text-4xl text-red-500 font-bold'>Loading Data...</p> </>}>
            <FetchDataComp/>
        </Suspense>
        
    </div>
  )
}

export default page