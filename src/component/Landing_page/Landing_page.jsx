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
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



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
                        <p>For your easy access and editing, here we have templates built by designers</p>
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

                {/* section 4 */}
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
                        <a href="http://44.196.192.232:2001" target="_blank" rel="noopener noreferrer">
                            <button className='landingpage4-button'>
                                Create
                            </button>
                        </a>
                    </div>

                </section>

                {/* section 5 */}
                <section className='landingpage5'>
                    <h3 style={{ color: '#3EB2F0' }}>Feedbacks</h3>
                    <h1 className='h16'>Our Customers Say Something <span>About Us</span></h1>
                    <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {/* First Carousel Item - Set active class here */}
                            <div className="carousel-item active">
                                <div className="card shadow-sm rounded-3">
                                    <div className="quotes display-2 text-body-tertiary">
                                        <i className="bi bi-quote"></i>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</p>
                                        <div className="d-flex align-items-center pt-2">
                                            <img src="https://codingyaar.com/wp-content/uploads/square-headshot-1.png" alt="Jane Doe" />
                                            <div>
                                                <h5 className="card-title fw-bold">Jane Doe</h5>
                                                <span className="text-secondary">CEO, Example Company</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Second Carousel Item */}
                            <div className="carousel-item">
                                <div className="card shadow-sm rounded-3">
                                    <div className="quotes display-2 text-body-tertiary">
                                        <i className="bi bi-quote"></i>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</p>
                                        <div className="d-flex align-items-center pt-2">
                                            <img src="https://codingyaar.com/wp-content/uploads/square-headshot-2.png" alt="June Doe" />
                                            <div>
                                                <h5 className="card-title fw-bold">June Doe</h5>
                                                <span className="text-secondary">CEO, Example Company</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Third Carousel Item */}
                            <div className="carousel-item">
                                <div className="card shadow-sm rounded-3">
                                    <div className="quotes display-2 text-body-tertiary">
                                        <i className="bi bi-quote"></i>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</p>
                                        <div className="d-flex align-items-center pt-2">
                                            <img src="https://codingyaar.com/wp-content/uploads/square-headshot-2.png" alt="June Doe" />
                                            <div>
                                                <h5 className="card-title fw-bold">June Doe</h5>
                                                <span className="text-secondary">CEO, Example Company</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Fourth Carousel Item */}
                            <div className="carousel-item">
                                <div className="card shadow-sm rounded-3">
                                    <div className="quotes display-2 text-body-tertiary">
                                        <i className="bi bi-quote"></i>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</p>
                                        <div className="d-flex align-items-center pt-2">
                                            <img src="https://codingyaar.com/wp-content/uploads/square-headshot-2.png" alt="June Doe" />
                                            <div>
                                                <h5 className="card-title fw-bold">June Doe</h5>
                                                <span className="text-secondary">CEO, Example Company</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Carousel Controls */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}

export default LandingPage;
