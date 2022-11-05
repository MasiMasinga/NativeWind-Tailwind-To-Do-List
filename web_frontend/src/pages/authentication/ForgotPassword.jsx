import React from 'react'

// React Hook Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components
import Button from '../../common/components/Button';

const ForgotPasswordSchema = yup.object().shape({
  Email: yup.string().email('Invalid email').required('Required'),
});

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(ForgotPasswordSchema)
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="bg-white w-screen h-screen items-center justify-center py-12 px-4">

      <div className='m-4'>
        <h2 className="text-center text-3xl font-bold tracking-tight text-black">
          Let's help you Recover It
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
          <Button title='Recover Password' />
        </div>

        <div className='text-center font-medium text-sm'>
          <a href="/auth/login">
            Remember Your Password? Login
          </a>
        </div>

      </form>
    </div>
  )
}

export default ForgotPassword