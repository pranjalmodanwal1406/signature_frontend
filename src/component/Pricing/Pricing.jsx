import React, { useEffect, useState } from 'react';
import './Pricing.scss';
import Pricing1 from './images/Pricing_1.png';
import Pricing2 from './images/Pricing_2.png';
import Pricing3 from './images/Pricing_3.png';
import Slide1 from './images/Slide1.png';
import Slide2 from './images/Slide2.png';
import Slide3 from './images/Slide3.png';
import Footer from '../Footer/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Pricing() {
    const [cards, setCards] = useState([
        {
            imgSrc: Pricing1,
            title: "$15seat/month",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            items: ["$500"],
        },
        {
            imgSrc: Pricing2,
            title: "$18seat/month",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            items: ["$500"],
        },
        {
            imgSrc: Pricing3,
            title: "$25seat/month",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            items: ["$500"],
        },
        {
            imgSrc: "https://picsum.photos/300/200?random=4",
            title: "$18seat/month",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            items: ["$500"],
        },
        {
            imgSrc: "https://picsum.photos/300/200?random=5",
            title: "$10seat/month",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            items: ["$500"],
        },
        {
            imgSrc: "https://picsum.photos/300/200?random=6",
            title: "$19seat/month",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            items: ["$500"],
        }
    ]);

    const carouselImages = [Slide1, Slide2, Slide3];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className='Pricing'>
                {/* Section 1 */}
                <div className='Pricing_section1_content'>
                    <h4 className='Pricing_h4'>Your Professional Signature</h4>
                    <h1 className='Pricing_h1'>Get Your Customized <br /><span>Email Signature</span><br />With Amazing Designs</h1>
                    <h6 className='Pricing_content'>
                        Lorem ipsum s adipisicing elit. A dolorum quos adipisci neque eos dolores eaque ex<br />
                        dignissimos natus hic expedita, dolorem quam. Consectetur, veniam veritatis.
                    </h6>
                </div>

                {/* Design Background with Ellipses */}
                <div className="pricig_design">
                    <div className="ellipse55"></div>
                    <div className="ellipse62"></div>
                    <div className="ellipse59"></div>
                    <div className="ellipse72"></div>
                    <div className="ellipse60"></div>
                    <div className="ellipse61"></div>
                    <div className="ellipse56"></div>
                    <div className="ellipse57"></div>
                    {/* <div className="ellipse64"></div> */}
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

                {/* Section 2 */}
                <div className='Pricing_section2_content'>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            {cards.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "active" : ""}
                                    aria-current={index === 0 ? "true" : "false"}
                                    aria-label={`Slide ${index + 1}`}
                                ></button>
                            ))}
                        </div>
                        <div className="carousel-inner">
                            {[0, 1].map((carouselIndex) => (
                                <div className={`carousel-item ${carouselIndex === 0 ? 'active' : ''}`} key={carouselIndex}>
                                    <div className="row">
                                        {cards.slice(carouselIndex * 3, (carouselIndex * 3) + 3).map((card, index) => (
                                            <div className="col-md-4" key={index}>
                                                <div className="card" style={{ width: '18rem' }}>
                                                    <img src={card.imgSrc} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{card.title}</h5>
                                                        <p className="card-text">{card.text}</p>
                                                    </div>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">{card.items[0]}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                {/* section 3 */}
                <section className='Pricing3'>
                    <div className="pricing3-content">
                        <h3 className='pricing3_h3'>Templates</h3>
                        <h1>A range of great designer <span>Templates</span></h1>
                        <p>For your easy access and editing, here we have templates built by designers</p>
                        <button className='pricing-button2'>
                            Show More
                        </button>
                    </div>
                    <div className="pricing_img_2">
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

            </div>
            <Footer />
        </>
    );
}

export default Pricing;
