import Card from '@/components/common/Card'
import Link from 'next/link'
import React from 'react'

const home = () => {
    return (
        <>
            <div className="flex flex-1 items-center justify-center gap-5 m-5">
                <h1>This is the home page</h1>
                <Link
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    href="/about">About</Link>
            </div>
            <div className="container">
                <h1 className='font-bold text-2xl p-3'>New Posts</h1>
                <div className="grid grid-cols-3 gap-4">
                    <Card title="Post 1" content="This is the content for post 1" />
                    <Card title="Post 2" content="This is the content for post 2" />
                    <Card title="Post 3" content="This is the content for post 3" />
                </div>
            </div>
        </>

    )
}

export default home