import React from 'react'

// React Router Dom
import { useNavigate } from "react-router-dom";

// React Hook Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components
import Button from '../../common/components/Button';

const LoginSchema = yup.object().shape({
  Email: yup.string().email('Invalid email').required('Required'),
  Password: yup.string().required('Password is Too Short!').min(6),
});

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(LoginSchema)
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    navigate('/tasks');
  };

  return (
    <div className="bg-white w-screen h-screen items-center justify-center py-12 px-4">

      <div className='m-4'>
        <h2 className="text-center text-3xl font-bold tracking-tight text-black">
          Login to your account
        </h2>
      </div>

      <form action="#" method="POST" className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
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
              className='bg-white w-1/3 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500'
              placeholder="Email Address"
              {...register("email")}
            />
            {errors.Email && <p className='text-red-600'>{errors.Email.message}</p>}
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
              className='bg-white w-1/3 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500'
              placeholder="Password"
              {...register("password")}
            />
            {errors.Password && <p className='text-red-600'>{errors.Password.message}</p>}
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
          <Button title='Login' />
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