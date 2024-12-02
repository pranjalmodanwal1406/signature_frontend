import React from "react";
import "./Guide.scss";
import Guide1 from './images/Guide_1.png';
import Guide2 from './images/Guide_2.png';
import Guide3 from './images/Guide_3.png';
import Guide4 from './images/Guide_4.png';
import Guide5 from './images/Guide_5.png';
import Guide6 from './images/Guide_6.png';
import Guide7 from './images/Guide_7.png';
import Footer from "../Footer/Footer";

function Guide() {
  const cards = [
    {
      id: 1,
      title: "Step 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. <br>Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      title: "Step 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      title: "Step 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      title: "Step 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      title: "Step 5",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      title: "Step 6",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      image: "https://via.placeholder.com/100",
    },
  ];
  return (
    <>
      <div className="Guide">
        {/* Section 1 */}
        <div className="Guide_section1_content">
          <h4 className="Guide_h4">GUIDE</h4>
          <h1 className="Guide_h1">Email Signature Guide</h1>
          <h6 className="Guide_content">
            Lorem ipsum s adipisicing elit. A dolorum quos adipisci neque eos
          </h6>

          <div className="guide-design">
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
         
        </div>

        

        {/* Section 2 */}
        <div className="Guide_section2">
          <div className="image-grid">
            <div className="row">
              <img
                src={Guide1}
                alt="Random 1"
              />
              <img
                src={Guide2}
                alt="Random 2"
              />
              <img
                src={Guide3}
                alt="Random 3"
              />
              <img
                src={Guide4}
                alt="Random 4"
              />
            </div>
            <div className="row">
              <img
                src={Guide5}
                alt="Random 5"
              />
              <img
                src={Guide6}
                alt="Random 6"
              />
              <img
                src={Guide7}
                alt="Random 7"
              />
              <img
                src={Guide1}
                alt="Random 8"
              />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="Guide_section3">
          <p className="section3_p">How to create a email Signature by professional and team</p>

          <div className="section3_main_content">
            <div className="section3_content_1">
              <h3>
                <span>E-mail Signature</span> <br /> How to create{" "}
              </h3>
              <p className="Guide_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                tempore quaerat beatae aliquid error vero doloremque ratione,{" "}
                <br />
                recusandae eum suscipit explicabo minus rem voluptatem quisquam
                id consectetur numquam veritatis assumenda possimus.
                <br />
                cumque Eum tempore explicabo, a aliquid, pariatur iusto
                praesentium nesciunt illum porro sit distinctio <br />
                cumqueducimus labore, eius perferendis incidunt.
              </p>
            </div>
            <div className="card-section">
              {cards.map((card) => (
                <div className="card" key={card.id}>
                  <div className="card-image">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <h2 className="card-title">{card.title}</h2>
                  <p className="card-content" dangerouslySetInnerHTML={{ __html: card.content }}></p>
                </div>
              ))}
              <div className="card-buttons">
                <button className="button button-create">Create Signature</button>
                <button className="button button-learn">Learn About Pricing</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Guide;
