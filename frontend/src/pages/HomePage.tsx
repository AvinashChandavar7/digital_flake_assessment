import React from 'react'
import homepage from "../../public/assets/homepage.svg";


const HomePage: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>


      <img src={homepage} alt="home" className='' />
      <h1>Welcome to Digitalflake admin</h1>
    </div>
  )
}

export default HomePage;