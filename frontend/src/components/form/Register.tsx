import React, { ChangeEvent, useState } from 'react'
import Input from '../shared/Input'
import { Button } from '../shared/Button'
import { Link } from 'react-router-dom';

const Register: React.FC = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className='flex  absolute left-28 top-12 rounded-md flex-col bg-white items-center justify-center w-[560px] h-[650px] '>
      <div className='flex flex-col items-center'>
        <img src="/assets/formLogo.svg" alt="logo" className='w-52 ' />
        <h1 className='text-[#868686] font-poppins text-2xl text-center'>Welcome to Digitalflake admin</h1>
      </div>

      <div className='w-full px-10 mt-10'>
        <Input
          id="email-id"
          label="Email-id"
          value={name}
          onChange={handleNameChange}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        <p className='mt-10 text-end'>
          <Link to="/forgetPassword" >Forgot Password?</Link>
        </p>

        <Link to="/" >
          <Button variant='loginBtn'>
            Log In
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Register


/**     */