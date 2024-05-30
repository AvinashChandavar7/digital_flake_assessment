import React, { ChangeEvent, useState } from 'react';

interface Props {
  id: string;
  type?: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ id, type = 'text', label, value, onChange }) => {

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;




  return (
    <div className="relative  mt-5 border rounded-md max-w-[500px] w-full">
      <input
        type={inputType}
        id={id}
        className={`block h-fit px-10 pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent rounded-full border-1 border-gray-300
        appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
        placeholder=" "
        value={value}
        onChange={onChange}
      />
      {type === 'password' && (
        <button
          type="button"
          className="absolute z-20 transform -translate-y-1/2 right-3 top-1/2 focus:outline-none"
          onClick={handleTogglePassword}
        >
          {showPassword ?
            <img src="/assets/openEye.svg" alt="eye" />
            :
            <img src="/assets/closeEye.svg" alt="eye" />
          }
        </button>
      )}
      <label
        htmlFor={id}
        className={`absolute text-sm text-gray-500 duration-300 font-poppins 
        transform -translate-y-4 scale-100 top-2 z-10 origin-[0] bg-white 
        px-8 
        peer-focus:px-8 
        peer-focus:text-blue-600 
        peer-placeholder-shown:scale-110 
        peer-placeholder-shown:-translate-y-1/2 
        peer-placeholder-shown:top-1/2 
        peer-focus:top-2 
        peer-focus:scale-75
        peer-focus:-translate-y-4
        rtl:peer-focus:translate-x-1/4 
        rtl:peer-focus:left-auto
        start-4`
        }
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
