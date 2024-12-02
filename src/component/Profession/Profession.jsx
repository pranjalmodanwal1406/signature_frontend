import React from "react";
import "./Profession.scss";
import Profession1 from './images/Profession_1.png';
import Profession2 from './images/Profession_2.png';
import Profession4 from './images/Profession_4.png';
import Footer from "../Footer/Footer";

function Profession() {
  return (
    <>
      <div className="Profession">
        {/* Section 1 */}
        <div className="Profession_section1_content">
          <h4 className="Profession_h4">PROFESSION</h4>
          <h1 className="Profession_h1">
            40+ Professional Signature
          </h1>
          <h6 className="Profession_content">
            Lorem ipsum s adipisicing elit. A dolorum quos adipisci neque eos
            dolores eaque ex
          </h6>

          {/* Design Background with Ellipses */}
          <div className="profession_design">
            {/* <div className="ellipse55"></div> */}
            {/* <div className="ellipse62"></div> */}
            {/* <div className="ellipse59"></div> */}
            <div className="ellipse72"></div>
            <div className="ellipse60"></div>
            <div className="ellipse61"></div>
            <div className="ellipse56"></div>
            {/* <div className="ellipse57"></div> */}
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
        </div>

        {/* Section 2 */}
        <div className="AlternatingSections">
          <div className="section">
            <div className="section__image section__image--left">
              <img src={Profession1} alt="Professional Photographer" />
            </div>
            <div className="section__content section__content--right">
              <h2 className="section2_h2">Professional <br/> Photographer</h2>
              <p>
                Content for the first section. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          </div>

          <div className="section">
            <div className="section__content section__content--left">
              <h2 className="section2_h2">Doctors</h2>
              <p>
                Content for the second section. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
            <div className="section__image section__image--right">
              <img src={Profession2} alt="Doctors"/>
            </div>
          </div>

          <div className="section">
            <div className="section__image section__image--left">
              <img src={Profession4} alt="Lawyers"/>
            </div>
            <div className="section__content section__content--right">
              <h2 className="section2_h2">Lawyers</h2>
              <p>
                Content for the third section. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          </div>

          <div className="section">
            <div className="section__content section__content--left">
              <h2 className="section2_h2">Professional <br/> Dancers</h2>
              <p>
                Content for the fourth section. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
            <div className="section__image section__image--right">
              <img src={Profession4} alt="Professional Dancers"/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profession;
