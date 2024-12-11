import React from "react";
import "./Industry.scss";
import Industry01 from "./images/page11.png";
import Industry1 from "./images/Industry_1.png";
import Industry2 from "./images/Industry_2.png";
import Industry3 from "./images/Industry_3.png";
import Industry4 from "./images/Industry_4.png";
import Footer from "../Footer/Footer";

function Industry() {
  return (
    <>
      <div className="Industry">
        {/* Section 1 */}
        <div className="Industry_section1_content">
          <h4 className="Industry_h4">Industry</h4>
          <h1 className="Industry_h1">
            For Every Industry
            <br />
            <span>WiseStamp</span>
            <br />
            With Amazing Designs
          </h1>
          <h6 className="Industry_content">
            Lorem ipsum s adipisicing elit. A dolorum quos adipisci neque eos
            dolores eaque ex
            <br />
            dignissimos natus hic expedita, dolorem quam. Consectetur, veniam
            veritatis.
          </h6>
        </div>

        {/* Design Background with Ellipses */}
        <div className="industry_design">
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

        {/* Section 2 */}
        <div className="container">
          <div className="AlternatingSections">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-6">
                <img src={Industry1} alt="Industry 1" className="w-100" />
              </div>
              <div className="col-lg-6">
                <h2>Education</h2>
                <p>
                  Content for the first section. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
                <button className="Industry_button">Get Started</button>
              </div>
              <div className="col-lg-6">
                <h2>SaaS</h2>
                <p>
                  Content for the second section. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
                <button className="Industry_button">Get Started</button>
              </div>
              <div className="col-lg-6">
                <img src={Industry2} alt="Industry 2" className="w-100" />
              </div>
              <div className="col-lg-6">
                <img src={Industry3} alt="Industry 3" className="w-100" />
              </div>
              <div className="col-lg-6">
                <h2>IT & Infra</h2>
                <p>
                  Content for the third section. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
                <button className="Industry_button">Get Started</button>
              </div>
              <div className="col-lg-6">
                <h2>Creative Field</h2>
                <p>
                  Content for the fourth section. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
                <button className="Industry_button">Get Started</button>
              </div>
              <div className="col-lg-6">
                <img src={Industry4} alt="Industry 4" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Industry;
