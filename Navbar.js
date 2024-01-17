import  React  from 'react';
import './navbar.css'
import { MdOutlineTravelExplore  } from 'react-icons/md'
import { IoIosCloseCircle   } from 'react-icons/io'
import { TbGridDots   } from 'react-icons/tb'
import { useState } from 'react';


const Navbar =()=>  {
   
    return(
        <section className='navBarSection'>
            <header className='header flex'>
                <div className='logoDiv'>
            <a href='#' className='logo flex'>
                <h1> <MdOutlineTravelExplore  className='icon' /> Travel</h1>
            </a>
            </div>

            </header>
        </section>
    )

}
export default Navbar
