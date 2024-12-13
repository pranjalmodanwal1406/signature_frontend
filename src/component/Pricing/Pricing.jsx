import React, { useEffect, useState } from "react";
import "./Pricing.scss";
import Pricing1 from "./images/Pricing_1.png";
import Pricing2 from "./images/Pricing_2.png";
import Pricing3 from "./images/Pricing_3.png";
import Slide1 from "./images/Slide1.png";
import Slide2 from "./images/Slide2.png";
import Slide3 from "./images/Slide3.png";
import Footer from "../Footer/Footer";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    },
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
      <div className="Pricing">
        {/* Section 1 */}
        <div className="Pricing_section1_content">
          <h4 className="Pricing_h4">Your Professional Signature</h4>
          <h1 className="Pricing_h1">
            Get Your Customized <br />
            <span>Email Signature</span>
            <br />
            With Amazing Designs
          </h1>
          <h6 className="Pricing_content">
            Lorem ipsum s adipisicing elit. A dolorum quos adipisci neque eos
            dolores eaque ex
            <br />
            dignissimos natus hic expedita, dolorem quam. Consectetur, veniam
            veritatis.
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
        <div className="Pricing_section2_content">
          <div className="container">
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
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination, Navigation]}
              className="pricing py-5"
              navigation={true}
            >
              {cards.map((card, index) => (
                <>
                  <SwiperSlide>
                    <div className="card w-100 mw-100 border-0 shadow-lg rounded-4" key={index}>
                     
                      <div className="card-body text-start">
                      <ul className="list-group list-group-flush ">
                        <li className="list-group-item text-start px-0 pb-0" >{card.items[0]}</li>
                      </ul>
                        <h5 className="card-title mt-0 fs-6">{card.title}</h5>
                        <p className="card-text">{card.text}</p>
                      </div>
                      <img
                        src={card.imgSrc}
                        className="card-img-top"
                        alt="..."
                      />
                    
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
        </div>

        {/* section 3 */}
        <section className="Pricing3">
          <div className="pricing3-content">
            <h3 className="pricing3_h3">Templates</h3>
            <h1>
              A range of great designer <span>Templates</span>
            </h1>
            <p>
              For your easy access and editing, here we have templates built by
              designers
            </p>
            <button className="pricing-button2">Show More</button>
          </div>
          <div className="pricing_img_2">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner" style={{ padding: "150px" }}>
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
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                  style={{ backgroundColor: "#3498db" }}
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                  style={{ backgroundColor: "#3498db" }}
                ></span>
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
