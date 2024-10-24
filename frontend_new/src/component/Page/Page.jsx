import React from 'react';
import './Page.scss';
import Page1 from './images/Page_1.png';
import Page2 from './images/Page_2.png';
import Page3 from './images/Page_3.png';
import Page4 from './images/Page_4.png';
import Page5 from './images/Page_5.png';
import Page6 from './images/Page_6.png';
import Page7 from './images/Page_7.png';
import Page8 from './images/Page_8.png';
import Page01 from './images/Page1.png';
// import Page02 from './images/Page2.png';
import Slide1 from './images/Slide1.png';
import Slide2 from './images/Slide2.png';
import Slide3 from './images/Slide3.png';

import Footer from '../Footer/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Page() {
  const images = [Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8];
  const carouselImages = [Slide1, Slide2, Slide3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='Page'>
      <div className='Page1'>
        {/* Section 1 */}
        <div className="page_img_1">
          <img src={Page01} alt="" />
          <div className='page1_box'></div>
          <div className='page1_content'>
            <h1 className='page1_content_h1'>Templates</h1>
            <p className='page1_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque harum distinctio sed cupiditate, consequatur laborum? Officia inventore dolore quidem iste.</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className='Page2'>
          <h3 className='category_h3'>Categories</h3>
          <div className='main_carousel'>
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
              </div>
              <div className="carousel-inner">
                {[...Array(5)].map((_, pageIndex) => (
                  <div className={`carousel-item ${pageIndex === 0 ? 'active' : ''}`} key={pageIndex}>
                    <div className='carousel_page'>
                      {images.map((image, index) => (
                        <div className='card1' key={index}>
                          <img src={image} className="w-40" alt="..." />
                          <h3 className='page3_card1_h3'>lorem</h3>
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
        </div>

        {/* Section 3 */}
        <section className='Page3'>
          <div className="page3-content">
            <h3 className='page3_h3'>Templates</h3>
            <h1>A range of great designer <span>Templates</span></h1>
            <p>For your easy access and editing, here we have templates built by designers</p>
            <button className='page-button2'>
              Show More
            </button>
          </div>
          <div className="page_img_2">
            <Slider {...settings}>
              {carouselImages.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
