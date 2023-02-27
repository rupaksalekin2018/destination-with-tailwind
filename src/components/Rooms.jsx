import React from 'react'

const Rooms = () => {
    return (
        <div className='max-w-[1400px] m-auto h-[500px] bg-blue-100 rounded grid sm:grid-cols-2 lg:mb-[20%] md:mb-[35%] my-20'>
            <div className='flex flex-col sm:mt-[20%] p-5 h-full'>
                <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
                <p className=''>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
                    rerum iusto excepturi similique minus?
                </p>
            </div>
            <div className='grid grid-cols-2 grid-rows-2 mt-[30px]'>
                <img
                    className='w-full h-full p-2 object-cover'
                    src='https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                    alt='/'
                />
                <img
                    className='w-full h-full row-span-2 p-2 object-cover'
                    src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                    alt='/'
                />
                <img
                    className='w-full h-full p-2 object-cover'
                    src='https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                    alt='/'
                />
            </div>
        </div>
    )
}

export default Rooms