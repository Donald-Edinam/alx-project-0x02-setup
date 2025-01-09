import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center gap-5 p-4'>
      <div>Header</div>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        <Link href="/home">Home</Link>
      </button>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        <Link href="/about">About</Link>
      </button>
    </div>
  )
}

export default Header