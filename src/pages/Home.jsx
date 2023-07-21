import React from 'react'

import { UserPlusIcon, ComputerDesktopIcon, FaceSmileIcon } from '@heroicons/react/24/solid'


const Home = () => {

  const highlights = [
    {
      'icon': <UserPlusIcon />,
      'title': "20+ happy customer"
    },
    {
      'icon': <ComputerDesktopIcon />,
      'title': "3 Services Offered"
    },
    {
      'icon': <FaceSmileIcon />,
      'title': "Versatile and fast Service"
    }
  ]

  return (
    <>
      <section className="h-108 w-full flex flex-row justify-between items-center px-20">
        <div className='text-white  md:w-2/5'>
          <div className='capitalize tracking-wider md:text-6xl my-8'>Unlocking the power <br /> of Visual Storytelling.</div>
          <div className='capitalize'>Transforming ideas into stunning digital experience</div>
        </div>
        <div>Image</div>
      </section>

      <section className='bg-slate-900 h-36 flex flex-col items-center justify-center'>
        <p className='relative bottom-10 text-white uppercase text-xl'>Build Your Website</p>
        <div className='h-fit w-full flex flex-row justify-evenly items-center'>
          {
            highlights.map((e) => {
              return (
                <div className='text-white h-4 flex flex-col justify-center items-center'>
                  <div className='lg:h-10 lg:w-10'>{e.icon}</div>
                  <span className='capitalize'>{e.title}</span>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Home