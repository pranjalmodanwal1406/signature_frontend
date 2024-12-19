import React, { useEffect, useState } from "react";
import "./common.css";
import "./Product_updates.scss";
import Footer from "../Footer/Footer";
import image1 from "./images/Product_updates.png";
import LegalData from "./legal.json";
import { useLocation } from "react-router-dom";

export default function LegalPages() {
  const location = useLocation();
  const [allData, setAllData] = useState(null);

  const handleData = (path) => {
    const decodedPath = decodeURIComponent(path).replace("/", "");

    const title = decodedPath.replace("company/", "").trim();

    console.log("title:", title);

    // Find a match in the LegalData array by `title`
    const matchedData = LegalData?.find((item) => item?.title === title);
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
      <div className="Product_updates">
        <div className="left">
          {/* Section left1 */}
          <div className="Product_updates_1">
            <div className="image_section">
              <img src={image1} alt="" />
              <div className="Product_updates_content">
                <p className="Product_updates_para1 mb-5">
                  {allData?.title ||
                    "No matching data found for the provided title."}
                </p>
                <p className="Product_updates_para2">
                  {allData?.description ||
                    "No matching data found for the provided title."}
                </p>
              </div>
            </div>

            {/* Section left2 */}
            <div className="Product_updates_content_para">
              <ul className="left2_para list-unstyled">
                {allData?.data?.map((item, index) => (
                  <li key={index} className="my-5">
                    <h2 className="fw-bold">{item?.heading}</h2>
                    <span className="mb-3 fs-6">{item?.description}</span>
                  </li>
                 
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
