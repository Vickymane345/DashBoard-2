import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Components/Home/Home'
import Order from './Components/Order/Order'

const App = () => {
  const [SideBarMenu, setSideBarMenu] = useState(false) 
  const toggleSideBarMenu = () =>{
    SideBarMenu ? setSideBarMenu(false) : setSideBarMenu(true)
  }
  
    


  return (
    <div className='grid-container'>
      <Navbar toggleSideBarMenu = {toggleSideBarMenu}/>
      <div className='grid grid-cols-6'>
        <div className='col-start-1 lg:col-start-1 xl:col-start-1 md:col-start-1 2xl:col-start-1 lg:block md:block  bg-[#eaebfe]'>
          <Sidebar SideBarMenu={SideBarMenu} setSideBarMenu={setSideBarMenu} />
        </div>
        <div className='md:col-start-1 md:col-end-7 lg:col-start-2 lg:col-end-7 col-start-1 col-end-7  '>
          <div className='grid grid-cols-6 '>
            <div className='lg:col-start-1 lg:col-end-5 md:col-start-1 md:col-end-7 sm:col-start-1 sm:col-end-7 col-start-1 col-end-7 '>
              <Home/>
            </div>
            <div className='lg:col-start-5 lg:col-end-7 md:col-start-1 md:col-end-7  sm:col-start-1 sm:col-end-7 col-start-1 col-end-7 '>
              <Order/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
