import React from 'react'
import './Order.css'
import info from '../../assets/Info.png'
import {FaArrowDown, FaCircle} from 'react-icons/fa'
import image from '../../assets/Group 43.png'
import lineOme from '../../assets/Line 34.png'
import lineTwo from '../../assets/Line 35.png' 
const Order = () => {
    return (
        <div className='md:border-t-2 lg:border-t-0 sm:border-t-2 border-t-2'>
            <div className=' lg:pt-24  pt-24 lg:pb-8 pb-14  xl:pb-14  border-b-2  px-8 leading-10'>
            <div className=' '>
                <div className=''>
                    <div className='flex justify-between items-center'>
                        <div className=''>
                            <p className='text-xs py-2 font-medium'>Order Time</p>
                            <p className='text-xs '>From 1-6 Jun, 2024
                            </p>
                        </div>

                        <button
                            className='text-indigo-500 border-2 shadow rounded-lg font-semibold p-3 text-xs'>View Report</button>

                    </div>
                    <div className='pt-10 space-y-6 lg:space-y-0 xl:space-y-6 2xl:space-y-6   relative'>
                        <div className='   m-auto border-r-4 border-solid w-32 py-1 px-3 rounded-full '>
                            <div
                                className='  rounded-full w-28 px-4 py-5 border-[15px] border-r-indigo-500 border-b-indigo-400 border-t-indigo-500 border-indigo-300 '>
                                <div className='  rounded-full w-20  p-5'></div>
                            </div>
                        </div>
                        <div className='absolute  md:right-[23em] top-2 lg:right-16 right-12 sm:right-44 '>
                            <img src={info} className='w-24' alt=""/>
                        </div>
                        <div className='flex pt-5 justify-between'>
                            <div className='flex space-x-2'>
                                <div className='text-xs text-indigo-600'>
                                    <FaCircle/>
                                </div>
                                <div className='text-xs '>
                                    <p className='font-semibold'>Afternoon</p>
                                    <p className='font-normal'>40%</p>
                                </div>

                            </div>
                            <div className='flex space-x-2'>
                                <div className='text-xs text-indigo-400'>
                                    <FaCircle/>
                                </div>
                                <div className='text-xs'>
                                    <p className='font-semibold'>Afternoon</p>
                                    <p className='font-normal'>40%</p>
                                </div>

                            </div>
                            <div className='flex space-x-2'>
                                <div className='text-xs text-indigo-200'>
                                    <FaCircle/>
                                </div>
                                <div className='text-xs'>
                                    <p className='font-semibold'>Afternoon</p>
                                    <p className='font-normal'>40%</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

         
            </div>

        </div>
               <div className='px-8 pt-5'>
                    <div className='flex justify-between items-center '>
                        <p className='text-xs font-medium'>Order</p>
                        <button className='text-indigo-500 border-2 shadow rounded-lg font-semibold p-3 text-xs'>View Report</button>
                    </div>
                    <p className='leading-8 text-lg font-semibold'>2568</p>
                    <div className='flex space-x-3'>
                        <div>
                            <FaArrowDown className='text-xs text-red-500'/>
                        </div>
                        <div className='pb-6'>
                            <p className='text-xs'><span className='text-red-500 font-medium'>2.15%</span> vs last week</p>
                        </div>

                    </div>
                    
                        <p className='text-xs pb-5 text-gray-400'>Scales from 1-6 May. 2024</p>
                        <div className='relative  '>
                            <div>
                                <img src={image} className='md:w-full lg:w-80 w-full sm:w-full ' alt="" />
                            </div>
                            <div className='absolute top-0'>
                                <img src={lineOme} className=' md:w-[800px] lg:w-80  w-[520px] sm:w-[520px] ' alt="" />
                            </div>
                            <div className='absolute top-0'>
                                <img src={lineTwo} className=' md:w-[800px] lg:w-80  w-[520px] sm:w-[520px]' alt="" />
                            </div>
                        </div>
                        <div className='flex pb-5 space-x-4 '>
                            <div className='flex space-x-2 items-center text-xs'>
                                <FaCircle className='text-indigo-500'/>
                                <p>Last 6days</p>
                            </div>
                             <div className='flex items-center text-xs space-x-2'>
                                <FaCircle className='text-indigo-300'/>
                                <p>Last Week</p>
                            </div>

                        </div>
                </div>
        </div>
    )
}

export default Order
