import React from 'react'
import ForgetPassword from '../../components/form/ForgetPassword'

const ForgetPasswordPage: React.FC = () => {
  return (
    <div className='relative z-0 w-full h-screen bg-purple-55'>
      <div className='relative z-10 flex items-center justify-center w-full h-full'>
        <ForgetPassword />
      </div>
    </div>
  )
}

export default ForgetPasswordPage