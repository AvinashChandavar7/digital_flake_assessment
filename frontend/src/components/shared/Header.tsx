import React from 'react'
import logo from "../../../public/assets/logo.svg";
import profile from "../../../public/assets/profile.svg";

const Header: React.FC = () => {
  return (
    <nav className='fixed top-0 z-50 flex items-center justify-between w-full bg-purple-650'>
      <img src={logo} alt="logo" className='p-5 w-60 h-w-60 md:w-80 md:h-w-80 ' />
      <img src={profile} alt="profile" className='p-5 ' />
    </nav>
  )
}

export default Header