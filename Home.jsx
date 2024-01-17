import  React, {useEffect} from 'react';
import './home.css'
import Video from '../../Assets/video.mp4'
import {GrLocation } from 'react-icons/gr'
import {HiFilter } from 'react-icons/hi'
import {FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () =>{
    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])
    
    return(
        <section className='home'>
            <div className='overlay'> </div>
             <video src={Video } autoPlay loop muted type="video/mp4"></video>
             <div className='homeContent Container'>
                <div className='textDiv'>
                    <span data-aos="fade-up"className='smallText'>
                        Our Package
                    </span>
                    <h1 data-aos="fade-up" className='homeTitle'>Search Your Holiday</h1>
                     <div data-aos="fade-up" className='cardDiv grid'>
                    </div>
                    </div>
               </div>
               <div className='destinationInput'>
                    <label htmlFor='city'>Search For Your Destination</label>
                    <div className='input flex'>
                        <input type='text' placeholder='Enter Your Place Here....'/>
                        <GrLocation className='icon' />
                        <div className='cardDiv'>
                       <div className='dateInput'>
                    <label htmlFor='Date'>Select Your Date</label>
                    <div className='input flex'>
                        <input type='date' placeholder=''/>
                
                </div>
                <div className='priceInput'>
                <div className='label_total flex'>
                    <label htmlFor='price'>Max Price</label>
                    <h3 className='total'>Rs. 1,00.000</h3>


             </div>
             <div className='input flex'>
                <input type='range' max={100000} min={5000} />
             </div>
             </div>
             
             
              </div>
                    
             <div className='searchOption flex'>
             <HiFilter className='icon' />
             <span>MORE FILTERS</span>
             </div>
            </div>

                    

                </div>
                
        </div>
        
        <div data-aos="fade-up" className='homeFooterIcons flex'>
            <div className='rightIcon'>
            <FaFacebookF className='icon' />
            <FaInstagram  className='icon'/>
            <FaTwitter className='icon' />
            </div>
            <div className='leftIcon'>
            <FaList className='icon' />
            </div>
        </div>
        
         </section>

    )


}
export default Home