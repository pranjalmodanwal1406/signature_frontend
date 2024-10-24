import React from 'react';
import './Home.scss';
import Home1 from './image/home1.png';
import Home2 from './image/home2.png';
import Home3 from './image/home3.png';
import Slide1 from './image/Slide1.png';
import Slide2 from './image/Slide2.png';
import Slide3 from './image/Slide3.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import avatar from './image/avatar.png';

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

function Home() {
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

  const testimonials = [
    {
      image: avatar,
      name: 'John Doe',
      feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      stars: 5,
    },
    {
      image: avatar,
      name: 'Jane Smith',
      feedback: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      stars: 4,
    },
    {
      image:avatar,
      name: 'Alice Johnson',
      feedback: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      stars: 5,
    },
    {
      image: avatar,
      name: 'John Doe',
      feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      stars: 5,
    },
    {
      image: avatar,
      name: 'Jane Smith',
      feedback: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      stars: 3,
    },
    {
      image: avatar,
      name: 'Alice Johnson',
      feedback: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      stars: 5,
    },
  ];

  return (
    <>
      <div className='home'>
        {/* 1st section */}
        <section className='flex mt-5'>
          <div className='Home1'>
            <h3 style={{color:'#3EB2F0'}}>At Mission we are</h3>
            <h1>Make Your Mark With Every <span>Email Signature </span> Solutions For Style</h1>
            <p className='Home1_content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
            <button className='home-button'>
              Learn More
            </button>
            <button className='view-pricing'>
              View Pricing
            </button>
          </div>
          <div className="home_img_1">
            <img src={Home1} alt="" />
          </div>
        </section>

        {/* 2nd section */}
        <section className='Home2'>
          <div className='div1'>
            <h1>1000+</h1>
            <p>Templates</p>
          </div>
          <div className='div2'>
            <h1>200+</h1>
            <p>Enterprises</p>
          </div>
          <div className='div3'>
            <h1>99+</h1>
            <p>Categories</p>
          </div>
        </section>

        {/* 3rd section */}
        <section className='Home3'>
          <div className="Home3-content">
            <h3 className='Home3_h3' style={{color:'#3EB2F0'}}>Templates</h3>
            <h1>A range of great designer <span>Templates</span></h1>
            <p>For your easy access and editing, here we have templates built by designers</p>
            <button className='home-button2'>
              Show More
            </button>
          </div>
          <div className="home_img_2">
            <Slider {...settings}>
              {carouselImages.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* 4th section */}
        <section className='Home4'>
          <h2 className='home4-head'>Create and manage the email <span>Signature? </span> you need</h2>
          <p className='section4_para'>WiseStamp provides a seamless solution for managing your email signatures across your organization, ensuring every email strengthens your brand and maximizes your marketing potential.</p>
        </section>

        {/* 5th section */}
        <section className='Home5'>
          <div className="home_img_3">
            <img src={Home3} alt="" />
          </div>
          <button className='home-button3'>
            Create
          </button>
        </section>

        {/* 6th section - Testimonials */}
        <section className='Home6'>
          <h3 style={{color:'#3EB2F0'}}>Feedbacks</h3>
          <h1 className='h16'>Our Customers Say Something <span>About Us</span></h1>
          <div className='testimonial-carousel'>
            <Slider {...settings} className='testimonial-slider'>
              {testimonials.map((testimonial, index) => (
                <div className='testimonial-card' key={index}>
                  <div className='stars'>
                    {'★'.repeat(testimonial.stars) + '☆'.repeat(5 - testimonial.stars)}
                  </div>
                  <p>{testimonial.feedback}</p>
                  <div className='testimonial-info'>
                    <img src={testimonial.image} alt={testimonial.name} />
                    <h4>{testimonial.name}</h4>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Home;
