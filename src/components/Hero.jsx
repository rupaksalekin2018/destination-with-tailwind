import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-screen relative'>
            <img
                className='w-full h-screen top-0 left-0 object-cover'
                src='https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg'
                alt='/'
            />
            <div className='absolute top-[40%] lg:left-[25%] duration-300 ease-in left-5 mr-5 sm:mr-0  text-white bg-slate-200/30 rounded drop-shadow-lg p-5'>
                <p className='text-2xl drop-shadow-lg'>All Inclusive</p>
                <p className='text-5xl drop-shadow-lg'>Private Beaches & Getaways</p>
                <p className='mt-3 drop-shadow-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
                    est, <br></br>id consequuntur sequi ipsum vitae sit non exercitationem.
                </p>
                <button className='text-black bg-white mt-3 drop-shadow-lg'>Reserve Now</button>
            </div>
        </div>
    )
}

export default Hero