import React, { useState, useEffect } from "react";
import "./Landing_page.scss";
import home1 from "./image/home1.png";
import home2 from "./image/home2.png";
import home3 from "./image/home3.png";
import home01 from "./image/home01.png";
import home02 from "./image/home02.png";
import Slide1 from "./image/Slide1.png";
import Slide2 from "./image/Slide2.png";
import Slide3 from "./image/Slide3.png";
import avatar from "./image/avatar.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "swiper/css";
import Card from "react-bootstrap/Card";
import { IoIosStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import user1 from "./image/user.png";

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
      name: "John Doe",
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      stars: 5,
    },
    {
      image: avatar,
      name: "Jane Smith",
      feedback:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      stars: 4,
    },
    {
      image: avatar,
      name: "Alice Johnson",
      feedback:
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      stars: 5,
    },
    {
      image: avatar,
      name: "John Doe",
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      stars: 5,
    },
    {
      image: avatar,
      name: "Jane Smith",
      feedback:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      stars: 3,
    },
    {
      image: avatar,
      name: "Alice Johnson",
      feedback:
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      stars: 5,
    },
  ];

  const [templates, setTemplates] = useState(1000);
  const [enterprises, setEnterprises] = useState(200);
  const [categories, setCategories] = useState(99);

  const animateValue = (setter, start, end, duration) => {
    const range = end - start;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    const increment = end > start ? 1 : -1;

    const timer = setInterval(() => {
      current += increment;
      setter(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  useEffect(() => {
    animateValue(setTemplates, 500, 1000, 3000); // 4 seconds for 1000
    animateValue(setEnterprises, 50, 200, 1500); // 2 seconds for 200
    animateValue(setCategories, 50, 99, 1000); // 2 seconds for 99
  }, []);

  return (
    <>
      <div className="LandingPage">
        {/* section 1 */}
        <div className="container-fluid mt-5">
          <section className="landingpage1">
            <div className="section1">
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
              <div className="content">
                <h5 className="landingh5">
                  Create Professional Email Signatures in Minutes
                </h5>
                <h1 className="landingh1">
                  Design personalized, brand-enhancing <br />
                  <span className="spanstyle">email Signatures </span>
                  effortlessly—no coding required.
                </h1>
                <p className="landingp">
                  Stand out with custom email signatures that reflect your
                  brand's identity. Our easy-to-use platform lets you design,
                  customize, and implement signatures that leave a lasting
                  impression.
                </p>
                <div className="buttons">
                  <button className="learnmore-button">Learn More</button>
                  <button className="view_pricing">View Pricing</button>
                </div>
              </div>
              <div className="home_img_1">
                <img src={home1} alt="Home" />
              </div>
            </div>
          </section>
        </div>

        {/* section 2 */}
        <div className="container">
          <div className="landingpage2">
            <div className="row gy-4 w-100">
              <div className="col-lg-4">
                <div className="box-1">
                  <h1 className="box-1-h1">{templates}+</h1>
                  <p className="box-1-p">Templates</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box-2">
                  <h1 className="box-1-h1">{enterprises}+</h1>
                  <p className="box-1-p">Enterprises</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box-3">
                  <h1 className="box-1-h1">{categories}+</h1>
                  <p className="box-1-p">Categories</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}
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

        {/* section 4 */}
        <div className="container">
          <section className="landingpage4 py-5">
            <h2 className="landingpage4-head">
              Create and manage the email{" "}
              <span className="spanstyle">Signature? </span> you need
            </h2>
            <p className="landingpage4_para">
              Signatouch provides a seamless solution for managing your email
              signatures across your organization,ensuring every email
              strengthens your brand and maximizes your marketing potential.
            </p>
            <div className="landingpage4_img_4">
              <div className="image_1">
                <img src={home01} alt="" />
              </div>
              <div className="image_2">
                <img src={home02} alt="" />
              </div>
            </div>
            <div className="landingpage4-button-div">
              <a href="/signIn" target="_blank" rel="noopener noreferrer">
                <button className="landingpage4-button px-5">Create</button>
              </a>
            </div>
          </section>
        </div>

        {/* section 5 */}
        <section className="landingpage5 reviews container">
          <h3 style={{ color: "#3EB2F0" }}>Feedbacks</h3>
          <h1 className="h16">
            Our Customers Say
            <br /> Something <span style={{ color: "#3EB2F0" }}>About Us</span>
          </h1>
          <Swiper
         
            slidesPerView={2.5}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            className="review-swiper"
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              780: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <Card className="w-100">
                <div className="d-flex justify-content-start ">
                  <IoIosStar style={{ color: "orange" }} />
                  <IoIosStar style={{ color: "orange" }} />
                  <IoIosStar style={{ color: "orange" }} />
                  <IoIosStar style={{ color: "orange" }} />
                  <IoIosStar style={{ color: "orange" }} />
                </div>
                <p className="fs-6 mt-3 text-start ">
                  Sapiente occaecati exercitationem quasi eum corporis sit. Aut
                  consectetur maxime debitis quam voluptatem aut consequatur
                  voluptatum.
                </p>
                <div className="d-flex flex-row gap-1 justify-content-start align-items-center w-100 mt-3">
                  <img src={user1} alt="reviews" />
                  <div className="">
                    <h5 className="text-start mb-0">Lisa</h5>
                    <h5 className="text-muted fs-6">UX Designer </h5>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="w-100">
                <div className="d-flex justify-content-start ">
                  <IoIosStar style={{ color: "orange" }} />
                  <IoIosStar style={{ color: "orange" }} />
                  <IoIosStar style={{ color: "orange" }} />
                  <IoIosStar style={{ color: "orange" }} />
                  <IoIosStar style={{ color: "orange" }} />
                </div>
                <p className="fs-6 mt-3 text-start ">
                  Sapiente occaecati exercitationem quasi eum corporis sit. Aut
                  consectetur maxime debitis quam voluptatem aut consequatur
                  voluptatum.
                </p>
                <div className="d-flex flex-row gap-1 justify-content-start align-items-center w-100 mt-3">
                  <img src={user1} alt="reviews" />
                  <div className="">
                    <h5 className="text-start mb-0">Lisa</h5>
                    <h5 className="text-muted fs-6">UX Designer </h5>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="w-100">
                <div className="d-flex justify-content-start ">
                  <IoIosStar style={{ color: "orange" }} />
                  <IoIosStar style={{ color: "orange" }} />
                  <IoIosStar style={{ color: "orange" }} />
                  <IoIosStar style={{ color: "orange" }} />
                  <IoIosStar style={{ color: "orange" }} />
                </div>
                <p className="fs-6 mt-3 text-start ">
                  Sapiente occaecati exercitationem quasi eum corporis sit. Aut
                  consectetur maxime debitis quam voluptatem aut consequatur
                  voluptatum.
                </p>
                <div className="d-flex flex-row gap-1 justify-content-start align-items-center w-100 mt-3">
                  <img src={user1} alt="reviews" />
                  <div className="">
                    <h5 className="text-start mb-0">Lisa</h5>
                    <h5 className="text-muted fs-6">UX Designer </h5>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="w-100">
                <div className="d-flex justify-content-start ">
                  <IoIosStar style={{ color: "orange" }} />
                  <IoIosStar style={{ color: "orange" }} />
                  <IoIosStar style={{ color: "orange" }} />
                  <IoIosStar style={{ color: "orange" }} />
                  <IoIosStar style={{ color: "orange" }} />
                </div>
                <p className="fs-6 mt-3 text-start ">
                  Sapiente occaecati exercitationem quasi eum corporis sit. Aut
                  consectetur maxime debitis quam voluptatem aut consequatur
                  voluptatum.
                </p>
                <div className="d-flex flex-row gap-1 justify-content-start align-items-center w-100 mt-3">
                  <img src={user1} alt="reviews" />
                  <div className="">
                    <h5 className="text-start mb-0">Lisa</h5>
                    <h5 className="text-muted fs-6">UX Designer </h5>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          </Swiper>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
