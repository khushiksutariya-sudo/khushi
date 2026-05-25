import React from 'react'
import Header from '../Component/Header'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import twf from "../Images/twf22.jpg"
import pannu from "../Images/pannu.avif"
import halloween from "../Images/halloween.webp"
import Footer from '../Component/Footer';

const Events = () => {
  return (
    <div>
      <Header />
      <div className="event-bg">
        <div className="container px-20 py-16" >
          <div className='upcoming-events mb-16 flex justify-center'>Upcoming Events</div>
          <div className="row flex gap-20 mb-20">
            <div className="col-6">
              <Card className='flex event-card text-white rounded-xl overflow-hidden'>
                <Card.Img variant="top" src={twf} className='event-card-img ' />
                <Card.Body className='event-card-body px-10 py-5'>
                  <Card.Title className='event-card-title text-xl font-bold mb-4'>The White Flea</Card.Title>
                  <Card.Text className='text-slate-300'>
                  The perfect concoction of shopping, food, music and people. Promising to be experience for shopping and music lovers alike.
                  </Card.Text>
                  <a href="/whiteflea">
                    <Button variant="primary" className='more-details-btn border-2 rounded-md  py-2 px-2 mt-8 '>More Details...</Button>
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div className="col-6">
              <Card className='flex event-card text-white rounded-xl overflow-hidden'>
                <Card.Img variant="top" src={pannu} className='event-card-img' />
                <Card.Body className='event-card-body px-10 py-5'>
                  <Card.Title className='event-card-title text-xl font-bold mb-4'>Pannu Yaar !</Card.Title>
                  <Card.Text className='text-slate-300'>
                    Pannu Yaar is a stand-up comedy show, which will take you into the Pannu-Verse.   Life is full of stories, and Pannu picks the best.
                  </Card.Text>
                  <a href="/pannu">
                    <Button variant="primary" className='more-details-btn border-2 rounded-md  py-2 px-2 mt-8 '>More Details...</Button>
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row flex gap-20 mb-20">
            <div className="col-6">
              <Card className='flex event-card text-white rounded-xl overflow-hidden'>
                <Card.Img variant="top" src={halloween} className='event-card-img ' />
                <Card.Body className='event-card-body px-10 py-5'>
                  <Card.Title className='event-card-title text-xl font-bold mb-4'>Card Title</Card.Title>
                  <Card.Text className='text-slate-300'>
                  Flames Dumas invites queens, queers, and costume-clad guests for Surat’s first thrilling Halloween night, featuring:
                  </Card.Text>
                  <a href="/halloween">
                    <Button variant="primary" className='more-details-btn border-2 rounded-md  py-2 px-2 mt-8 '>More Details...</Button>
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div className="col-6">
              <Card className='flex event-card text-white rounded-xl overflow-hidden'>
                <Card.Img variant="top" src={pannu} className='event-card-img' />
                <Card.Body className='event-card-body px-10 py-5'>
                  <Card.Title className='event-card-title text-xl font-bold mb-4'>Card Title</Card.Title>
                  <Card.Text className='text-slate-300'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <a href="/moredetail4">
                    <Button variant="primary" className='more-details-btn border-2 rounded-md  py-2 px-2 mt-8 '>More Details...</Button>
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row flex gap-20">
            <div className="col-6">
              <Card className='flex event-card text-white rounded-xl overflow-hidden'>
                <Card.Img variant="top" src={halloween} className='event-card-img ' />
                <Card.Body className='event-card-body px-10 py-5'>
                  <Card.Title className='event-card-title text-xl font-bold mb-4'>Card Title</Card.Title>
                  <Card.Text className='text-slate-300'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <a href="/moredetail5">
                    <Button variant="primary" className='more-details-btn border-2 rounded-md  py-2 px-2 mt-8 '>More Details...</Button>
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div className="col-6">
              <Card className='flex event-card text-white rounded-xl overflow-hidden'>
                <Card.Img variant="top" src={twf} className='event-card-img' />
                <Card.Body className='event-card-body px-10 py-5'>
                  <Card.Title className='event-card-title text-xl font-bold mb-4'>Card Title</Card.Title>
                  <Card.Text className='text-slate-300'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <a href="/moredetail6">
                    <Button variant="primary" className='more-details-btn border-2 rounded-md  py-2 px-2 mt-8 '>More Details...</Button>
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Events
