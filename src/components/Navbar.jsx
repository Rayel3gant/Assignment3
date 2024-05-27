import React from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    const mode=props.mode;
    const setMode=props.setMode;

    const modeHandler1=()=>{
      setMode('light')
      localStorage.setItem("mode","light")
    }

    const modeHandler2=()=>{
      setMode('dark')
      localStorage.setItem("mode","dark")
    }
  return (
    <div className='w-full py-6 px-12 flex justify-between'>

      <div className={`flex md:gap-x-12 gap-x-4  lg:text-2xl font-semibold ${(mode==="light")?("text-black"):("text-white")}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favourites">Favourites</NavLink>
      </div>

      <div className={`${(mode==="light")?("text-black"):("text-white")}`}>
        {
          (mode==="dark")? (
            <button onClick={modeHandler1}>
              <MdOutlineLightMode className='text-3xl'/>
            </button>
          ) : (
            <button onClick={modeHandler2}>
              <MdDarkMode className='text-3xl'/>
            </button>
          )
        }
      </div>

      

    </div>
  )
}

export default Navbar