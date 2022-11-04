import React, { useState } from 'react'

// React Router Dom
import { useNavigate } from "react-router-dom";

// React Hook Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const RegisterSchema = yup.object().shape({
  Name: yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  Email: yup.string().email('Invalid email').required('Required'),
  Password: yup.string().required('Password is Too Short!').min(6),
  ConfirmPassword: yup.string().required('Confirm Password is Too Short!').min(6),
});

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(RegisterSchema)
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    e.preventDefault();
    navigate('/auth/login');
  };

  return (
    <div className=" w-screen h-screen items-center justify-center py-12 px-4">

      <div className='m-4'>
        <h2 className="text-center text-3xl font-bold tracking-tight text-black">
          Create an Account
        </h2>
      </div>

      <form action="#" method="POST" className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="remember" defaultValue="true" />

        <div className='text-center'>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="name"
            autoComplete="name"
            required
            className='w-1/3 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500'
            placeholder="Name"
            {...register("name")}
          />
          {errors.Name && <p className='text-red-600'>{errors.Name.message}</p>}
        </div>

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
              {...register("email")}
            />
            {errors.email && <p className='text-red-600'>{errors.Email.message}</p>}
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
              {...register("password")}
            />
            {errors.Password && <p className='text-red-600'>{errors.Password.message}</p>}
          </div>
        </div>

        <div className='text-center'>
          <div>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="confirm-password"
              required
              className='w-1/3 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500'
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            {errors.ConfirmPassword && <p className='text-red-600'>{errors.ConfirmPassword.message}</p>}
          </div>
        </div>

        <div className='text-center'>
          <button type="submit" className="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
            Register
          </button>
        </div>

        <div className='text-center font-medium text-sm'>
          <a href="/auth/login">
            Have an Account? Login
          </a>
        </div>

      </form>
    </div>
  )
}

export default Register