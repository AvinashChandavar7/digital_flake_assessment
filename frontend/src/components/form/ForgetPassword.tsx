import React, { ChangeEvent, useState } from 'react'
import { Button } from '../shared/Button'
import Input from '../shared/Input'
import { Link } from 'react-router-dom';

const ForgetPassword: React.FC = () => {

  const [name, setName] = useState("");


  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className='flex flex-col items-center justify-center p-5 bg-white rounded-md w-[503px] h-[503px]'>
      <div className='flex flex-col items-center'>
        <h1 className='text-[#5C218B] font-poppins text-lg text-center'>Did you forget password?</h1>
        <h1 className='text-[#868686] font-poppins text-md text-center mt-5 '>Enter your email address and we’ll send you a link to restore password</h1>
      </div>

      <div className='w-full px-10 mt-10'>
        <Input
          id="email-address"
          label="Email Address"
          value={name}
          onChange={handleNameChange}
        />


        <Button variant='loginBtn' className='bg-[#5C218B]'>
          Request reset link
        </Button>



        <p className='mt-5 text-[#868686] text-center underline underline-offset-2'>
          <Link to="/register" > Back to log in</Link>
        </p>

      </div>
    </div>
  )
}

export default ForgetPassword