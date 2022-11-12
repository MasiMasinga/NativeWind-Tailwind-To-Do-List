import React from 'react'

// React Hero Icons
import { HiUserCircle } from "react-icons/hi2";

const AppHeader = ({
  onClick,
}) => {
  return (
    <div className="flex justify-end w-screen h-15">
      <button onClick={onClick} className="p-3 bg-white rounded-none">
        <HiUserCircle className="h-6 w-6 text-black" />
      </button>
    </div>
  )
}

export default AppHeader