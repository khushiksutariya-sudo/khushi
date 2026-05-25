import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
    
import twf from "../Images/twf.jpg"
import twf11 from "../Images/twf11.jpg"
import twf22 from "../Images/twf22.jpg"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from '../Component/Header';

const Gallery = () => {
  return (
    <div className='gallery-bg'>
      <Header />
      <div className="container-fluid">
        <div className="container mt-14 px-32">
          <div className="row flex gap-16">

            <div className="col-4">
              <Card sx={{ maxWidth: 375, borderRadius:'10px' }}>
                <CardActionArea>
                  <CardMedia sx={{ height: '250px' }}
                    component="img"
                    height="160"
                    image={twf}
                    alt="green iguana"
                  />
                  <CardContent className='gallery-title flex p-0'>
                    <Typography variant="h5" component="div">
                      Lizard 
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="col-4">
              <Card sx={{ maxWidth: 375, borderRadius:'10px' }}>
                <CardActionArea>
                  <CardMedia sx={{ height: '250px' }}
                    component="img"
                    height="160"
                    image={twf11}
                    alt="green iguana"
                  />
                  <CardContent className='gallery-title'>
                    <Typography variant="h5" component="div">
                      Lizard
                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="col-4">
              <Card sx={{ maxWidth: 375 , borderRadius:'10px'}}>
                <CardActionArea>
                  <CardMedia sx={{ height: '250px' }}
                    component="img"
                    height="160"
                    image={twf22}
                    alt="green iguana"
                  />
                  <CardContent className='gallery-title'>
                    <Typography variant="h5" component="div">
                      Lizard
                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
            </div>

          </div>
          <div className="row flex gap-16 mt-14">

            <div className="col-4 mb-14">
              <Card sx={{ maxWidth: 375, borderRadius:'10px' }}>
                <CardActionArea>
                  <CardMedia sx={{ height: '250px' }}
                    component="img"
                    height="160"
                    image={twf}
                    alt="green iguana"
                  />
                  <CardContent className='gallery-title flex'>
                    <Typography variant="h5" component="div">
                      Lizard
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="col-4">
              <Card sx={{ maxWidth: 375, borderRadius:'10px' }}>
                <CardActionArea>
                  <CardMedia sx={{ height: '250px' }}
                    component="img"
                    height="160"
                    image={twf11}
                    alt="green iguana"
                  />
                  <CardContent className='gallery-title'>
                    <Typography variant="h5" component="div">
                      Lizard
                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="col-4">
              <Card sx={{ maxWidth: 375 , borderRadius:'10px'}}>
                <CardActionArea >
                  <CardMedia sx={{ height: '250px' }}
                    component="img"
                    height="160"
                    image={twf22}
                    alt="green iguana"
                  />
                  <CardContent className='gallery-title'>
                    <Typography variant="h5" component="div">
                      Lizard
                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Gallery
