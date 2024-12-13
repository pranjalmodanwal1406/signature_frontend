import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.scss";
import Footer from "../Footer/Footer";
import BlogDetail from "../Blog/blogDetail";

// import images for placeholders if needed
import Blog_img1 from "./images/Blog_1.png";
import Blog_img2 from "./images/Blog_2.png";

import Blog11 from "./images/Blog11.png";
import Blog12 from "./images/Blog12.png";
import Blog13 from "./images/Blog13.png";
import Blog14 from "./images/Blog14.png";
import Blog15 from "./images/blog15.png";
import Blog111 from "./images/Blog111.png";
import Blog112 from "./images/Blog112.png";
import Blog113 from "./images/Blog113.png";
import {Link} from 'react-router-dom';

const Blog = () => {
  // State to hold blog data
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visiblePosts, setVisiblePosts] = useState(8); // Start with 9 visible posts

  useEffect(() => {
    // Fetch the blog data from the API
    axios
      .get("http://44.196.64.110:9006/api/blog/getBlog")
      .then((response) => {
        // Access the 'data' field from the response and check if it's an array
        const blogData = response.data?.data; // response.data is the object that contains the 'data' array
        if (Array.isArray(blogData)) {
          setBlogData(blogData); // Set the blog data if it's an array
        } else {
          console.error("Invalid data format received:", response.data); // Log an error if the data format is invalid
        }
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://44.196.64.110:9006/api/blog/getBlog")
      .then((response) => {
        const blogData = response?.data?.data;
        if (Array.isArray(blogData)) {
          setBlogData(blogData); // Set the blog data if it's an array
        } else {
          console.error("Invalid data format received:", response.data); // Log an error if the data format is invalid
        }
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error); // Log any fetch errors
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  const handleLoadMore = () => {
    setVisiblePosts(visiblePosts + 9); // Load 9 more posts
  };

  return (
    <>
      <div className="Blog">
        {/* Section 1 */}
        <div className="Blog_img_1">
          <img src={Blog_img1} alt="Blog Inspiration" />

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
        <div className="container-fluid">
          <div className="Blog_section_2">
            <div className="row gy-3">
              {loading ? (
                <p>Loading blogs...</p>
              ) : (
                blogData.slice(0, visiblePosts).map(
                  (
                    blog,
                    index // Only show the first 'visiblePosts' blogs
                  ) => (
                    <>
                      <div className="col-lg-3">
                        <div
                          className="card shadow w-100 px-0 pt-0 rounded-4 w-100 mw-100 h-100"
                          key={index}
                        >
                          <img
                            src={blog.images[0] || Blog_img2} // Use default image if no image is found
                            alt={blog.title}
                          />
                          <div className="card-body">
                            <div className="Blog_content_1">
                              {blog.category}
                            </div>
                            <h2 className="Blog_title text-start">
                              <Link to={`/blog/${blog._id}`} className="text-decoration-none text-dark fs-3">{blog.title}</Link>
                            </h2>
                            <div className="card-content">
                              <div className="card-content-bottom w-100">
                                <p>
                                  {blog.description}
                                  ...
                                </p>

                                <p>Written by: {blog.author}</p>

                                <div className="d-flex flex-row gap-2 justify-content-between w-100 mt-3 align-items-center">
                                  <div className="card-content-top">
                                    <img
                                      src={Blog_img2} // You can replace with a real author image if available
                                      alt="Profile"
                                      className="small-image"
                                    />
                                  </div>
                                  <p>
                                    Date:{" "}
                                    {new Date(blog.date).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                )
              )}
            </div>
          </div>
        </div>

        {/* Load More Button */}
        {blogData.length > visiblePosts && (
          <div className="Blog-button">
            <button className="button1" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}

        {/* section 3 */}
        <div className="Blog_img_2">
          <img src={Blog_img2} alt="Blog Section" />
          <div className="Blog_content_section3">
            <h1 className="Blog_content_h1_section3_blog">Blogs?</h1>
            <h1 className="Blog_content_h1_section3">
              Lorem ipsum dolor sit amet aliquid et qui repellendus ipsa.
            </h1>
            <p className="Blog_p1_section3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              vel.
            </p>
            <button className="blog-button_section3">
              Share your blog here
            </button>
          </div>
        </div>

        {/* section 4 */}
        <div className="container pb-5">
          <div className="section_Blog4">
            <div className="left-div">
              <div className="left-left">
                <img src={Blog11} alt="Main Blog" />
                <div className="content1">
                  Ad quod nam consectetur neque quis reiciendis officia
                  laboriosam quo!
                </div>
                <div className="content2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  officia deserunt nemo laboriosam quo!
                </div>
                <a href="#" className="view-post-link1 mt-3">
                  View Post
                </a>
              </div>
              <div className="left-right">
                <div className="left-right-item">
                  <img src={Blog12} alt="Sub Blog" />
                  <div className="content">
                    Lorem, ipsum dolor
                    <div className="content_rr">21 March 2021</div>
                  </div>
                </div>
                <div className="left-right-item">
                  <img src={Blog13} alt="Sub Blog" />
                  <div className="content">
                    Lorem, ipsum dolor
                    <div className="content_rr">21 March 2021</div>
                  </div>
                </div>
                <div className="left-right-item">
                  <img src={Blog14} alt="Sub Blog" />
                  <div className="content">
                    Lorem, ipsum dolor
                    <div className="content_rr">21 March 2021</div>
                  </div>
                </div>
                <div className="left-right-item">
                  <img src={Blog15} alt="Sub Blog" />
                  <div className="content">
                    Lorem, ipsum dolor
                    <div className="content_rr">21 March 2021</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-div">
              <p>Trendy reels</p>
              <div className="right-item">
                <img src={Blog111} alt="Right Blog" />
                <div className="content">
                  Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                  <div className="content_rr">21 March 2021</div>
                </div>
              </div>
              <div className="right-item">
                <img src={Blog112} alt="Right Blog" />
                <div className="content">
                  Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                  <div className="content_rr">21 March 2021</div>
                </div>
              </div>
              <div className="right-item">
                <img src={Blog113} alt="Right Blog" />
                <div className="content">
                  Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                  <div className="content_rr">21 March 2021</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
