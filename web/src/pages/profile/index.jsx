import React from 'react'

// React Router Dom
import { useNavigate } from "react-router-dom";

// React Hero Icons
import { HiArrowLeft, HiUserCircle, HiOutlineClipboardDocumentCheck, HiOutlineClipboardDocument } from "react-icons/hi2";

// Components
import ProfileBlock from './components/ProfileBlock';

const Profile = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
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
        Profile
      </h5>

      <div className="flex-row text-center">
        <ProfileBlock
          icon={<HiUserCircle className="text-black" />}
          title="Masibonge Masinga"
        />

        <ProfileBlock
          icon={<HiOutlineClipboardDocumentCheck className="text-black" />}
          title="Total Tasks Completed: 10"
        />

        <ProfileBlock
          icon={<HiOutlineClipboardDocument className="text-black" />}
          title="Total Tasks Outstanding: 30"
        />
      </div>
    </div>
  )
}

export default Profile