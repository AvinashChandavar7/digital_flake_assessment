import React from 'react';
import Register from '../../components/form/Register';

const RegisterPage: React.FC = () => {
  return (
    <div className='relative z-0 w-full h-screen bg-purple-55'>
      <img
        src="/assets/background.svg"
        alt="background"
        className='absolute top-0 left-0 w-full h-[90%] -z-20 '
      />
      <img
        src="/assets/rectangle.svg"
        alt="rectangle"
        className='absolute top-0 left-0 z-0 w-full h-full'
      />
      <div className='relative z-10 flex items-center justify-center w-full h-full'>
        <Register />
      </div>
    </div>
  );
};

export default RegisterPage;
