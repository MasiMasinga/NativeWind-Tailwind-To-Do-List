import React, { useState } from 'react'

// React Router Dom
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    navigate('/tasks');
  }

  return (
    <div className=" w-screen h-screen items-center justify-center py-12 px-4">

      <div className='m-4'>
        <h2 className="text-center text-3xl font-bold tracking-tight text-black">
          Login to your account
        </h2>
      </div>

      <form action="#" method="POST" className='space-y-6' onSubmit={(e) => handleSubmit(e)}>
        <input type="hidden" name="remember" defaultValue="true" />

        <div className='text-center'>
          <label htmlFor="email-address" className="sr-only">
            Email Address
          </label>
          <div>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className='w-1/3 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500'
              placeholder="Email Address"
            />
          </div>
        </div>

        <div className='text-center'>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className='w-1/3 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500'
              placeholder="Password"
            />
          </div>
        </div>

        <div className='text-center'>
          <div className="">
            <a href="/auth/forgot-password" className="font-medium  hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div className='text-center'>
          <button type="submit" className="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
            Login
          </button>
        </div>

        <div className='text-center font-medium text-sm'>
          <a href="/">
            Don't Have an Account? Register
          </a>
        </div>

      </form>
    </div>
  )
}

export default Login