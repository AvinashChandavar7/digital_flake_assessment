import React from 'react'
import { sidebarLinks } from '../../constants';
import { useLocation, Link } from 'react-router-dom';

const LeftSidebar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <section className='bg-[#F4F4F4]
    sticky left-0 top-20 flex h-screen  flex-col
    justify-between overflow-y-auto border-r-2  py-24 px-1
    max-sm:hidden lg:w-[280px] 
    '>

      <div className='flex flex-col flex-1 gap-3'>
        {
          sidebarLinks.map((item) => {

            const isActive = (
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route
            );

            return (
              <Link to={item.route} key={item.route} title={item.title}
                className={
                  `${isActive ? 'bg-gold-300' : 'bg-transparent'
                  } flex items-center justify-center md:justify-between  gap-4 bg-transparent p-4`
                }>

                <div className='flex gap-4'>
                  <img src={item.imgUrl} alt={item.label} width={20} height={20} loading="lazy" />
                  <p className={`${isActive ? 'font-bold' : 'font-normal'}  max-lg:hidden`}>
                    {item.label}
                  </p>
                </div>

                <div className='max-lg:hidden' >
                  <img
                    src={isActive ? item.activeUrl : item.notActiveUrl}
                    alt={item.label}
                    width={20}
                    height={20}
                    loading="eager"
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