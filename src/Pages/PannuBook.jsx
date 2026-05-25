import React from 'react'
import Header from '../Component/Header'
import twf11 from "../Images/twf11.jpg"
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Footer from '../Component/Footer';




const WhiteFleaBook = () => {
    return (
        <div>

            <Header />
            <a href='/pannu' className='detail-bg flex justify-start text-white ps-5 pt-5'>
                <FaArrowLeft className='detail-bg-arrow' />
            </a>
            <div className="detail-bg py-10 px-80">
                <div className="container">
                    <div className='more-detail-bg bg-white py-10 px-14 mb-16 rounded-3xl'>
                        <div className='ticket-upper-page border-2 p-4 mb-5'>
                            <div className='flex justify-between'>
                                <div className='flex justify-start'>
                                    <h1 className='text-2xl font-semibold mb-5'>Pannu Yaar! ft.Gurleen Pannu</h1>
                                </div>
                                <div className='ruppee-main flex mt-2'>
                                <MdOutlineCurrencyRupee className='ruppee' /><p className='text-md font-medium'>499.00</p>
                                </div>
                            </div>
                            <hr className='line mb-4' />
                            <div className='mb-4'>
                                <p className='mb-3'>Sat, 26 Oct, 2024 <br /> 08:30 PM</p>
                                <p>Venue <br />Performing Arts Center: Surat</p>
                            </div>
                            <hr className='line mb-3' />
                            <div>
                                <p>EARLY BIRD(499) : 1 tickets</p>
                            </div>

                        </div>
                        <div className='px-5'>
                            <div className='flex justify-between'>
                                <p> Sub-total</p>
                                <div className='flex ruppee-mains'><MdOutlineCurrencyRupee /><p>499.00</p></div>
                            </div>
                            <div className='flex justify-between'>
                                <p> Booking Fee</p>
                                <div className='flex ruppee-mains mb-3'><MdOutlineCurrencyRupee /><p>41.22</p></div>
                            </div>
                        </div>
                        <hr className='line mb-2' />
                        <div className='px-5'>
                            <div className='flex justify-between'>
                                <p className='text-lg'> Total Amount</p>
                                <div className='flex ruppee-mains mb-14'><MdOutlineCurrencyRupee /><p>540.22</p></div>
                            </div>
                        </div>
                        <div className='flex justify-center font-medium'>
                            <a href="" className='pay-btn p-3 px-10'>Proceed to Pay</a>
                        </div>
                    </div>

                    <div className='flex flex-col items-center '>
                        <div className='text-white text-2xl pb-5'>About Event</div>
                        <div className='text-slate-400 px-44 leading-7 text-center'>
                            Seating is on first come first serve basis
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default WhiteFleaBook
