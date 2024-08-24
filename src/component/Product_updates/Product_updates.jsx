import React from "react";
import "./Product_updates.scss";
import Footer from "../Footer/Footer";
import image1 from "./images/Product_updates.png";

function Product_updates() {
    const profiles = [
        {
          name: 'John Doe',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Jane Smith',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Mike Johnson',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Emily Davis',
          image: 'https://via.placeholder.com/150',
        },
      ];
    return (
        <>
            <div className="Product_updates">
                {/* left section */}
                <div className="left">
                    <div className="Product_updates_p">Product Updates</div>
                    {/* Section left1 */}
                    <div className="Product_updates_1">
                        <div className="image_section">
                        <img src={image1} alt="" />
                        <div className="Product_updates_content">
                            <p className="Product_updates_para1">Discover the latest feature, release, improvements and updates.</p>
                            <p className="Product_updates_para2">Discover the latest feature, release, features and improvements.</p>
                            <p className="Product_updates_para3">by Joanna Wellick __ 2 minutes  ___718k views</p>
                        </div>
                        </div>

                        {/* Section left2 */}
                        <div className="Product_updates_content_para">
                            <p className="left2_para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit unde, corporis veritatis exercitationem natus accusamus voluptate. Eligendi, velit nobis hic totam vel dignissimos error maiores dolorem ex laborum pariatur ipsam.</p>
                            <p className="left2_Para2">
                                <hr></hr>
                                Provident aliquam sit praesentium et quidem, ullam reiciendis quaerat quibusdam. Fugit, autem.
                                <p className="small_para"> nsjbdhsghghd jszhdgsd</p>
                                <hr></hr>
                            </p>
                            <p className="left2_para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit unde, corporis veritatis exercitationem natus accusamus voluptate. Eligendi, velit nobis hic totam vel dignissimos error maiores dolorem ex laborum pariatur ipsam.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quos laudantium cumque. Necessitatibus provident autem, aspernatur soluta aut suscipit eos exercitationem adipisci? Quidem perspiciatis error placeat quas blanditiis magnam distinctio.
                                <br></br><br></br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptas, obcaecati temporibus impedit dolores architecto? Repellendus perferendis ducimus reiciendis labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aperiam beatae impedit optio a adipisci explicabo. Tempora facere harum ad?
                                <br></br><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis in neque fuga suscipit corporis quidem modi consectetur, aliquam quas ducimus.
                                <br></br><br></br><br></br><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, suscipit! Qui eveniet, velit, vel nostrum quos doloribus fugiat consequuntur omnis inventore sit, error ad. Temporibus suscipit similique, placeat, in incidunt animi magnam aut, amet dolorem laboriosam odio dicta consequuntur sint.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="profile-section">
                        {profiles.map((profile, index) => (
                            <div className="profile-card" key={index}>
                                <div className="profile-image">
                                    <img src={profile.image} alt={profile.name} />
                                </div>
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
