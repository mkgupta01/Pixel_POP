import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-14 flex flex-row justify-between items-center px-8 border border-black-500 font-base text-lg'>
        <logo>LOGO</logo>
        <ul className='w-1/2 flex flex-cols justify-evenly items-center'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link to={'/contacts'}>Contacts</Link></li>
            <div className='bg-red-500 px-4 py-1 text-white rounded-3xl'><Link to={'/projects'}>Projects</Link></div>
        </ul>
    </div>
  )
}

export default Navbar