import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='h-14 flex flex-row justify-between items-center px-8 font-base text-lg bg-transparent'>
            <logo>LOGO</logo>
            <div className='flex justify-around w-3/4 text-sm lg:w-1/2 md:text-lg '>
                <ul className='w-3/4 flex flex-cols justify-evenly items-center bg-black rounded-xl text-white'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/services'}>Services</Link></li>
                    <li><Link to={'/contacts'}>Contacts</Link></li>
                </ul>
                <div className='bg-red-500 px-4 py-1 text-white rounded-3xl'><Link to={'/projects'}>Projects</Link></div>
            </div>
        </div>
    )
}

export default Navbar