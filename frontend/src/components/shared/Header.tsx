import React, { useState } from 'react';
import logo from "../../../public/assets/logo.svg";
import profile from "../../../public/assets/profile.svg";
import Model from './Modal';
import { Link } from 'react-router-dom';
import { Button } from './Button';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className='fixed top-0 z-50 flex items-center justify-between w-full bg-purple-650'>
      <img src={logo} alt="logo" className='p-5 w-60 h-w-60 md:w-80 md:h-w-80 ' />

      <div className='flex items-center'>
        <img src={profile} alt="profile" className='p-5 ' onClick={handleToggleModal} />
        <Link to="/register" >
          <Button variant='secondary' className='mr-5 rounded-md '>
            Log In
          </Button>
        </Link>
      </div>

      <Model title='Log Out' isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </nav>
  )
}

export default Header;
