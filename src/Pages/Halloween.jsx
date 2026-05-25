import React from 'react'
import Header from '../Component/Header'
import halloween1 from "../Images/halloween1.jpg"
import { FaArrowLeft } from "react-icons/fa";


const Pannu = () => {
    return (
        <div>
            <Header />
            <a href='/events' className='detail-bg flex justify-start text-white ps-5 pt-5'>
                <FaArrowLeft className='detail-bg-arrow' />
            </a>
            <div className="detail-bg py-20 px-40">
                <div className="container">
                    <div className='more-detail-bg bg-white p-10 mb-16 rounded-3xl flex'>
                        <img src={halloween1} alt="" className='more-detail-imgs mr-14' />
                        <div className=' flex justify-center flex-col my-10'>
                            <h1 className=' text-3xl font-bold mb-7'>HalloQween Mixer : Queens & Queer First Edition</h1>
                            <div className='flex gap-5 mb-8'>
                                <a href='' >
                                    <div className='detail-date rounded-lg w-16 p-2 text-white'>
                                        <p className=' flex justify-center font-semibold'>25</p>
                                        <p className=' flex justify-center font-semibold'>Oct</p>
                                    </div>
                                </a>

                            </div>
                            <div className='flex gap-3 mb-3'>
                                <p className='text-lg font-bold'>Timing : </p>
                                <p className='text-lg  font-'>   06:00 PM</p>
                            </div>
                            <div className='flex gap-3 mb-10'>
                                <p className='text-lg font-bold'>Location : </p>
                                <p className='text-lg font-'>Flames Dumas, Surat</p>
                            </div>
                            <div>
                                <a href="/halloweenbook" className='book-now py-3 px-5 text-white rounded-full'>Book Now</a>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center '>
                        <div className='text-white text-2xl pb-10'>About Event</div>
                        <div className='text-white px-44 leading-7 text-center'>
                            <div className='mb-4 text-slate-300 '>
                                Get ready for a night of eerie excitement and spooky fun at HalloQween: Queens & Qweer First Edition! <br />
                            </div>

                            <div className='mb-4 text-slate-300 '>
                            Flames Dumas invites queens, queers, and costume-clad guests for Surat’s first thrilling Halloween night, featuring:
                            </div>
                            <div className='text-left text-slate-300 '>
                            🎙️ Music Sets by Bird (India) & Jewel (Mumbai) <br />
                            🕸️ Spooky Decor & Instagrammable Photo Booth <br />
                            👻 Halloween Dress Code & Costume Awards <br />
                            🔥 Fire Acts & Immersive Performances <br />
                            🍷 Complimentary Food & Drinks <br />
                            ⚡️And so much more! <br />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Pannu