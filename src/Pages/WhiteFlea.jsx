import React from 'react'
import Header from '../Component/Header'
import twf11 from "../Images/twf11.jpg"
import { FaArrowLeft } from "react-icons/fa";


const WhiteFlea = () => {
  return (
    <div>
      <Header />
      <a href='/events' className='detail-bg flex justify-start text-white ps-5 pt-5'> 
      <FaArrowLeft className='detail-bg-arrow'/>
      </a>
      <div className="detail-bg py-20 px-40">
        <div className="container">
          <div className='more-detail-bg bg-white p-10 mb-16 rounded-3xl flex'>
            <img src={twf11} alt="" className='more-detail-imgs mr-14' />
            <div className=' flex justify-center flex-col '>
              <h1 className=' text-3xl font-bold mb-7'>The White Flea</h1>
              <div className='flex gap-5 mb-8'>
                <a href='' >
                  <div className='detail-date rounded-lg w-16 p-2 text-white'>
                    <p className=' flex justify-center font-semibold'>25</p>
                    <p className=' flex justify-center font-semibold'>Oct</p>
                  </div>
                </a>
                <a href='' >
                  <div className='detail-date rounded-lg w-16 p-2 text-white'>
                    <p className=' flex justify-center font-semibold'>26</p>
                    <p className=' flex justify-center font-semibold'>Oct</p>
                  </div>
                </a>
                <a href='' >
                  <div className='detail-date rounded-lg w-16 p-2 text-white'>
                    <p className=' flex justify-center font-semibold'>27</p>
                    <p className=' flex justify-center font-semibold'>Oct</p>
                  </div>
                </a>
              </div>
              <div className='flex gap-3 mb-3'>
                <p className='text-lg font-bold'>Timing : </p>
                <p className='text-lg  font-'>  04:00 PM to 10:00 PM</p>
              </div>
              <div className='flex gap-3 mb-10'>
                <p className='text-lg font-bold'>Location : </p>
                <p className='text-lg font-'>Gauribaa farm, Vesu, Surat, Rundh</p>
              </div>
              <div>
                <a href="/whitefleabook" className='book-now py-3 px-5 text-white rounded-full'>Book Now</a>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center '>
            <div className='text-white text-2xl pb-10'>About Event</div>
            <div className='text-white px-44 leading-7 text-center'>‘The White Flea Surat is here ! <br />
              The perfect concoction of shopping, food, music and people. Promising to be an unforgettable experience for shopping and music lovers alike.
              With 180+ enthralling brands to discover from 20+ food brands and an outstanding line-up of musicians for live music.
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default WhiteFlea
