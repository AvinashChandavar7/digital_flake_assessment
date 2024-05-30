import React from 'react'
import IconWithLabel from '../components/shared/IconWithLabel'
import Searchbar from '../components/shared/Searchbar'
import { Link } from 'react-router-dom'
import { Button } from '../components/shared/Button'
import Table, { TableColumn } from '../components/shared/Table'

const UsersPage: React.FC = () => {


  const products = [
    {
      id: 123,
      Name: "Ramesh",
      Mobile: "8756453402",
      Email: "Ramesh@gmail.com",
      Role: 'Admin',
      Status: 'Active',
    },
    {
      id: 124,
      Name: "Geeta",
      Mobile: "9987654323",
      Email: "Geeta@gmail.com",
      Role: 'SuperAdmin',
      Status: 'Inactive',
    },
    {
      id: 125,
      Name: "Arun",
      Mobile: "8865758485",
      Email: "Arun@gmail.com",
      Role: 'Caller',
      Status: 'Inactive',
    },
    {
      id: 126,
      Name: "Soham",
      Mobile: "9734564565",
      Email: "Soham@gmail.com",
      Role: 'Account',
      Status: 'Inactive',
    },
  ];

  const columns: TableColumn[] = [
    { label: 'ID', accessor: 'id' },
    { label: 'Name', accessor: 'Name' },
    { label: 'Mobile', accessor: 'Mobile' },
    { label: 'Email-Id', accessor: 'Email' },
    { label: 'Role', accessor: 'Role' },
    { label: 'Status', accessor: 'Status' },
  ];

  return (
    <div>
      <div className='flex items-center justify-between w-full px-4 py-4'>
        <div className='flex gap-10'>
          <IconWithLabel
            src='/assets/user.svg'
            alt='user'
            label='User'
          />

          <Searchbar
            imgSrc="/assets/search.svg"
            placeholder="search..."
            otherClasses="flex-1"
          />
        </div>



        <Link to={`/create-user`}>
          <Button className='rounded-md' variant="primary">Add new</Button>

        </Link>
        {/* <Link to={`/update-user/123`}>
          <Button className='rounded-md' variant="primary">edit new</Button>
        </Link> */}

      </div>


      <Table data={products} columns={columns} />


    </div>
  )
}

export default UsersPage