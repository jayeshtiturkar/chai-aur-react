import React, { useState, useEffect } from 'react'
import blogPostService from '../../appWrite/blog.app'
import { Container, PostCard } from '../componants'
const AllPost = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        blogPostService.getAllPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
                console.log(posts);
            }
        })
    }, []);
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost