import React from 'react';
import { Button } from './Button';

interface ModelProps {
  title: string;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const Model: React.FC<ModelProps> = ({ title = "Delete", isModalOpen, setIsModalOpen }) => {
  const handleDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 font-poppins">
          <div className="p-8 bg-white rounded shadow-lg">

            <div className='flex items-center justify-center gap-4'>
              <img src="/assets/danger.svg" alt="" />
              <h1 className='text-2xl font-bold text-center'>{title}</h1>
            </div>

            <h2 className="mb-8 text-lg  text-[#8F8F8F]">Are you sure you want to delete?</h2>
            <div className="flex items-center justify-between gap-5">
              <Button
                onClick={() => setIsModalOpen(false)}
                variant="secondary"
                className="rounded-full"
              >
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                variant="primary"
                className="rounded-full"
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Model;

