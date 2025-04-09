import React, { useState } from 'react'
import { Button, Input, Logo } from "./index"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import authService from "../../appWrite/auth.app"
import { login } from "../redux/auth"

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { handleSubmit, register } = useForm()
    const [error, setError] = useState()

    const createUser = async (data) => {
        setError("")
        try {
            const newAccount = await authService.createAccount(data)
            if (newAccount) {
                const userData = await authService.getAccount()
                if (userData) dispatch(login(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }



    }
    return (
        <div className='flex items-center justify-center w-full'>
            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>Login Form</h2>
                <p className='mt-2 text-center text-base text-black/60'> Already Have account ?
                    <Link to={"/login"} className='font-medium text-primary transition-all duration-200 hover:underline'>Log In</Link>
                </p>
                {
                    error && <p className='text-red-600 mt-8 text-center'>{error}</p>
                }
                <form onSubmit={handleSubmit(createUser)}>
                    <div className='space-y-5'>
                        <Input
                            lable="Full Name"
                            type="name"
                            placeholder="Enter You Name"
                            {...register("name", { required: true })}
                        />
                        <Input
                            lable="Email"
                            type="email"
                            className=""
                            placeholder="Enter your Email"
                            {...register("email", {
                                requied: true,
                                validate: {
                                    matchPatern: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
                                        || "Email address must be a valid address"
                                }
                            })} />
                        <Input
                            lable="Password"
                            type="password"
                            placeholder="Enter your Password"
                            {...register("password", { requied: true })} />
                        <Button type='submit' classname='w-full'>Create Account</Button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SignUp