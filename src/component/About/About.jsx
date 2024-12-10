import React from "react";
import "./About.scss";
import about1 from "./image/about1.png";
import Footer from "../Footer/Footer";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
function About() {
  console.log("About component rendered");
  return (
    <div className="about">
      <div className="about1">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-7 ">
              <div className="w-100 w-lg-75">
                <h1>
                  <span>Jean Joe</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  corrupti fuga nulla iusto, cum, sint itaque dolorem molestiae
                  ipsam ratione consequuntur quod asperiores? Totam numquam
                  <br></br>
                  <br></br> quam inventore? Et eveniet, cum doloremque,
                  blanditiis possimus animi ipsum doloribus a placeat cupiditate
                  delectus quidem quasi corporis hic earum debitis repellat
                  temporibus aut suscipit! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Vero error facere ipsam suscipit
                  quo rerum? Repellendus nostrum dolores<br></br>
                  <br></br> odio sunt. Saepe nemo beatae ipsam. Ullam, voluptas
                  ratione corporis consequatur tempore ipsum nisi voluptatibus
                  inventore iure distinctio animi voluptatem perferendis, ea
                  earum, tempora odio. Tenetur ex vitae ullam beatae nesciunt
                  nostrum?
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about_img_1">
                <img src={about1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="about2">
        <b className="fs-3 ">
          Are you ready to transfrom your boring Email to professional Email
          with us
        </b>
        <button className="about-button mt-5">Make an Appointment</button>
      </div>

      {/* section 3 */}
      <div className="about3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Subscribe to our Newsletter</h2>
              <p className="text-muted">
                we recommend you to subscribe to our newsletter, drop <br></br>{" "}
                your email below to get daily updat eabout us{" "}
              </p>
              <div className="d-flex flex-row gap-3 align-items-center justify-content-center">
                <Form.Control
                  required
                  type="text"
                  className="rounded-5 bg-second-subs ps-5 py-3 h-100 fs-6"
                  placeholder="Enter your email address"
                />
                <button className="about-button3 px-5 py-3 mt-0">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
