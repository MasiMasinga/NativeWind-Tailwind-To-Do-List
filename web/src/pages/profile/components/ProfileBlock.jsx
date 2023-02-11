import React from 'react'

const ProfileBlock = ({
    icon,
    title,
}) => {
    return (
        <div className="m-10 justify-center flex">
            <div className="flex m-2">
                {icon}
            </div>
            <div className="self-center">
                <h5 className="text-black font-medium">
                    {title}
                </h5>
            </div>
        </div>
    )
}

export default ProfileBlock