import React, { useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function BlogDetail() {
  const [data, setData] = useState(null);
  const [relatedData, setRelatedData] = useState([]);
  const { id } = useParams();
  const [extraImage, setExtraImage] = useState([]);
  const [showExtraImages, setShowExtraImages] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShowExtraImages = () => {
    setShowExtraImages(!showExtraImages); // Toggle to show extra images
  };

  const getAllData = async () => {
    try {
      const response = await axios.get(
        `http://44.196.64.110:9006/api/blog/getBlog/${id}`
      );

      const blogData = response?.data;
      setData(blogData);

      // Extract the extra images
      const images = blogData?.images?.slice(5) || [];
      setExtraImage(images);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllRelatedData = async () => {
    try {
      const response = await axios.get(
        `http://44.196.64.110:9006/api/blog/getBlog`
      );
      const blogData = response?.data?.data;
      console.log("blogData", blogData);

      const filterData = blogData.filter((item) => item._id !== id);
      setRelatedData(filterData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      getAllData();
      getAllRelatedData();
    }
  }, [id]);

  const doubleOnClick = () => {
    handleShowExtraImages();
    handleScrollToTop();
  };

  // Render a loader while data is being fetched
  if (!data) {
    return (
      <div className="container">
        <div className="blog h-100vh">
          <section className="py-5">
            <div className="container-fluid">
              <div className="d-flex justify-content-center align-items-center">
                <span>Data Loading...</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  console.log("relatedData", relatedData);
  console.log("data", data);

  return (
    <div className="container-fluid">
      <div className="blog my-4">
        <section className="py-4">
          <div className="container-fluid">
            <div className="" key={data?._id}>
              <Breadcrumb className="bg-none">
                <Breadcrumb.Item className="text-decoration-none text-dark">
                  <Link className="text-dark text-decoration-none" to="/">
                    Home
                  </Link>{" "}
                </Breadcrumb.Item>

                <Breadcrumb.Item active>{data?.title}</Breadcrumb.Item>
              </Breadcrumb>
              <h1 className="text-start fs-3 mb-3">{data?.title}</h1>
              <div className="row gy-5">
                <div className="col-lg-9">
                  <div className="row justify-content-start gy-4 ">
                    {data?.images?.map((image, index) => (
                      <React.Fragment key={index}>
                        {index === 0 ? (
                          <div className="col-lg-6">
                            <img
                              src={image}
                              alt="Welcome to AirOutdoors"
                              className="img-fluid w-100 h-100"
                            />
                          </div>
                        ) : (
                          index === 1 && (
                            <div className="col-lg-6">
                              <div className="row gy-4">
                                {data?.images
                                  ?.slice(1, 5) // Show only the first 4 additional images
                                  .map((image, subIndex) => (
                                    <div
                                      className="col-lg-6"
                                      key={`sub-${subIndex}`}
                                    >
                                      <img
                                        src={image}
                                        alt="Welcome to AirOutdoors"
                                        className="img-fluid w-100 h-100"
                                      />
                                    </div>
                                  ))}
                              </div>
                            </div>
                          )
                        )}
                      </React.Fragment>
                    ))}
                    {!showExtraImages && extraImage.length > 0 && (
                      <div className="col-lg-6 mx-auto">
                        <div className="card border-0 h-100 rounded-5 shadow">
                          <div className="card-body">
                            <div className="h-100 d-flex justify-content-center align-items-center">
                              <span
                                className="text-primary"
                                onClick={handleShowExtraImages}
                                style={{ cursor: "pointer" }}
                              >
                                Click to see More
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="card shadow-lg rounded-5 w-100 mw-100 text-start mt-5">
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-2 mb-4">
                      <span>
                        <b>Author:</b> {data?.author}
                      </span>
                      <span>
                        <b>Date:</b> {new Date(data?.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: data?.content }}
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="d-flex flex-column gap-3 align-items-start related-blogs">
                    <h2>Related Blogs</h2>
                    {relatedData.map((item) => (
                      <>
                        <div key={item._id} className="w-100">
                          <Link
                            to={`/blog/${item._id}`}
                            className="text-decoration-none text-dark"
                          >
                            {item.title}
                          </Link>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
                {showExtraImages && extraImage.length > 0 && (
                  <>
                    <div className="col-12 mt-4">
                      <div className="row gy-4">
                        {extraImage.map((image, index) => (
                          <div className="col-lg-4" key={`extra-${index}`}>
                            <img
                              src={image}
                              alt={`Extra Image ${index}`}
                              className="img-fluid w-100 h-100"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="card border-0 h-100 rounded-5 shadow w-50 mx-auto">
                      <div className="card-body">
                        <div
                          className="h-100 d-flex justify-content-center align-items-center"
                          onClick={doubleOnClick}
                        >
                          <span
                            className="text-primary"
                            style={{ cursor: "pointer" }}
                          >
                            Click to close
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
