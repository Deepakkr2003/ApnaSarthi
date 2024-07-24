/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'
import logo from "../assets/Apnasarthi_logo.jpeg"

function Header() {

    const [nav,setNav] = useState(false)

    const links=[
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'service'
        },
        {
            id: 3,
            link: 'support'
        },
        {
            id: 4,
            link: 'about'
        },
        {
            id: 5,
            link: 'login'
        },
        {
            id: 6,
            link: 'signup'
        },
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-blue-600 rounded-xl  px-4 z-50'>
        <div>
            <img src={logo} alt="" className='w-32 h-16 rounded-xl'/>
        </div >
        <ul className='hidden md:flex'>

            {links.map(({id,link})=>(
                <li 
                key={id}
                className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200'>
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>
            ))}
        </ul>
        
        <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden'>
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>         
        
        {nav &&(
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-800 to-blue-600 text-white font-semibold'>
            {links.map(({id,link})=>(
                <li 
                key={id}
                className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                    <Link 
                    onClick={()=>setNav(!nav)}
                    to={link} 
                    smooth 
                    duration={500}
                    >
                    {link}
                    </Link>
                </li>
            ))}
        </ul>  
        )}

           
    </div>
  )
}

export default Header

