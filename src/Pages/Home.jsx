import React from "react";
import SliderBar from "../Component/Slider";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import twf from "../Images/twf.jpg";
import twf11 from "../Images/twf11.jpg";
import twf22 from "../Images/twf22.jpg";
import event from "../Images/event.png";
import Rectangle from "../Images/Rectangle10.png";
import Aaditya from "../Images/aaditya.jpg";
import Event4 from "../Images/event-management1.jpg";
import Event5 from "../Images/Events5.png";
import Istockphoto from "../Images/istockphoto.jpg";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Slider from "react-slick";
import { Box, Grid, Button, Container, Typography } from "@mui/material";

const Home = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 12000,
    speed: 2500,
  };

  return (
    <div>
      <Header />

      <div
        className="latest-event-bg hero-section-bg"
        style={{ backgroundColor: "#11224E" }}
      >
        <Container>
          <Box>
            <Grid container>
              <Grid xs={6} sx={{ display: "flex", alignItems: "end" }}>
                <Box
                  sx={{
                    width: "395px",
                    height: "570px",
                    borderRadius: "191px",
                    overflow: "hidden",
                    borderTop: "2px solid white",
                    borderLeft: "2px solid white",
                  }}
                >
                  <img
                    src="https://globalbusinessalliance.biz/wp-content/uploads/2022/04/Top-10-Steps-to-Preparing-an-Awesome-Business-Event.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "220px",
                    height: "300px",
                    borderRadius: "191px",
                    overflow: "hidden",
                    ml: "-90px",
                    borderTop: "2px solid white",
                    borderLeft: "2px solid white",
                  }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjbFZcwEfbMINLivppg6sgbMNENOhR0PJUw&s"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
              <Grid
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  pb: 6,
                }}
              >
                <Typography variant="h6" color="white">
                  Explore Upcoming Events
                </Typography>
                <Typography variant="h2" color="white">
                  With Eventoria
                </Typography>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ textAlign: "center", px: 2 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque efficitur ac quam in congue.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      <SliderBar />

      <Container>
        <Grid container sx={{ py: 10 }}>
          <Grid
            xs={6}
            sx={{ display: "flex", flexDirection: "column", pr: 5, pt: 8 }}
          >
            <Typography variant="h4">Get To Know</Typography>
            <Typography variant="h2" sx={{ mb: 5 }}>
              ABOUT US
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates rem blanditiis incidunt dolore animi voluptatibus
              aperiam, tenetur pariatur reiciendis quae asperiores accusantium
              similique minus mollitia provident ipsam recusandae et autem.
            </Typography>
            <Typography variant="body1" sx={{ mt: 3 }}>
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Typography>
            <Box sx={{mt:5}}>
              <Button variant="outlined">Start Now</Button>
            </Box>
          </Grid>
          <Grid xs={6} sx={{ position: "relative" }}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ width: "450px", height: "570px" }}>
                <img
                  src={Rectangle}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  width: "430px",
                  height: "570px",
                  ml: "-400px",
                  borderRadius: " 240px 240px 0px 0px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={Aaditya}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  ml: "-280px",
                  mt: "-35px",
                  borderRadius: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={Event5}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  width: "250px",
                  height: "250px",
                  ml: "20px",
                  mt: "-5px",
                  borderRadius: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={Event4}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  width: "150px",
                  height: "150px",
                  top: 250,
                  right: -30,
                  borderRadius: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={Istockphoto}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography></Typography>
      </Container>

      <div className="latest-event-bg">
        <div className="latest-events-container pt-14">
          <div className="latest-events flex flex-col">
            <div className="flex grid justify-items-center pb-14 flex-col">
              <img src={event} alt="" className="latest-event-logo mb-4" />
              <h1 className="text-3xl font-bold">Latest Events</h1>
            </div>
            <div className="slider-container pb-14">
              <Slider {...settings}>
                <div>
                  <Card
                    sx={{
                      maxWidth: "600px",
                      height: "300px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        sx={{
                          height: "100%",
                          objectFit: "cover",
                          width: "100%",
                        }}
                        // height="100%"
                        image={twf22}
                      />
                    </CardActionArea>
                  </Card>
                </div>
                <div>
                  <Card
                    sx={{
                      maxWidth: 600,
                      height: "300px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={twf}
                        alt="green iguana"
                      />
                    </CardActionArea>
                  </Card>
                </div>
                <div>
                  <Card
                    sx={{
                      maxWidth: 600,
                      height: "300px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={twf11}
                        alt="green iguana"
                      />
                    </CardActionArea>
                  </Card>
                </div>
                <div>
                  <Card
                    sx={{
                      maxWidth: 600,
                      height: "300px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={twf22}
                        alt="green iguana"
                      />
                    </CardActionArea>
                  </Card>
                </div>
                <div>
                  <Card
                    sx={{
                      maxWidth: 600,
                      height: "300px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={twf}
                        alt="green iguana"
                      />
                    </CardActionArea>
                  </Card>
                </div>
                <div>
                  <Card
                    sx={{
                      maxWidth: 600,
                      height: "300px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        sx={{ objectFit: "cover" }}
                        component="img"
                        image={twf11}
                        // image={S3}
                        alt="green iguana"
                      />
                    </CardActionArea>
                  </Card>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

    <Footer />
    </div>
  );
};

export default Home;
