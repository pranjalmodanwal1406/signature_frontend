import React, { useEffect, useState } from "react";
import "./common.css";
import data from "../../data.json";
import { useLocation, Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Email_signature() {
  const location = useLocation();
  const [allData, setAllData] = useState();

  const handleData = (path) => {
    const decodedPath = decodeURIComponent(path).replace("/", ""); // Decode and remove leading slash
    const matchedData = data.find((item) => item.title === decodedPath);
    setAllData(matchedData || null); // Set to matched data or null if no match
  };

  useEffect(() => {
    handleData(location.pathname); // Pass the path to match
  }, [location.pathname]);

  console.log(location.pathname);
  console.log(allData);

  return (
    <>
      <div className="email-signature">
        {allData ? (
          <div>
            <div className="container-fluid">
             
              <div className="row gy-4 align-items-center my-lg-5 my-3">
                <div className="col-lg-7 pt-5">
                  <h1>{allData?.heading}</h1>
                  <p className="pt-4">{allData?.description}</p>
                  <div className="buttons d-flex gap-3 flex-row mt-4 mb-5">
                    <button className="learnmore-button">Learn More</button>
                    <button className="view_pricing">View Pricing</button>
                  </div>
                </div>
                <div className="col-lg-5">
                  <img
                    src={allData?.image?.url}
                    alt={allData?.image?.caption}
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
            <div className="container">
              {allData?.sections?.map((item, index) => (
                <div key={index}>
                  <div className="row mt-5">
                    <div className="col-lg-7">
                      <div className="section-wrapper transparent">
                        <h2 className="wp-block-heading">{item.heading}</h2>

                        <p> {item?.description}</p>
                        <ol className="list-unstyled">
                          {item?.steps?.map((item, index) => (
                            <li key={index} className={item?.heading && "py-2"}>
                              <span className={item?.heading && "fs-4 fw-bold"}>
                                {item?.heading || item}
                              </span>

                              <br />
                              <span> {item?.description || ""}</span>
                              <span>
                                {" "}
                                {item?.pointImg ? (
                                  <img
                                    src={item?.pointImg}
                                    alt="image"
                                    className="w-100 py-5 my-4 shadow ps-4 rounded-5"
                                  />
                                ) : (
                                  ""
                                )}
                              </span>
                            </li>
                          ))}
                        </ol>
                        <div className="ws-section">
                          <div className="ws-image ws-box 111">
                            {item?.mainImage ? (
                              <img
                                src={item?.mainImage}
                                loading="lazy"
                                alt={item?.imagedesc}
                                className="w-100"
                              />
                            ) : (
                              <></>
                            )}{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>No data found for the specified title.</div>
        )}

        <Footer />
      </div>
    </>
  );
}
