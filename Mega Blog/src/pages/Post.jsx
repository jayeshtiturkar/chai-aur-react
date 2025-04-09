import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import blogPostService from "../../appWrite/blog.app";
import { Button, Container } from "../componants/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.useData);

    const isAuthor = post && userData ? post.useId === userData.$id : false;
    console.log(post);

    useEffect(() => {
        if (slug) {
            blogPostService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        blogPostService.deletePost(post.$id).then((status) => {
            if (status) {
                blogPostService.deleteFile(post.coverImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={blogPostService.filePreview(post.coverImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.discrption)}
                    </div>
            </Container>
        </div>
    ) : null;
}