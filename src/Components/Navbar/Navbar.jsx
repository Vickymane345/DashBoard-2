import React from 'react'
import './Navbar.css'
import { FaArrowDown, FaBell, FaSearch } from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io";
import {IoMenuOutline} from "react-icons/io5";
import image from '../../assets/Burger-removebg-preview.png'
const Navbar = (props) => {
  const {toggleSideBarMenu} = props
  return (
    <div className='grid grid-cols-6 items-center space-x-12 '>

      <div className=' gap-5 col-start-1 items-center md:px-5 sm:px-5 px-5 lg:px-4 py-3 lg:bg-[#eaebfe] flex '>
        <div className=' lg:p-1 py-1 px-3 w-8  text-center rounded-full bg-[blue]'>
          <p className='text-white font-bold'>G</p>
        </div>
        <div>
          <p className='text-xs font-medium text-indigo-500'>GOODFOOD</p>
        </div>
        <div className='md:block absolute right-8 lg:hidden xl:hidden 2xl:hidden bg-indigo-700 text-white p-4 rounded-full'>
            <IoMenuOutline className=' cursor-pointer ' onClick={toggleSideBarMenu}  />

        </div>

      </div>
      <div className='col-start-2 col-end-7 '>
        <ul className='flex justify-between list-none'>
          <li className='lg:flex relative items-center hidden sm:hidden md:flex  xl:flex 2xl:flex'>
            <div ><textarea name="" className='bg-[#eaebfe] text-xs  h-8 rounded-md px-5 resize-none pt-2  w-[30em]' placeholder='Search'  id=""></textarea></div>
            <div className='absolute  right-2'>
              <FaSearch className='text-gray-400 text-sm'/>
            </div>
          </li>
          <li>
            <div className='lg:flex sm:hidden md:hidden  items-center space-x-8 pr-4 hidden ' >
              <div className=' py-2  rounded-full w-10 bg-[burlywood]'>
                <img src={image} alt="" />
              </div>
              <div className='flex items-center gap-4'>
                   <p className='text-xs font-normal'>Delicious Burger</p>
                  <IoIosArrowDown className='text-xs' />
              </div>
              <FaBell className='text-xs'/>
            </div>
          </li>
          
        </ul>
      </div>


    </div>
   
  )
}

export default Navbar
