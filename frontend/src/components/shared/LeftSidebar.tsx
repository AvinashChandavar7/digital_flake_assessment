import React from 'react'
import { sidebarLinks } from '../../constants';
import { useLocation, Link } from 'react-router-dom';

const LeftSidebar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <section className='bg-[#F4F4F4]
     custom-scrollbar sticky left-0 top-0 flex h-screen flex-col
    justify-between overflow-y-auto border-r py-2 px-1
    shadow-light-300 max-sm:hidden lg:w-[280px] dark:shadow-none
    '>

      <div className='flex flex-1 flex-col gap-3'>
        {
          sidebarLinks.map((item) => {

            const isActive = (
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route
            );

            return (
              <Link to={item.route} key={item.route} title={item.title}
                className={
                  `${isActive ? 'bg-[#F4EDAF]' : ''
                  } flex items-center justify-between gap-4 bg-transparent p-4`
                }>

                <div className='flex gap-4'>
                  <img src={item.imgUrl} alt={item.label} width={20} height={20} loading="lazy" />
                  <p className={`${isActive ? 'font-bold' : 'base-medium'} max-lg:hidden`}>
                    {item.label}
                  </p>
                </div>

                <div className=''>
                  <img
                    src={isActive ? item.activeUrl : item.notActiveUrl}
                    alt={item.label}
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                </div>
              </Link>
            )
          })
        }
      </div>






    </section>
  )
}

export default LeftSidebar