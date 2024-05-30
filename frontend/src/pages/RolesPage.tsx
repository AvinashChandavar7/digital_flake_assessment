import React from 'react'
import Searchbar from '../components/shared/Searchbar'
import { Button } from '../components/shared/Button'

const RolesPage: React.FC = () => {
  return (
    <div >

      <div className='flex items-center justify-between w-full px-4 py-4'>
        <div className='flex gap-8'>
          <div className='flex flex-row items-center gap-2'>

            <img src='/assets/roles.svg' alt="roles" width={30} height={30} loading="lazy" />
            <p className={`font-bold text-2xl`}>
              Roles
            </p>
          </div>

          <Searchbar
            imgSrc="/assets/search.svg"
            placeholder="search..."
            otherClasses="flex-1"
          />
        </div>


        <div className=''>
          <Button variant="primary">Add new</Button>
        </div>
      </div>

    </div>
  )
}

export default RolesPage