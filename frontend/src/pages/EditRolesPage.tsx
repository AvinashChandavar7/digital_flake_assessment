import React, { useState, ChangeEvent } from 'react';
import IconWithLabel from '../components/shared/IconWithLabel'
import Input from '../components/shared/Input'
import { Button } from '../components/shared/Button'
import Select from '../components/shared/Select';

const options = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
];

const EditRolesPage: React.FC = () => {
  const [name, setName] = useState<string>('');

  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div className='flex flex-col h-full '>
      <div className='flex flex-col px-4 py-4'>
        <IconWithLabel
          src='/assets/back.svg'
          alt='roles'
          label='Edit Roles'
        />

        <div className='flex gap-4'>

          <Input
            id="role name"
            label="Role Name"
            value={name}
            onChange={handleNameChange}
          />

          <Select
            id="status"
            label="Status"
            value={selectedOption}
            options={options}
            onChange={handleSelectChange}
          />

        </div>


      </div>

      <div className='flex items-end justify-end w-full h-full gap-4 px-10 py-10'>
        <Button className='rounded-full ' variant="secondary">Cancel</Button>
        <Button className='rounded-full ' variant="primary">Save</Button>
      </div>
    </div>
  )
}

export default EditRolesPage