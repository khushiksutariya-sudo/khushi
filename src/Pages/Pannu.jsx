import React from 'react'
import Header from '../Component/Header'
import pannu from "../Images/pannu.avif"
import { FaArrowLeft } from "react-icons/fa";


const Pannu = () => {
  return (
    <div>
      <Header />
      <a href='/events' className='detail-bg flex justify-start text-white ps-5 pt-5'> 
      <FaArrowLeft className='detail-bg-arrow'/>
      </a>
      <div className="detail-bg py-20 px-40">
        <div className="container">
          <div className='more-detail-bg bg-white p-10 mb-16 rounded-3xl flex'>
            <img src={pannu} alt="" className='more-detail-imgs mr-14' />
            <div className=' flex justify-center flex-col py-10'>
              <h1 className=' text-3xl font-bold mb-7'>Pannu Yaar !</h1>
              <div className='flex gap-5 mb-8'>
                <a href='' >
                  <div className='detail-date rounded-lg w-16 p-2 text-white'>
                    <p className=' flex justify-center font-semibold'>26</p>
                    <p className=' flex justify-center font-semibold'>Oct</p>
                  </div>
                </a>
                
              </div>
              <div className='flex gap-3 mb-3'>
                <p className='text-lg font-bold'>Timing : </p>
                <p className='text-lg  font-'>   08:30 PM</p>
              </div>
              <div className='flex gap-3 mb-10'>
                <p className='text-lg font-bold'>Location : </p>
                <p className='text-lg font-'>Performing Arts Center , Surat</p>
              </div>
              <div>
                <a href="/pannubook" className='book-now py-3 px-5 text-white rounded-full'>Book Now</a>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center '>
            <div className='text-white text-2xl pb-10'>About Event</div>
            <div className='text-white px-44 leading-7 text-center'>‘Pannu Yaar’ is a stand-up comedy show, which will be your one-way ticket into the Pannu-Verse. Her friendly attitude, observational humour, and personal anecdotes will get you in a fit of breathless laughter. Life is full of stories, and Pannu picks the best, presenting them in a manner which reeks of humor and hilarity. Being the centre of attention was always her favourite hobby, and her stories bloom from analysing and observing her surroundings. One may never know, kya pata agla anecdote aapke baare main ho?


            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Pannu