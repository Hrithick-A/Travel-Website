import  React, {useEffect} from 'react';
import './main.css'
import img from '../../Assets/img.jpg'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img9 from '../../Assets/img9.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';


import { CiLocationOn } from "react-icons/ci";
import { FaClipboardCheck } from "react-icons/fa";


const Data =[
    {
      id:1,
      imgSrc : img,
      desTitle: 'Delhi',
      location: 'India',
      grade: 'North India',
      price: '₹10,000',
      description: 'A Luxurious Delhi Trip Through the flight and the Top Hotel Acoomodation with premium facilities.'
    }
    ,
    {
        id:2,
        imgSrc : img1,
        desTitle: 'Goa',
        location: 'India',
        grade: 'South India',
        price: '₹30,000',
        description: 'A Adventurous Goa Trip Through the flight and the Top Hotel Acoomodation with premium facilities.'
      }
      ,      {
        id:3,
        imgSrc : img2,
        desTitle: 'Kerala',
        location: 'India',
        grade: 'South India',
        price: '₹25,000',
        description: 'A Luxurious Kerala Trip Through the flight and the Top Hotel Acoomodation with premium facilities.'
      },
      {
        id:4,
        imgSrc : img3,
        desTitle: 'Maldivs',
        location: 'India',
        grade: 'Island',
        price: '₹1,00,000',
        description: 'A Luxurious Maldivs Trip Through the flight and the Top Hotel Acoomodation with premium facilities.'
      },
      {
        id:5,
        imgSrc : img4,
        desTitle: 'Singapore',
        location: 'SouthEast Asia',
        grade: 'Asia',
        price: '₹40,000',
        description: 'A Luxurious Singapore Trip Through the flight and the Top Hotel Acoomodation with premium facilities.'
      },
      {
        id:6,
        imgSrc : img5,
        desTitle: 'Thailand',
        location: 'SouthEast Asia',
        grade: 'Asia',
        price: '₹60,000',
        description: 'A Luxurious Thailand Trip Through the flight and the Top Hotel Acoomodation with premium facilities.'
      },
      {
        id:7,
        imgSrc : img6,
        desTitle: 'Udaipur',
        location: 'India',
        grade: 'North India',
        price: '₹30,000',
        description: 'A Luxurious Udaipur Trip Through the flight and the Top Hotel Acoomodation with premium facilities.'
      },
      {
        id:8,
        imgSrc : img7,
        desTitle: 'Manali Package',
        location: 'India',
        grade: 'North India',
        price: '₹24,000',
        description: 'A Luxurious Manali & Shimla Trip Through the flight and the Top Hotel Acoomodation with premium facilities.'
      },
      {
        id:9,
        imgSrc : img9,
        desTitle: 'Ooty',
        location: 'India',
        grade: 'South India',
        price: '₹60,000',
        description: 'A Luxurious Thailand Trip Through the flight and the Top Hotel Acoomodation with premium facilities.'
      }
      

              

  ]
  
  

const Main = () =>{
    return(
       <section className='main container section'>
        <div  className='secTitle'>
            <h3 className='title'>
                Most Visited Destination
            </h3>
        </div>

        <div  className='secContent grid'>

            {
                Data.map(({id, imgSrc, desTitle, location, grade, description, price})=>{
                    return(
                        <div data-aos="fade-up" key={id}  className='singleDestination'>

                            <div className='imageDiv'>
                                <img src={imgSrc} alt={desTitle} />

                                
                                </div>
                            <div className='cardInfo'>
                                <h4 className='destTitle'>
                                    {desTitle}
                                </h4>
                                <span className='continent flex'>
                                <CiLocationOn className='icon' />
                                <span className='location flex'>
                                    {location}
                                </span>
                                </span>

                                <div className='grade'>
                                    <h4 >
                                        {grade}<small>+1</small>
                                    </h4>
                                    </div>
                                <div className='fees'>
                                    <h4 className='price'>
                                        {price}
                                    </h4>
                                    </div>
                                <div className='desc'>
                                  <p>{description}</p>
                                  
                                  </div>

                                <div className='button'>
                                    <button className='btn flex' >
                                        Details <FaClipboardCheck  className='icon' />
                                    </button>
                                    </div>
                                </div>
                        
                        </div>
                    )

                }

                )
            }

        </div>


       </section>
       
       
       
        )
}

export default Main