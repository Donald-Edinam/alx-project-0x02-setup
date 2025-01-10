import Header from '@/components/layout/Header'
import React, { use, useEffect } from 'react'
import { type PostProps } from '@/interfaces'
import PostCard from '@/components/common/PostCard';
import { GetStaticProps } from 'next';

interface PostProp {
    posts: PostProps[]
}

const posts = ({ posts }: PostProp) => {
    return (
        <>
            <Header />
            <h1>Recent Posts</h1>
            <div className="grid grid-cols-3 gap-3">
                {posts.map((post: PostProps) => (
                    <PostCard key={post.userId} {...post} />
                ))}
            </div>
        </>
    )
}

export default posts

export const getStaticProps: GetStaticProps = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();

        return {
            props: {
                posts
            },

            revalidate: 60
        }
    } catch (error) {
        console.log(error);
        return {
            props: {
                posts: []
            }
        }
    }

}