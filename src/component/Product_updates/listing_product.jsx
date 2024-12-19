import React, { useEffect, useState } from "react";
import "./Product_updates.scss";
import Footer from "../Footer/Footer";
import image1 from "./images/Product_updates.png";
// import template from "./template.json";
import { useLocation } from "react-router-dom";
import template1 from "./template/template-v1.png";
import template2 from "./template/template-v2.png";
import template3 from "./template/template-v3.png";
import template4 from "./template/template-v4.png";
function Listing_updates() {
  const location = useLocation();
  const [allData, setAllData] = useState(null);

 const template =  [
    {
      "title": "Email Signature examples",
      "description": "Get a beautiful Gmail email signature that makes an impression. Browse Gmail signature templates, learn tips, and easily generate your signature in 2 minutes.",
      "image": [
        {
          "url": `${template1}`,
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": `${template2}`,
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": `${template2}`,
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": `${template4}`,
          "caption": "Just sign in with your Gmail and… you’re done"
        }
      ]
    },
    {
      "title": "Email Signature Templates",
      "description": "Get a beautiful Gmail email signature that makes an impression. Browse Gmail signature templates, learn tips, and easily generate your signature in 2 minutes.",
      "image": [
        {
          "url": "/src/component/Product_updates/template/template-v5.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": "/src/component/Product_updates/template/template-v6.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": "/src/component/Product_updates/template/template-v7.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": "/src/component/Product_updates/template/template-v8.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        }
      ]
    },
    {
      "title": "Email Signature Design",
      "description": "Get a beautiful Gmail email signature that makes an impression. Browse Gmail signature templates, learn tips, and easily generate your signature in 2 minutes.",
      "image": [
        {
          "url": "/src/component/Product_updates/template/template-v9.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": "/src/component/Product_updates/template/template-v10.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": "/src/component/Product_updates/template/template-v11.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": "/src/component/Product_updates/template/template-v12.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        }
      ]
    },
    {
      "title": "Email Sign Off",
      "description": "Get a beautiful Gmail email signature that makes an impression. Browse Gmail signature templates, learn tips, and easily generate your signature in 2 minutes.",
      "image": [
        {
          "url": "/src/component/Product_updates/template/template-v13.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": "/src/component/Product_updates/template/template-v14.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": "/src/component/Product_updates/template/template-v15.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": "/src/component/Product_updates/template/template-v16.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        }
      ]
    },
    {
      "title": "Email Signature Banner",
      "description": "Get a beautiful Gmail email signature that makes an impression. Browse Gmail signature templates, learn tips, and easily generate your signature in 2 minutes.",
      "image": [
        {
          "url": "/src/component/Product_updates/template/template-v17.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": "/src/component/Product_updates/template/template-v18.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": "/src/component/Product_updates/template/template-v19.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": "/src/component/Product_updates/template/template-v20.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        }
      ]
    },
    {
      "title": "Handwriteen Signatures",
      "description": "Get a beautiful Gmail email signature that makes an impression. Browse Gmail signature templates, learn tips, and easily generate your signature in 2 minutes.",
      "image": [
        {
          "url": "/src/component/Product_updates/template/template-v21.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": "/src/component/Product_updates/template/template-v22.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": "/src/component/Product_updates/template/template-v23.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        },
        {
          "url": "/src/component/Product_updates/template/template-v24.png",
          "caption": "Just sign in with your Gmail and… you’re done"
        }
      ]
    }
  ]
  

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
