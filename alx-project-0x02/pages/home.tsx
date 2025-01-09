import Link from 'next/link'
import React from 'react'

const home = () => {
  return (
    <>
    <h1>This is the home page</h1>
    <Link href='/' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Home</Link> 
    </>
    
  )
}

export default home