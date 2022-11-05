import React from 'react'

const Button = ({ title, onClick }) => {
  return (
    <button
      type="submit"
      className="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button