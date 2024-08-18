import React from 'react'
import { FaBook, FaChartBar, FaCreditCard, FaHandsHelping, FaMailBulk, FaPersonBooth, FaShoppingCart } from 'react-icons/fa'
import {IoMdSettings} from "react-icons/io";
import { IoCloseSharp} from "react-icons/io5";
import { FaArrowDown, FaBell, FaSearch } from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io";
import {IoMenuOutline} from "react-icons/io5";
import image from '../../assets/Burger-removebg-preview.png'


const Sidebar = (props) => {
  return (
    <div className={`p-5 sidebar ${props.SideBarMenu ? "" : 'hide-mobile-menu'}`}>
       <IoCloseSharp
                onClick={() => {
                props.SideBarMenu
                    ? props.setSideBarMenu(false)
                    : props.setSideBarMenu(true)
            }}
                className='cursor-pointer md:block xl:hidden lg:hidden '/>
      <p className='px-4 leading-10 text-xs font-bold text-gray-500'>Menu</p>
      <div className=' px-4 shadow bg-indigo-200  pb-2 pt-3 mb-3  font-medium flex items-center gap-4 text-xs'>
        <div>
            <FaChartBar className='text-indigo-500'/>
        </div>
        <div className=''>
            <p className='active text-indigo-500'>Dashboard</p>
        </div>
      </div>
      <div className='px-4 flex items-center gap-4 pb-3 text-xs font-medium'>
        <div>
            <FaShoppingCart className='text-indigo-500'/>
        </div>
        <div>
            <p>Food Order</p>
        </div>
      </div>
      <div className='px-4 flex items-center gap-4 pb-3 text-xs font-medium'>
        <div>
            <FaBook className='text-indigo-500'/>
        </div>
        <div>
            <p>Manage Menu</p>
        </div>
      </div>
      <div className='px-4 flex items-center gap-4 pb-3 text-xs font-medium'>
        <div>
            <FaMailBulk className='text-indigo-500'/>
        </div>
        <div>
            <p>Customer Review</p>
        </div>
      </div>

      <p className='px-4 leading-10 text-xs font-bold text-gray-500'>OTHERS</p>
        <div className='px-4 flex items-center gap-4 pb-3 text-xs font-medium'>
        <div>
            <IoMdSettings className='text-indigo-500'/>
        </div>
        <div>
            <p>Settings</p>
        </div>
      </div>
      <div className='px-4 flex items-center gap-4 pb-3 text-xs font-medium'>
        <div>
            <FaCreditCard className='text-indigo-500'/>
        </div>
        <div>
            <p>Payment</p>
        </div>
      </div>
      <div className='px-4 flex items-center gap-4 pb-3 text-xs font-medium'>
        <div>
            <FaPersonBooth className='text-indigo-500'/>
        </div>
        <div>
            <p>Accounts</p>
        </div>
      </div>
      <div className='px-4 flex items-center gap-4 pb-3 text-xs font-medium'>
        <div>
            <FaHandsHelping className='text-indigo-500'/>
        </div>
        <div>
            <p>Help</p>
        </div>
      </div>

              <ul className=' list-none '>
          <li className='flex sm:flex md:hidden justify-center lg:hidden  relative  items-center'>
            <div ><textarea name="" className='bg-indigo-700  text-xs  h-8 rounded-md px-5 resize-none pt-2  w-full' placeholder='Search'  id=""></textarea></div>
            <div className='absolute   right-0'>
              <FaSearch className='text-gray-400 text-lg'/>
            </div>
          </li>
          <li>
            <div className='block sm:block md:block lg:hidden xl:hidden items-center space-x-3 pr-4 pt-5' >
              <div className=' py-9 px-3  rounded-full w-full bg-[burlywood]'>
                <img src={image} alt="" />
              </div>
              <div className='pt-5 flex items-center gap-4'>
                   <p className='text-xs font-normal'>Delicious Burger</p>
                  <IoIosArrowDown className='text-xs' />
                    <FaBell className='text-xs'/>
              </div>
            
            </div>
          </li>
          
        </ul>
  
    </div>
  )
}

export default Sidebar
