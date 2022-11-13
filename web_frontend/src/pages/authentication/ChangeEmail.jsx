import React from 'react'

// React Router Dom
import { useNavigate } from "react-router-dom";

// React Hook Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// React Hero Icons
import { HiArrowLeft } from "react-icons/hi2";

// Components
import Button from '../../common/components/Button'

const ChangeEmailSchema = yup.object({
  email: yup.string().email().required(),
  newEmail: yup.string().email().required(),
}).required();

const ChangeEmail = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(ChangeEmailSchema)
  });
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/tasks');
  }

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    navigate('/tasks');
  };

  return (
    <div className="bg-white h-screen w-screen">

      <div className="flex justify-start w-screen h-15">
        <button onClick={handleGoBack} className="p-3 bg-white rounded-none">
          <HiArrowLeft className="h-6 w-6 text-black" />
        </button>
      </div>

      <h5 className='text-black font-bold text-2xl m-5 text-center p-5'>
        Change Email
      </h5>

      <form action="#" method="POST" className='space-y-6' onSubmit={handleSubmit(onSubmit)}>

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
              placeholder="Current Email Address"
              {...register("email")}
            />
            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
          </div>
        </div>

        <div className='text-center'>
          <div>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="off"
              required
              className='bg-white w-1/3 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500'
              placeholder="New Email Address"
              {...register("newEmail")}
            />
            {errors.newEmail && <p className='text-red-600'>{errors.newEmail.message}</p>}
          </div>
        </div>

        <div className='text-center'>
          <Button title="Change Email" />
        </div>

        <input type="submit" />

      </form>

    </div>
  )
}

export default ChangeEmail