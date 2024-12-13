import React from "react";
import "./Product_updates.scss";
import Footer from "../Footer/Footer";
import image1 from "./images/Product_updates.png";

function Listing_updates() {
  const profiles = [
    {
      name: "Create a Gmail Signature",
    },
    {
      name: "Browse signature templates",
    },
    {
      name: "Add image to Gmail signature",
    },
    {
      name: "Add phone number to Gmail signature",
    },
  ];
  return (
    <>
      <div className="Product_updates left w-100 pt-5 ">
        <div className="Product_updates_p">
          <span className="text-dark">Home /</span> Name
        </div>
      </div>

      <div className="Product_updates">
        {/* left section */}
        <div className="row gy-4  pb-5 align-items-center">
          <div className="col-lg-7">
            <h1>Create a professional signature Examples</h1>
            <p className="pt-4">
              Get a beautiful Gmail email signature that makes an impression.
              Browse Gmail signature templates, learn tips and easily generate
              your signature in 2 minutes.
            </p>
            <div className="buttons d-flex gap-3 flex-row mt-4 mb-5">
              <button className="learnmore-button">Learn More</button>
              <button className="view_pricing">View Pricing</button>
            </div>
          </div>
          <div className="col-lg-5">
            <img
              src={
                "https://www.wisestamp.com/wp-content/uploads/2023/04/gmail-signature-image.webp"
              }
              alt=""
              className="w-100"
            />
          </div>
        </div>
        <div className="py-5 w-100 listing_product">
          <h2 className="mb-4 justify-content-center d-flex w-100">
            Top Examples
          </h2>
          <ul className="list-unstyled d-flex flex-row gap-4 flex-wrap">
            <li>
              <div className="card w-100 rounded-5">
                <div className="card-body">
                  <img
                    src={
                      "https://www.wisestamp.com/wp-content/uploads/2021/01/minimalist-consultant-email-signature.jpg"
                    }
                    className="w-100"
                    alt="image"
                  />
                </div>
              </div>
            </li>
            <li>
            <div className="card w-100 rounded-5">
                <div className="card-body">
                  <img
                    src={
                      "https://www.wisestamp.com/wp-content/uploads/2021/01/minimalist-consultant-email-signature.jpg"
                    }
                    className="w-100"
                    alt="image"
                  />
                </div>
              </div>
            </li>
            <li>
            <div className="card w-100 rounded-5">
                <div className="card-body">
                  <img
                    src={
                      "https://www.wisestamp.com/wp-content/uploads/2021/01/minimalist-consultant-email-signature.jpg"
                    }
                    className="w-100"
                    alt="image"
                  />
                </div>
              </div>
            </li>
            <li>
            <div className="card w-100 rounded-5">
                <div className="card-body">
                  <img
                    src={
                      "https://www.wisestamp.com/wp-content/uploads/2021/01/minimalist-consultant-email-signature.jpg"
                    }
                    className="w-100"
                    alt="image"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Listing_updates;
