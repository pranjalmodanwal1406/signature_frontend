import React from "react";
import "./Product_updates.scss";
import Footer from "../Footer/Footer";
import image1 from "./images/Product_updates.png";

function Product_updates() {
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
          <span className="text-dark">Home /</span> Product Updates
        </div>
      </div>

      <div className="Product_updates">
        {/* left section */}
        <div className="row gy-4  pb-5 align-items-center">
          <div className="col-lg-7">
            <h1>Create a professional signature in Gmail</h1>
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
        <div className="left">
          {/* Section left1 */}

          <div className="Product_updates_1">
            <div className="image_section">
              <img src={image1} alt="" />
              <div className="Product_updates_content">
                <p className="Product_updates_para1">
                  Discover the latest feature, release, improvements and
                  updates.
                </p>
                <p className="Product_updates_para2">
                  Discover the latest feature, release, features and
                  improvements.
                </p>
                <p className="Product_updates_para3">
                  by Joanna Wellick __ 2 minutes ___718k views
                </p>
              </div>
            </div>

            {/* Section left2 */}
            <div className="Product_updates_content_para">
              <p className="left2_para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                unde, corporis veritatis exercitationem natus accusamus
                voluptate. Eligendi, velit nobis hic totam vel dignissimos error
                maiores dolorem ex laborum pariatur ipsam.
              </p>
              <p className="left2_Para2">
                <hr></hr>
                Provident aliquam sit praesentium et quidem, ullam reiciendis
                quaerat quibusdam. Fugit, autem.
                <p className="small_para"> nsjbdhsghghd jszhdgsd</p>
                <hr></hr>
              </p>
              <p className="left2_para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                unde, corporis veritatis exercitationem natus accusamus
                voluptate. Eligendi, velit nobis hic totam vel dignissimos error
                maiores dolorem ex laborum pariatur ipsam. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Recusandae quos laudantium
                cumque. Necessitatibus provident autem, aspernatur soluta aut
                suscipit eos exercitationem adipisci? Quidem perspiciatis error
                placeat quas blanditiis magnam distinctio.
                <br></br>
                <br></br>Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Fuga voluptas, obcaecati temporibus impedit dolores
                architecto? Repellendus perferendis ducimus reiciendis
                labore.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quas aperiam beatae impedit optio a adipisci explicabo. Tempora
                facere harum ad?
                <br></br>
                <br></br>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Facilis in neque fuga suscipit corporis quidem modi
                consectetur, aliquam quas ducimus.
                <br></br>
                <br></br>
                <br></br>
                <br></br>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quam, suscipit! Qui eveniet, velit, vel nostrum quos
                doloribus fugiat consequuntur omnis inventore sit, error ad.
                Temporibus suscipit similique, placeat, in incidunt animi magnam
                aut, amet dolorem laboriosam odio dicta consequuntur sint.
              </p>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="profile-section">
            <h4 className="text-start w-100 d-flex">Related Articles</h4>
            {profiles.map((profile, index) => (
              <div className="profile-card" key={index}>
               
                <div className="profile-name">{profile.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product_updates;
