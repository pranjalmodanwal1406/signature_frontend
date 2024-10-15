import React from "react";
import "./Blog.scss";
import Footer from "../Footer/Footer";
import Blog_img1 from "./images/Blog_1.png";
import Blog_img2 from "./images/Blog_2.png";
import Blog1 from "./images/Blog1.png";
import Blog2 from "./images/Blog2.png";
import Blog3 from "./images/Blog3.png";
import Blog4 from "./images/Blog4.png";
import Blog5 from "./images/Blog5.png";
// import Blog6 from "./images/Blog6.png";
import Blog7 from "./images/Blog7.png";
import Blog8 from "./images/Blog8.png";
import Blog9 from "./images/Blog9.png";

import Blog11 from "./images/Blog11.png";
import Blog12 from "./images/Blog12.png";
import Blog13 from "./images/Blog13.png";
import Blog14 from "./images/Blog14.png";
import Blog15 from "./images/blog15.png";
import Blog111 from "./images/Blog111.png";
import Blog112 from "./images/Blog112.png";
import Blog113 from "./images/Blog113.png";

const cardsData = [
  {
    image: Blog1,
    content1: "Lorem ipsum dolor sit amet",
    title: "Lorem ipsum",
    content: "This is the content for post 1.This is the content for post .This is the content for post .",
  },
  {
    image: Blog2,
    content1: "Lorem ipsum dolor sit amet ",
    title: "Lorem ",
    content: "This is the content for post 2. This is the content for post .This is the content for post .",
  },
  {
    image: Blog3,
    content1: "Lorem ipsum dolor sit amet ",
    title: "Lorem ipsum ",
    content: "This is the content for post 3.This is the content for post .This is the content for post .",
  },
  {
    image: Blog4,
    content1: "Lorem ipsum dolor sit amet",
    title: "Lorem ipsum ",
    content: "This is the content for post 4.This is the content for post .This is the content for post .",
  },
  {
    image: Blog5,
    content1: "Lorem ipsum dolor sit amet",
    title: "Lorem ipsum ",
    content: "This is the content for post 5.This is the content for post .This is the content for post .",
  },
  {
    image: Blog1,
    content1: "Lorem ipsum dolor sit amet",
    title: "Lorem ipsum ",
    content: "This is the content for post 6.This is the content for post .This is the content for post .",
  },
  {
    image: Blog7,
    content1: "Lorem ipsum dolor sit amet",
    title: "Lorem ipsum ",
    content: "This is the content for post 7. This is the content for post .This is the content for post .",
  },
  {
    image: Blog8,
    content1: "Lorem ipsum dolor sit amet ",
    title: "Lorem ipsum ",
    content: "This is the content for post 8.This is the content for post .This is the content for post .",
  },
  {
    image: Blog9,
    content1: "Lorem ipsum dolor sit amet",
    title: "Lorem ipsum ",
    content: "This is the content for post 9.This is the content for post .This is the content for post .",
  },
];

function Blog() {
  return (
    <>
      <div className="Blog">
        {/* Section 1 */}
        <div className="Blog_img_1">
          <img src={Blog_img1} alt="" />
          <div className="Blog_box">
          <div className="Blog_content1">
            <h1 className="Blog_content_h1">
              Inspiration for travel by real people.
            </h1>
            <p className="Blog_p1">Book smart, travel simple</p>
            <button className="blog-button">Start Planning your trip</button>
          </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="Blog_section_2">
          {cardsData.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.image} alt={card.title} />
              <div className="Blog_content_1">{card.content1}</div>
              <div className="card-content">
                <div className="card-content-top">
                  <img
                    src={Blog1}
                    alt="Profile"
                    className="small-image"
                  />
                  <h2 className="Blog_title">{card.title}</h2>
                </div>
                <div className="card-content-bottom">
                  <p>{card.content}</p>
                  <a href="#" className="view-post-link">
                    View Post
                  </a>
                </div>
              </div>
            </div>

          ))}
        </div>
        <div className="Blog-button">
          <button className="button1">Load More</button>
        </div>

        {/* section 3 */}
        <div className="Blog_img_2">
          <img src={Blog_img2} alt="" />
          <div className="Blog_content_section3">
            <h1 className="Blog_content_h1_section3_blog">
              Blogs?
            </h1>
            <h1 className="Blog_content_h1_section3">
              Lorem ipsum dolor sit amet  aliquid et qui repellendus ipsa.
            </h1>
            <p className="Blog_p1_section3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, vel.</p>
            <button className="blog-button_section3">Share your blog here</button>
          </div>
        </div>

        {/* section 4 */}
        <div className="section_Blog4">
          <div className="left-div">
            <div className="left-left">
              <img src={Blog11} alt="Main" />
              <div className="content1"> Ad quod nam consectetur neque quis reiciendis officia laboriosam quo!</div>
              <div className="content2">Lorem ipsum dolor sit amet consectetur adipisicing elit. officia deserunt nemo laboriosam quo!</div>
              <a href="#" className="view-post-link1">
                View Post
              </a>
            </div>
            <div className="left-right">
              <div className="left-right-item">
                <img src={Blog12} alt="Sub" />
                <div className="content">Lorem, ipsum dolor <div className="content_rr">21 March 2021</div></div>

              </div>
              <div className="left-right-item">
                <img src={Blog13} alt="Sub" />
                <div className="content">Lorem, ipsum dolor <div className="content_rr">21 March 2021</div></div>
              </div>
              <div className="left-right-item">
                <img src={Blog14} alt="Sub" />
                <div className="content">Lorem, ipsum dolor <div className="content_rr">21 March 2021</div></div>
              </div>
              <div className="left-right-item">
                <img src={Blog15} alt="Sub" />
                <div className="content">Lorem, ipsum dolor <div className="content_rr">21 March 2021</div></div>
              </div>
            </div>
          </div>
          <div className="right-div">
            <p>Trendy reels</p>
            <div className="right-item">
              <img src={Blog111} alt="Right" />
              <div className="content">Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. <div className="content_rr">21 March 2021</div></div>
            </div>
            <div className="right-item">
              <img src={Blog112} alt="Right" />
              <div className="content">Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. <div className="content_rr">21 March 2021</div></div>
            </div>
            <div className="right-item">
              <img src={Blog113} alt="Right" />
              <div className="content">Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit.. <div className="content_rr">21 March 2021</div></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
