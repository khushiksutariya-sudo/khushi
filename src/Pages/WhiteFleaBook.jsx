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
            <a href='/whiteflea' className='detail-bg flex justify-start text-white ps-5 pt-5'>
                <FaArrowLeft className='detail-bg-arrow' />
            </a>
            <div className="detail-bg py-10 px-80">
                <div className="container">
                    <div className='more-detail-bg bg-white py-10 px-14 mb-16 rounded-3xl'>
                        <div className='ticket-upper-page border-2 p-4 mb-5'>
                            <div className='flex justify-between'>
                                <div className='flex justify-start'>
                                    <h1 className='text-2xl font-semibold mb-5'>The White Flea</h1>
                                </div>
                                <div className='ruppee-main flex mt-2'>
                                    <MdOutlineCurrencyRupee className='ruppee' /><p className='text-md font-medium'>250.00</p>
                                </div>
                            </div>
                            <hr className='line mb-4' />
                            <div className='mb-4'>
                                <p className='mb-3'>Fri, 25 Oct, 2024 <br /> 04:00 PM to 11:00 PM</p>
                                <p>Venue <br />Gauribaa farm, Vesu, Surat, Rundh

                                </p>
                            </div>
                            <hr className='line mb-3' />
                            <div>
                                <p>Day 1 : 1 tickets</p>
                            </div>

                        </div>
                        <div className='px-5'>
                            <div className='flex justify-between'>
                                <p> Sub-total</p>
                                <div className='flex ruppee-mains'><MdOutlineCurrencyRupee /><p>250.00</p></div>
                            </div>
                            <div className='flex justify-between'>
                                <p> GST</p>
                                <div className='flex ruppee-mains '><MdOutlineCurrencyRupee /><p>45.00</p></div>
                            </div>
                            <div className='flex justify-between'>
                                <p>Servive fee</p>
                                <div className='flex ruppee-mains mb-3'><MdOutlineCurrencyRupee /><p>5.00</p></div>
                            </div>
                        </div>
                        <hr className='line mb-2' />
                        <div className='px-5'>
                            <div className='flex justify-between'>
                                <p className='text-lg'> Total Amount</p>
                                <div className='flex ruppee-mains mb-14'><MdOutlineCurrencyRupee /><p>300.00</p></div>
                            </div>
                        </div>
                        <div className='flex justify-center font-medium'>
                            <a href="" className='pay-btn p-3 px-10'>Proceed to Pay</a>
                        </div>
                    </div>

                    <div className='flex flex-col items-center '>
                        <div className='text-white text-2xl pb-8'>Terms & Condition</div>
                        <div className='text-slate-400 px-34 leading-7 text-left'>
                            - A ticket is mandatory for 5+ age kids. <br />
                            - The event starts at 4 pm on the 25TH OCT 2024 and ends at 11 pm on the 27TH OCT 2024.<br />
                            - Customers can enter the event at any time between 4 pm and 10 pm.<br />
                            - Customers cannot re- enter the event.<br />
                            - Please carry a valid ID proof along with you.<br />
                            - No refunds on purchased tickets are possible, in case of any rescheduling.<br />
                            - Security procedures, including frisking, remain the right of the management.<br />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default WhiteFleaBook
