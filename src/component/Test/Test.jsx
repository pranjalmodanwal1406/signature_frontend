import React from "react";
import "./Test.scss";
import Footer from "../Footer/Footer";
import Blog_specification_img from "./images/Blog_specific_1.png";

function Test() {
    return (
        <>
            <div className="Blog_specification">
                {/* Section 1 */}
                <div className="Blog_specification_img_1">
                    <img src={Blog_specification_img} alt="" />
                    <div className='Blog_specification1_box'></div>
                    <div className='Blog_specification1_content'>
                        <h1 className='Blog_specification1_content_h1'>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
                        <p className='Blog_specification1_p1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque harum <br></br> distinctio sed cupiditate, consequatur laborum?</p>
                        <p className="Blog_specification1_p2">
                            by Joanna Wellick
                            ___2 minute read
                            ___1.6K views
                            ___1.2K shares</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Test;
