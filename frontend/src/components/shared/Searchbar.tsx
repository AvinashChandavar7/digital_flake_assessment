import { useState } from "react";

interface CustomInputProps {

  imgSrc: string;
  placeholder: string;
  otherClasses?: string
}

const Searchbar = (
  { imgSrc, placeholder, otherClasses }: CustomInputProps
) => {



  const [search, setSearch] = useState('');


  return (
    <div className='relative w-full md:w-[334px] lg:w-[534px]'>
      <div className={` 
      flex min-h-[43px] grow items-center gap-4 rounded-xl px-4 border 
      ${otherClasses}`}
      >


        <img src={imgSrc} alt='search icons' width={24} height={24}
          className='cursor-pointer' loading='lazy'
        />


        <input
          type='search'
          placeholder={placeholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full bg-transparent border-none shadow-none outline-none paragraph-regular no-focus placeholder text-dark400_light700'
        />

      </div>
    </div>
  )
}

export default Searchbar