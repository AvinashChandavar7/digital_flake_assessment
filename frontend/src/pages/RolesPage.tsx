import React from 'react'
import Searchbar from '../components/shared/Searchbar'
import { Button } from '../components/shared/Button'
import { Link } from 'react-router-dom'
import IconWithLabel from '../components/shared/IconWithLabel'
import Table, { TableColumn } from '../components/shared/Table'

const RolesPage: React.FC = () => {

  const products = [
    {
      id: 1,
      RoleName: 'Admin',
      Status: 'Active',
    },
    {
      id: 2,
      RoleName: 'SuperAdmin',
      Status: 'Inactive',
    },
  ];

  const columns: TableColumn[] = [
    { label: 'ID', accessor: 'id' },
    { label: 'Role Name', accessor: 'RoleName' },
    { label: 'Status', accessor: 'Status' },
  ];

  return (
    <div >

      <div className='flex items-center justify-between w-full px-4 py-4'>
        <div className='flex gap-10'>
          <IconWithLabel
            src='/assets/roles.svg'
            alt='roles'
            label='Roles'
          />

          <Searchbar
            imgSrc="/assets/search.svg"
            placeholder="search..."
            otherClasses="flex-1"
          />
        </div>



        <Link to={`/create-role`}>
          <Button className='rounded-md' variant="primary">Add new</Button>
        </Link>
        {/* <Link to={`/update-role/123`}>
          <Button className='rounded-md' variant="primary">edit new</Button>
        </Link> */}

      </div>


      <Table data={products} columns={columns} />

    </div>
  )
}

export default RolesPage