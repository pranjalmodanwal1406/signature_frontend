import React from 'react'
import './Card.scss'
import Page1 from './images/Page1.png';
import Page2 from './images/Page2.png';
import Page3 from './images/Page3.png';

function Card() {
  return (
    <>
            <div className='main_carousel'>
              <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className='uppar_card'>
                      <div className='card1'>
                      <img src={Page3} class="w-40" alt="..." />
                      <h3 className='page3_card1_h3'>lorem</h3>
                      </div>

                      <div className='card1'>
                      <img src={Page3} class="w-40" alt="..." />
                      <h3 className='page3_card1_h3'>lorem</h3>
                      </div>

                      <div className='card1'>
                      <img src={Page3} class="w-40" alt="..." />
                      <h3 className='page3_card1_h3'>lorem</h3>
                      </div>

                      <div className='card1'>
                      <img src={Page3} class="w-40" alt="..." />
                      <h3 className='page3_card1_h3'>lorem</h3>
                      </div>

                    </div>
                    <div className='uppar_card'>
                      <div className='card1'>
                      <img src={Page3} class="w-40" alt="..." />
                      <h3 className='page3_card1_h3'>lorem</h3>
                      </div>

                      <div className='card1'>
                      <img src={Page3} class="w-40" alt="..." />
                      <h3 className='page3_card1_h3'>lorem</h3>
                      </div>

                      <div className='card1'>
                      <img src={Page3} class="w-40" alt="..." />
                      <h3 className='page3_card1_h3'>lorem</h3>
                      </div>

                      <div className='card1'>
                      <img src={Page3} class="w-40" alt="..." />
                      <h3 className='page3_card1_h3'>lorem</h3>
                      </div>

                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={Page1} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={Page1} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
        <Footer />
    </>
  )
}

export default Card