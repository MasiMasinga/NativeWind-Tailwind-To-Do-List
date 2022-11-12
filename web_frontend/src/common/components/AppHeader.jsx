import React, { Fragment } from "react"

// Headless UI
import { Menu, Transition } from '@headlessui/react'

// React Hero Icons
import { HiUserCircle } from "react-icons/hi2";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const AppHeader = ({
  profile,
  changeEmail,
  resetPassword,
  onLogout,
}) => {
  return (
    <Menu as="div">
      <div className="flex justify-end w-screen h-15">
        <Menu.Button className="p-3 bg-white rounded-none">
          <HiUserCircle className="h-6 w-6 text-black" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                onClick={profile}
                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
              >
                Your Profile
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                onClick={changeEmail}
                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
              >
                Change Email
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                onClick={resetPassword}
                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
              >
                Reset Password
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                onClick={onLogout}
                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
              >
                Sign out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default AppHeader