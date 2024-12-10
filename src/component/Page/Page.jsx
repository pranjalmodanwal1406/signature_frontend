import React from "react";
import "./Page.scss";
import Page1 from "./images/Page_1.png";
import Page2 from "./images/Page_2.png";
import Page3 from "./images/Page_3.png";
import Page4 from "./images/Page_4.png";
import Page5 from "./images/Page_5.png";
import Page6 from "./images/Page_6.png";
import Page7 from "./images/Page_7.png";
import Page8 from "./images/Page_8.png";
import Page01 from "./images/Page1.png";
// import Page02 from './images/Page2.png';
import Slide1 from "./images/Slide1.png";
import Slide2 from "./images/Slide2.png";
import Slide3 from "./images/Slide3.png";

import Footer from "../Footer/Footer";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
  Page8,
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
  Page8,
];

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

function Page() {
  const imageChunks = chunkArray(images, 8);
  return (
    <>
      <div className="Page">
        <div className="Page1">
          {/* Section 1 */}
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
          <div className="page_img_1">
            <img src={Page01} alt="" />

            <div className="page1_content">
              <h1 className="page1_content_h1">Templates</h1>
              <p className="page1_p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                harum distinctio sed cupiditate, consequatur laborum? Officia
                inventore dolore quidem iste.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="container">
            <div className="Page2">
              <h3 className="category_h3">Categories</h3>
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="swiper-templates1"
                navigation={true}
              >
                {imageChunks.map((chunk, slideIndex) => (
                  <SwiperSlide key={slideIndex}>
                    <div className="carousel-inner">
                      <div className="row gy-4">
                        {chunk.map((image, index) => (
                          <div className="col-lg-3" key={index}>
                            <div className="card1">
                              <img
                                src={image}
                                className="w-100 h-100"
                                alt={`Image ${index}`}
                              />
                              <h3 className="page3_card1_h3">lorem</h3>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <section className="landingpage3 my-5">
          <div className="container-fluid d-flex align-items-center">
            <div className="landingpage3-content">
              <h3 className="landingpage3_h3">Templates</h3>
              <h1>
                A range of great designer <span>Templates</span>
              </h1>
              <p className="landing_p3">
                For your easy access and editing, here we have templates built
                by designers
              </p>
              <button className="landingpage3-button2">Show More</button>
            </div>
            <div className="landingpage3_img_2">
              <Swiper
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1.5,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination, Navigation]}
                className="swiper-templates"
                navigation={true}
              >
                <SwiperSlide>
                  <img src={Slide1} className="" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={Slide2} className="" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={Slide3} className="" alt="..." />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Page;
