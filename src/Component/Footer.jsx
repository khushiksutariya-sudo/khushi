import React from 'react'
import { FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import onlyLogo from "../Images/only-logo.png"
import {
  BrowserRouter as 
  Link
} from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-footer text-white">
        <div className="container">
          <div className="row px-16 py-8 flex gap-72">
            <div className="col-4 ">
              <h1 className='text-xl font-bold logo-footer'><img src={onlyLogo} alt="" /></h1>
              <p className='text-slate-200'>Tickets to the Best Events, Just a Click Away!</p>
              
            </div>
            <div className="col-4">
              <h1 className='text-xl font-bold mb-5'>Pages</h1>
              <ul className='grid gap-y-1 text-slate-300'>
                
                <a href="/">Home</a>
                <a href="/events">Events</a>
                <a href="/gallery">Gallery</a>
                <a href="/tickets">Tickets</a>
                
                
              </ul>
            </div>
            <div className="col-4">
              <h1 className='text-xl font-bold mb-5'>Contacts</h1>
              <p className='text-slate-200 mb-5'>E-mail : eventoria@gmail.com</p>
              <div className='flex gap-5'>
                <a href=""  ><FaInstagram className='text-slate-100 w-10 h-10 border-2 rounded-full p-2 ' /></a>
                <a href=""><FaXTwitter className='text-slate-100 w-10 h-10 border-2 rounded-full p-2' /></a>
                <a href=""><FaFacebookF className='text-slate-100 w-10 h-10 border-2 rounded-full p-2' /></a>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
