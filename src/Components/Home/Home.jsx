import React from 'react'
import './Home.css'
import {FaArrowUp, FaCircle} from 'react-icons/fa'
import bar_chart from '../../assets/Chart.png'
import salad from '../../assets/salad.png'
import chicken_noodles from '../../assets/chicken noodles.png'
import smoothie_fruits from  '../../assets/smoothie fruit.png'
import chicken_wings from '../../assets/chicken wings.png'
const Home = () => {
    return (
        <div className='pt-5 pb-1 md:pb-1 lg:pb-16 xl:pb-16  lg:pl-10 xl:pl-10 md:pl-10     leading-10 '>
            <div className=''>
                <p className='font-semibold lg:px-0 xl:px-5 px-5 pb-10'>Dashboard</p>
                <div className=' border-r-2  '>
                    <div className='border-b-2 pb-9 xl:px-5 lg:px-4 px-5'>
                        <div className='flex justify-between '>
                            <div className='pb-3'>
                                <p className='text-sm font-medium leading-9 '>Revenue</p>
                                <p className='font-medium text-sm leading-7'>IDR 7.852.000</p>
                                <div className='pb-3 flex items-center space-x-2 text-xs'>
                                    <FaArrowUp className='text-green-400'/>
                                    <p>
                                        <span className='text-green-400 font-medium'>2.1%</span>
                                        vs last week</p>

                                </div>
                                <p className='text-xs text-gray-500'>Scales from 1-12 Dec, 2020</p>
                            </div>
                            <div>
                                <button
                                    className='text-indigo-500 border-2 shadow rounded-lg font-semibold p-3 text-xs'>View Report</button>
                            </div>
                        </div>
                        <div>
                            <img src={bar_chart} className='w-full' alt=""/>
                        </div>
                        <ul className='list-none flex space-x-5 text-xs '>
                            <li>
                                <div className='flex items-center space-x-2'>
                                    <FaCircle className='text-indigo-500'/>
                                    <p>Last 6 days</p>
                                </div>
                            </li>
                            <li>
                                <div className='flex space-x-2 items-center'>
                                    <FaCircle className='text-gray-400'/>
                                    <p>Last Week</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className=' sm:text-center text-center    md:text-start lg:text-start grid md:grid-cols-2 xl:grid-cols-2  lg:grid-cols-2 xl:px-5 lg:px-4 px-0 sm:px-0 '>
                        <div className='pt-5  m-auto lg:m-0 xl:m-0 md:m-0 '>
                            <p className='text-xs font-bold leading-8'>Your Rating</p>
                            <p className='text-xs text-gray-400 font-normal '>Lorem ipsum dolor sit amet, consectetur
                            </p>
                            <div className="relative py-5  px-0 lg:px-3 md:px-3 xl:px-3 sm:px-3  ">
                                <div className='flex justify-end  relative  items-center  md:justify-evenly xl:justify-evenly lg:justify-evenly    '>
                                    <div
                                        className='border-r-2 opacity-75 top-0 text-white text-center absolute md:left-16 lg:left-0 sm:left-0 left-0 xl:left-4 border-b-2 border-indigo-400 rounded-full p-1 border-solid '>
                                        <div className=' bg-indigo-400 lg:p-7 md:p-7 p-7 sm:p-7 rounded-full   '>
                                            <p className='text-sm font-normal'>85%</p>
                                            <p className='text-xs font-normal'>Hygiene</p>
                                        </div>
                                    </div>
                                    <div
                                        className='text-center  text-white border-b-2 border-r-2 border-orange-400  rounded-full md:p-2 lg:p-2 p-1 sm:p-1 border-solid '>
                                        <div className=' rounded-full   bg-orange-400 lg:px-12 md:px-12 sm:px-12 px-12 sm:py-14 md:py-14 lg:py-14 py-14 '>
                                            <p className='text-sm font-normal'>85%</p>
                                            <p className='text-xs font-normal'>Food Taste</p>
                                        </div>
                                    </div>

                                </div>
                                <div className=' absolute xl:top-32 md:top-32 top-40 sm:left-0 lg:top-40 lg:left-0 md:left-9 '>
                                    <div
                                        className=' rounded-full border-solid  border-r-2 border-b-2  p-1 border-blue-400'>
                                        <div
                                            className=' rounded-full   text-center  items-center text-white  bg-blue-300 py-8 px-6'>
                                            <p className='text-sm font-normal'>92$</p>
                                            <p className='text-xs font-thin '>packaging</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='pt-5 mt-20 md:mt-0 lg:mt-0   lg:pl-8 md:pl-8 pl-3 pr-3 lg:pr-0 md:pr-0 xl:pr-0 lg:border-l-2 md:border-l-2 sm:border-l-0 border-l-0 border-t-2 lg:border-t-0 xl:border-t-0 md:border-t-0 '>
                            <p className='text-xs font-bold leading-8'>Most Ordered Food</p>
                            <p className='text-xs text-gray-400 font-normal '>Lorem ipsum dolor sit amet, consectetur</p>
                            <div className='pt-8'>
                              <div className=' border-b-2 pb-4 flex justify-between items-center '>
                                <img src={salad} className='w-10  shadow-lg rounded-full border-0' alt="" />
                                <p className='text-xs'>Fresh Salad Bowl</p>
                                <p className='text-xs'>IDR 45.000</p>
                              </div>
                               <div className=' border-b-2 py-3 flex justify-between items-center '>
                                <img src={chicken_noodles} className='w-10  shadow-lg rounded-full border-0' alt="" />
                                <p className='text-xs'>Chicken Noodles</p>
                                <p className='text-xs'>IDR 75.000</p>
                              </div>
                                <div className=' border-b-2 py-3 flex justify-between items-center '>
                                <img src={smoothie_fruits} className='w-8  shadow-lg rounded-full border-0' alt="" />
                                <p className='text-xs'>Smoothie Fruits</p>
                                <p className='text-xs'>IDR 45.000</p>
                              </div>
                                <div className='  py-3 flex justify-between items-center '>
                                <img src={chicken_wings} className='w-10  shadow-lg rounded-full border-0' alt="" />
                                <p className='text-xs'>Chicken wings</p>
                                <p className='text-xs'>IDR 45.000</p>
                              </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home
