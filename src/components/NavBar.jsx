import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi';
const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav);
    };
    return (
        <div className='fixed w-full z-10 bg-slate-900/40'>
            <div className='flex justify-between p-6'>
                <div className='text-3xl text-white italic'>Destination</div>
                <HiMenuAlt3 onClick={handleNav} className='text-white cursor-pointer z-20' size={40} />
            </div>
            <div className={nav ? 'duration-300 ease-in absolute w-full h-screen top-0 left-0': 'duration-300 ease-in absolute left-[-100%] w-full h-screen top-0'}>
                <ul className='flex flex-col items-center text-white bg-black/50 w-full h-screen pt-5'>
                    <li className='font-bold text-3xl p-8'>Home</li>
                    <li className='font-bold text-3xl p-8'>Destinations</li>
                    <li className='font-bold text-3xl p-8'>Reservations</li>
                    <li className='font-bold text-3xl p-8'>Amenities</li>
                    <li className='font-bold text-3xl p-8'>Rooms</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar