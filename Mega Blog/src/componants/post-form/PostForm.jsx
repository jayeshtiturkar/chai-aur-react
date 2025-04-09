import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import blogPostService from '../../../appWrite/blog.app'
import { Button, Input, RTE, Select } from "../index";

const PostForm = ({ post }) => {
    console.log(post);
    const { handleSubmit, control, watch, setValue, register,getValues } = useForm({
        defaultValues: {
        title: post?.title || '',
        discrption: post?.discrption || '',
        status: post?.status || 'active',
        slug: post?.slug || ""
        }
    })
    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.useData)   // Might Need Update Here.............

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await blogPostService.uploadFile(data.image[0]) : null
            if (file) {
                blogPostService.deleteFile(post.coverImage)
            }
            const uploadData = await blogPostService.updatePost(post.$id, {
                ...data,
                coverImage: file ? file.$id : undefined
            })
            if (uploadData) {
                navigate(`/post/${uploadData.$id}`)
            }
        } else {
            const file = data.image[0] ? await blogPostService.uploadFile(data.image[0]) : null
            if (file) {
                const uploadData = await blogPostService.createPost({
                    ...data,
                    coverImage: file.$id,
                    useId: userData.$id
                })

                if (uploadData) {
                    navigate(`/post/${uploadData.$id}`)
                }
            }

        }

    }

    const generateSlug = useCallback((value) => {
        if (value && typeof value === 'string')
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]/g, '-')
                .replace(/\s/g, '-')

        return ''
    }, [])

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue('slug', generateSlug(value.title, { shouldValidate: true }))
            }
        })
        return () => subscription.unsubscribe(); // cleanup

    }, [generateSlug, watch, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Discrption :" name="discrption" control={control} defaultValue={getValues("discrption")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={blogPostService.filePreview(post.coverImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm