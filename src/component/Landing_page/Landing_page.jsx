import React, { useState, useEffect } from "react";
import axios from "axios";
import './Landing_page.scss';
import home1 from './image/home1.png';
import home2 from './image/home2.png';
import home3 from './image/home3.png';
import home01 from './image/home01.png';
import home02 from './image/home02.png';
import Slide1 from './image/Slide1.png';
import Slide2 from './image/Slide2.png';
import Slide3 from './image/Slide3.png';
import avatar from './image/avatar.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'swiper/css';
import Card from "react-bootstrap/Card";
import { IoIosStar } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



function PrevArrow(props) {

    const { className, onClick } = props;
    return (
        <div className={`${className} custom-prev-arrow`} onClick={onClick}>
            <span>‹</span>
        </div>
    );
}

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={`${className} custom-next-arrow`} onClick={onClick}>
            <span>›</span>
        </div>
    );
}

function LandingPage() {
    const carouselImages = [Slide1, Slide2, Slide3];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const carouselImages1 = [Slide1, Slide2, Slide3];

    const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [feedbacks, setFeedbacks] = useState([]);
    const imageSrc =
      "https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg";
  
    useEffect(() => {
      axios
        .get("http://44.196.64.110:9006/api/feedback/") 
        .then((response) => {
          setFeedbacks(response.data.data);
          console.log("abc", response.data.data)
        })
        .catch((error) => {
          console.error("Error fetching feedbacks:", error);
        });
    }, []);


    return (
        <>
            <div className='LandingPage'>
                {/* section 1 */}
                <section className='landingpage1'>
                    <div className='section1'>
                        <div className="landingpage_design">
                            <div className="ellipse55"></div>
                            <div className="ellipse62"></div>
                            <div className="ellipse59"></div>
                            <div className="ellipse72"></div>
                            <div className="ellipse60"></div>
                            <div className="ellipse61"></div>
                            <div className="ellipse56"></div>
                            <div className="ellipse57"></div>
                            <div className="ellipse64"></div>
                            <div className="ellipse58"></div>
                            <div className="ellipse71"></div>
                            <div className="ellipse63"></div>
                            <div className="group9079">
                                <div className="ellipse65"></div>
                                <div className="ellipse67"></div>
                                <div className="ellipse68"></div>
                                <div className="ellipse69"></div>
                                <div className="ellipse70"></div>
                            </div>
                        </div>
                        <div className='content'>
                            <h5 className='landingh5'>Create Professional Email Signatures in Minutes</h5>
                            <h1 className='landingh1'>
                                Design personalized, brand-enhancing <br /><span className='spanstyle'>email Signatures </span>
                                effortlessly—no coding required.
                            </h1>
                            <p className='landingp'>
                                Stand out with custom email signatures that reflect your brand's identity. Our easy-to-use platform lets you design, customize, and implement signatures that leave a lasting impression.
                            </p>
                            <div className='buttons'>
                                <button className='learnmore-button'>Learn More</button>
                                <button className='view_pricing'>View Pricing</button>
                            </div>
                        </div>
                        <div className="home_img_1">
                            <img src={home1} alt="Home" />
                        </div>
                    </div>
                </section>

                {/* section 2 */}
                <div className='landingpage2'>
                    <div className='box-1'>
                        <h1 className='box-1-h1'>1000+</h1>
                        <p className='box-1-p'>Templates</p>
                    </div>
                    <div className='box-2'>
                        <h1 className='box-1-h1'>200+</h1>
                        <p className='box-1-p'>Enterprises</p>
                    </div>
                    <div className='box-3'>
                        <h1 className='box-1-h1'>99+</h1>
                        <p className='box-1-p'>Categories</p>
                    </div>
                </div>

                {/* section 3 */}
                <section className='landingpage3'>
                    <div className="landingpage3-content">
                        <h3 className='landingpage3_h3'>Templates</h3>
                        <h1>A range of great designer <span>Templates</span></h1>
                        <p className='landing_p3'>For your easy access and editing, here we have templates built by designers</p>
                        <button className='landingpage3-button2'>
                            Show More
                        </button>
                    </div>
                    <div className="landingpage3_img_2">
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner" style={{ padding: '150px' }}>
                                <div class="carousel-item active">
                                    <img src={Slide1} class="d-block w-70" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={Slide2} class="d-block w-70" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={Slide3} class="d-block w-70" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: '#3498db' }}></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: '#3498db' }}></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>


                {/* section 4      */}
                <section className='landingpage4'>
                    <h2 className='landingpage4-head'>Create and manage the email <span className='spanstyle'>Signature? </span> you need</h2>
                    <p className='landingpage4_para'>Signatouch provides a seamless solution for managing your email signatures across your organization,ensuring every email strengthens your brand and maximizes your marketing potential.</p>
                    <div className="landingpage4_img_4">
                        <div className='image_1'>
                            <img src={home01} alt="" />
                        </div>
                        <div className='image_2'>
                            <img src={home02} alt="" />
                        </div>
                    </div>
                    <div className='landingpage4-button-div'>
                        <a href="http://44.196.64.110:2222/SignIn" target="_blank" rel="noopener noreferrer">
                            <button className='landingpage4-button'>
                                Create
                            </button>
                        </a>
                    </div>

                </section>

                {/* section 5 */}
                <section className="landingpage5 reviews container">
        <h3 style={{ color: "#3EB2F0" }}>Feedbacks</h3>
        <h1 className="h16">
          Our Customers Say Something <span style={{ color: "#3EB2F0" }}>About Us</span>
        </h1>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}  // Enables Swiper's default navigation buttons
          modules={[Autoplay, Navigation]}  // Ensure you are using the Autoplay and Navigation modules
        >
          {feedbacks.map((feedback, index) => (
            <SwiperSlide key={index}>
              <Card className="w-100">
                <div className="d-flex flex-column gap-1 justify-content-center align-items-center w-100">
                  <img
                    src={imageSrc}
                    alt="reviews"
                    className="w-50 h-50"
                    style={{ borderRadius: "50%" }}
                  />
                  <h5>{feedback.name}</h5>
                  <p className="blue-text">{feedback.comment}</p>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
                <Footer />
            </div>
        </>
    );
}

export default LandingPage;
