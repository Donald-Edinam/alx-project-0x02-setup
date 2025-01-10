import React from 'react'
import { type PostProps } from '@/interfaces'

const PostCard: React.FC<PostProps> = ({
    title,
    content,
    userId
}) => {

  return (
    <>
        <div className="flex flex-col text-dark bg-gray-500 rounded-lg shadow-lg p-6">
            <h1>{title}</h1>
            <p>{content}</p>
            <span>By user: {userId}</span>
        </div>
    </>
  )
}

export default PostCard