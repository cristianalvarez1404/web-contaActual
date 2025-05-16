import React from 'react'

export const Navbar = () => {
  return (
    <div className='border-b-2 border-b-gray-200  ' >
        <div className='flex items-center justify-between'>
            <div className='flex items-center ml-2'>
                <a href="/" className=''>
                    <img src="./icon.png" alt="" className='w-[50px] y-[50px] '/>
                </a>
                <span className='ml-2 text-sm text-gray-400'>ContActual-<small>co</small></span>
            </div>
            <div className='mr-10'>
                <a href="/" className='mr-5'>Liquidadores</a>
                <a href="" className='cursor-pointer'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </a>
            </div>
        </div>
    </div>
  )
}
