import React from 'react'

// React Router Dom
import { useNavigate } from "react-router-dom";

// React Hook Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components
import Button from '../../common/components/Button';

const RegisterSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required(),
}).required();

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(RegisterSchema)
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
          Create an Account
        </h2>
      </div>

      <form action="#" method="POST" className='space-y-6' onSubmit={handleSubmit(onSubmit)}>

        <div className='text-center'>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="name"
            autoComplete="on"
            required
            className='bg-white w-1/3 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500'
            placeholder="Name"
            {...register("name")}
          />
          {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
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
              autoComplete="on"
              required
              className='bg-white w-1/3 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500'
              placeholder="Email Address"
              {...register("email")}
            />
            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
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
              autoComplete="on"
              required
              className='bg-white w-1/3 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500'
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
          </div>
        </div>

        <div className='text-center'>
          <div>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="on"
              required
              className='bg-white w-1/3 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500'
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && <p className='text-red-600'>{errors.confirmPassword.message}</p>}
          </div>
        </div>

        <div className='text-center'>
          <Button title="Register" />
        </div>

        <input type="submit" />

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