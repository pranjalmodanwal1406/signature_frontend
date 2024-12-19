import React, { useEffect, useState } from "react";
import "./Product_updates.scss";
import Footer from "../Footer/Footer";
import image1 from "./images/Product_updates.png";
import data from "./guide.json";
import { useLocation, Link } from "react-router-dom";

function GuidePage() {
  const location = useLocation();
  const [allData, setAllData] = useState(null);
  const [filterData, setFilterData] = useState(null);

  const handleData = (path) => {
    const decodedPath = decodeURIComponent(path).replace("/", "");

    const title = decodedPath.replace("guide/", "").trim();

    console.log("title:", title);

    // Find a match in the LegalData array by `title`
    const matchedData = data?.find((item) => item?.title === title);
    console.log("matchedData:", matchedData);

    setAllData(matchedData || null);
  };

  useEffect(() => {
    const handleFilterData = () => {
      const filter = data?.filter((item) => item?.title !== allData?.title);
      console.log(filter);

      setFilterData(filter);
    };
    handleFilterData();
  }, [allData]);

  useEffect(() => {
    handleData(location.pathname);
  }, [location.pathname]);

  console.log("allData:", allData);
  console.log("filterData:", filterData);
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
            <p className="pt-4">{allData?.decription}</p>
            <div className="buttons d-flex gap-3 flex-row mt-4 mb-5">
              <button className="learnmore-button">Learn More</button>
              <button className="view_pricing">View Pricing</button>
            </div>
          </div>
          <div className="col-lg-5">
            <img src={allData?.image} alt="" className="w-100" />
          </div>
        </div>
        <div className="left">
          {/* Section left1 */}

          <div className="Product_updates_1 mt-lg-5">
            {/* Section left2 */}
            <div className="Product_updates_content_para">
              {allData?.listData.map((item, index) => (
                <div key={index} className="">
                  <h2 className="fw-bold mb-3">{item.listhead}</h2>
                  <ol className="my-4">
                    {item.data.map((data, dataIndex) => (
                      <li key={dataIndex} className="my-5">
                        <span className="fs-3 fw-bolder d-block mb-3">
                          {data.heading}
                        </span>
                        <span className="fs-6 fw-normal d-block mb-3">
                          {data.description}
                        </span>
                        <div className="">
                          <img
                            src={data.stepImg}
                            alt="image"
                            className="w-100 my-4"
                          />
                        </div>
                        {data?.sublist?.length > 0 ? (
                          <>
                            {data?.sublist.map((item, index) => (
                              <ul>
                                <li>{item}</li>
                              </ul>
                            ))}
                          </>
                        ) : (
                          <></>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right">
          <div className="profile-section">
            <h4 className="text-start w-100 d-flex">Related Articles</h4>
            {filterData?.map((item, index) => (
              <div className="profile-card" key={index}>
                <div className="profile-name">
                  <Link
                    to={`/guide/${item.title}`}
                    className="text-dark text-decoration-none"
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GuidePage;
