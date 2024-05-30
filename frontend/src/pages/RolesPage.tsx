import React from 'react'
import Searchbar from '../components/shared/Searchbar'
import { Button } from '../components/shared/Button'
import { Link } from 'react-router-dom'
import IconWithLabel from '../components/shared/IconWithLabel'

const RolesPage: React.FC = () => {
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

    </div>
  )
}

export default RolesPage