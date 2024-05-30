import React from 'react'
import IconWithLabel from '../components/shared/IconWithLabel'
import Searchbar from '../components/shared/Searchbar'
import { Link } from 'react-router-dom'
import { Button } from '../components/shared/Button'

const UsersPage: React.FC = () => {
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
    </div>
  )
}

export default UsersPage