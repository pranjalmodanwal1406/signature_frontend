import React from 'react';
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
            image: avatar,
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
                            <h5 className='landingh5'>At Mission we are</h5>
                            <h1 className='landingh1'>
                                Make Your Mark With <br /> Every<span className='spanstyle'> Email Signature </span>
                                Solutions For Style
                            </h1>
                            <p className='landingp'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi nisi neque laborum optio facere aliquid enim velit. Commodi, ad.
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
                        <p>For your easy access and editing, here we have templates built by designers</p>
                        <button className='landingpage3-button2'>
                            Show More
                        </button>
                    </div>
                    <div className="landingpage3_img_2">
                        <Slider {...settings1}>
                            {carouselImages1.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>

                {/* section 4 */}
                <section className='landingpage4'>
                    <h2 className='landingpage4-head'>Create and manage the email <span className='spanstyle'>Signature? </span> you need</h2>
                    <p className='landingpage4_para'>WiseStamp provides a seamless solution for managing your email signatures across your organization, ensuring every email strengthens your brand and maximizes your marketing potential.</p>
                    <div className="landingpage4_img_4">
                        <div className='image_1'>
                            <img src={home01} alt="" />
                        </div>
                        <div className='image_2'>
                            <img src={home02} alt="" />
                        </div>
                    </div>
                    <div className='landingpage4-button-div'>
                        <button className='landingpage4-button'>
                            Create
                        </button>
                    </div>
                </section>

                {/* section 5 */}
                <section className='landingpage5'>
                    <h3 style={{ color: '#3EB2F0' }}>Feedbacks</h3>
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

export default LandingPage;
