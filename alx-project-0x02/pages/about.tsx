import Link from 'next/link'
import React from 'react'

const about = () => {
  return (
   <>
    <h1>This is the about page</h1>
    <Link 
    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    href="/">Home</Link>
   </>
    
  )
}

export default about