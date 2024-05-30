import React, { useState, ChangeEvent } from 'react';
import IconWithLabel from '../components/shared/IconWithLabel'
import Input from '../components/shared/Input'
import { Button } from '../components/shared/Button'
import Select from '../components/shared/Select';
import FileUpload from '../components/shared/FileUpload';

const statusOptions = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
];

const rolesOptions = [
  { label: 'Admin', value: 'admin' },
  { label: 'SuperAdmin', value: 'superadmin' },
  { label: 'Caller', value: 'caller' },
  { label: 'Account', value: 'account' },
];

const EditUserPage: React.FC = () => {
  const [name, setName] = useState<string>('');

  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div>
      <div className='flex flex-col h-full '>
        <div className='flex flex-col px-4 py-4'>
          <IconWithLabel
            src='/assets/back.svg'
            alt='roles'
            label='Add Roles'
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Input
              id="name"
              label="Name"
              value={name}
              onChange={handleNameChange}
            />
            <Input
              id="moblie"
              label="Moblie"
              value={name}
              onChange={handleNameChange}
            />
            <Input
              id="email-id"
              label="Email-Id"
              value={name}
              onChange={handleNameChange}
            />

            <Select
              id="role"
              label="Role"
              value={selectedOption}
              options={rolesOptions}
              onChange={handleSelectChange}
            />

            <FileUpload />

            <Select
              id="status"
              label="Status"
              value={selectedOption}
              options={statusOptions}
              onChange={handleSelectChange}
            />
          </div>

        </div>

        <div className='flex items-end justify-end w-full h-full gap-4 px-10 py-10'>
          <Button className='rounded-full ' variant="secondary">Cancel</Button>
          <Button className='rounded-full ' variant="primary">Save</Button>
        </div>
      </div>
    </div>
  )
}

export default EditUserPage