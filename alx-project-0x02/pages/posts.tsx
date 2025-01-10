import Header from '@/components/layout/Header'
import React, { use, useEffect } from 'react'
import { type PostProps } from '@/interfaces'
import PostCard from '@/components/common/PostCard';

const posts = () => {

    const [posts, setPosts] = React.useState<PostProps[]>([]);

    const fetchPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
        return data;

    }
    useEffect(() => {
      fetchPosts().then(data => setPosts(data));
    }
    , []);

    

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