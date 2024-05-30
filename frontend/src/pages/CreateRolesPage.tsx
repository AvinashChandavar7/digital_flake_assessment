import React, { useState, ChangeEvent } from 'react';
import IconWithLabel from '../components/shared/IconWithLabel';
import Input from '../components/shared/Input';
import { Button } from '../components/shared/Button';

const CreateRolesPage: React.FC = () => {

  const [name, setName] = useState<string>('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className='flex flex-col h-full '>
      <div className='flex flex-col px-4 py-4'>
        <IconWithLabel
          src='/assets/back.svg'
          alt='roles'
          label='Add Roles'
        />

        <Input
          id="role name"
          label="Role Name"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className='flex items-end justify-end w-full h-full gap-4 px-10 py-10'>
        <Button className='rounded-full ' variant="secondary">Cancel</Button>
        <Button className='rounded-full ' variant="primary">Save</Button>
      </div>
    </div>
  )
}

export default CreateRolesPage;