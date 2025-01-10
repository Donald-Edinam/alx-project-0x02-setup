import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'
import Header from '@/components/layout/Header'
import Link from 'next/link'
import React, { useState } from 'react'

const home = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [posts, setPosts] = useState<any[]>([]);
    
    const handleOpenModal = () => {
        setIsModalVisible(true);
    }

    const handleCloseModal = () => {
        setIsModalVisible(false);
    }

    const handleAddPost = (post: any) => {
        console.log(post);
        setPosts([...posts, post]);
    }   

    return (
        <>
        <Header />
            <div className="flex flex-1 items-center justify-center gap-5 m-5">
                <h1>This is the home page</h1>
                <Link
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    href="/about">About</Link>
            </div>
            <div className="container m-5">   
                <button 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={handleOpenModal}>Create New Post</button>
                <PostModal
                    visible={isModalVisible}
                    onClose={handleCloseModal}
                    onSubmit={handleAddPost}

                />
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