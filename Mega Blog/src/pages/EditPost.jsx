import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../componants'
import blogPostService from '../../appWrite/blog.app'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const [post, setPost] = useState()
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            blogPostService.getPost(slug).then((post) =>{
                if (post) {
                    setPost(post)
                }
            })
        } else{
            navigate("/")
        }
    }, [slug,navigate]);

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ) :null

}
export default EditPost