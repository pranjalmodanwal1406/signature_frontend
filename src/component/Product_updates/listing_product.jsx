import React, { useEffect, useState } from "react";
import "./Product_updates.scss";
import Footer from "../Footer/Footer";
import image1 from "./images/Product_updates.png";
import template from "./template.json";
import { useLocation } from "react-router-dom";
function Listing_updates() {
  const location = useLocation();
  const [allData, setAllData] = useState(null);

  const handleData = (path) => {
    const decodedPath = decodeURIComponent(path).replace("/", "");

    const title = decodedPath.replace("create/", "").trim();

    console.log("title:", title);

    // Find a match in the LegalData array by `title`
    const matchedData = template?.find((item) => item?.title === title);
    console.log("matchedData:", matchedData);

    setAllData(matchedData || null);
  };

  useEffect(() => {
    handleData(location.pathname);
  }, [location.pathname]);

  console.log("location.pathname:", location.pathname);
  console.log("allData:", allData);

  return (
    <>
      <div className="Product_updates left w-100 pt-5 ">
        <div className="Product_updates_p">
          <span className="text-dark">Home /</span> {allData?.title}
        </div>
      </div>
      <div className="Product_updates">
        {/* left section */}
        <div className="row gy-4  pb-5 align-items-center">
          <div className="col-lg-7">
            <h1>{allData?.title}</h1>
            <p className="pt-4">
            {allData?.description}
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
            {allData?.image?.map((item, index) => (
              <>
                <li key={index}>
                  <div className="card w-100 rounded-5">
                    <div className="card-body">
                      <img src={item?.url} className="w-100" alt={item?.caption} />
                    </div>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Listing_updates;
