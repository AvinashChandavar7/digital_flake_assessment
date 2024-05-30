

import React, { useState } from 'react';
import { ChangeEvent } from 'react';

interface Option {
  label: string;
  value: string;
}

interface Props {
  id: string;
  label: string;
  value: string;
  options: Option[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<Props> = ({ id, label, value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (optionValue: string) => {
    onChange({ target: { value: optionValue } } as ChangeEvent<HTMLSelectElement>);
    setIsOpen(false);
  };

  return (
    <div className="relative mt-5 border rounded-md max-w-[500px] w-full font-poppins">
      <div
        tabIndex={0}
        className={`relative block px-10 pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent rounded-full border-1 border-gray-300 cursor-pointer appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className='capitalize'>

          {value || <p className='text-gray-400 lowercase'>select the options</p>}
        </p>

      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 overflow-auto text-base transition duration-100 ease-in bg-white border border-gray-300 rounded-md shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {options.map((option, index) => (
            <li
              key={index}
              className={`relative py-2 pl-3 text-gray-900 cursor-pointer select-none group pr-9 popover-item hover:text-white hover:bg-purple-650
              ${value === option.value ? 'bg-gray-200 text-black' : ''}
              `}
              onClick={() => handleOptionClick(option.value)}

            >
              {option.label}
              {value === option.value ? (<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>) :
                ''}

            </li>
          ))}
        </ul>
      )}
      <label
        htmlFor={id}
        className={`absolute text-sm text-gray-500 duration-300 font-poppins text-start
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

export default Select;


// import React, { ChangeEvent } from 'react';

// interface Option {
//   label: string;
//   value: string;
// }

// interface Props {
//   id: string;
//   label: string;
//   value: string;
//   options: Option[];
//   onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
// }

// const Select: React.FC<Props> = ({ id, label, value, options, onChange }) => {
//   return (
//     <div className="relative mt-5 border rounded-md max-w-[500px] w-full">
//       <select
//         id={id}
//         className={`block px-10 pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent rounded-full border-1 border-gray-300
//         appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
//         value={value}
//         onChange={onChange}
//       >
//         {options.map((option, index) => (
//           <option key={index} value={option.value}
//             className="py-5 text-blue-600 hover:bg-blue-600"
//           >
//             {option.label}
//           </option>
//         ))}
//       </select>
//       <label
//         htmlFor={id}
//         className={`absolute text-sm text-gray-500 duration-300 font-poppins text-start
//         transform -translate-y-4 scale-100 top-2 z-10 origin-[0] bg-white
//         px-8
//         peer-focus:px-8
//         peer-focus:text-blue-600
//         peer-placeholder-shown:scale-110
//         peer-placeholder-shown:-translate-y-1/2
//         peer-placeholder-shown:top-1/2
//         peer-focus:top-2
//         peer-focus:scale-75
//         peer-focus:-translate-y-4
//         rtl:peer-focus:translate-x-1/4
//         rtl:peer-focus:left-auto
//         start-4`
//         }
//       >
//         {label}
//       </label>
//     </div>
//   );
// };

// export default Select;
