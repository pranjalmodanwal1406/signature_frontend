import React from "react";
import "./Blog_specification.scss";
import Footer from "../Footer/Footer";
import Blog_specification_img from "./images/Blog_specific_1.png";
import Test from "../Test/Test.jsx";

function Blog_specification() {
    return (
        <>
            <div className="Blog_specification">
                {/* Section 1 */}
                {/* <div className="Blog_specification_img_1">
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
                </div> */}
                <div className="Blog_spec_section1">
                <Test />
                </div>

                {/* Section 2 */}
                <div className="Blog_specification_section2">
                    <div className="left_div">
                        <p className="Blog_specification_section2_p1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            <br />
                            <br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>

                        <h1 className="Blog_specification_h1">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                        </h1>

                        <p className="Blog_specification_section2_p1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            <br />
                            <br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>

                        <h1 className="Blog_specification_h1">
                            Contrary to popular belief
                        </h1>

                        <p className="Blog_specification_section2_p1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            <br />
                        </p>

                        <ul className="Blog_specification_section2_ul">
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        </ul>

                        <p className="Blog_specification_section2_p1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            <br />
                        </p>
                    </div>


                    <div className="right_div">
                        <p className="right_div_p">views
                            <br/>
                            1.6K
                            <br/>
                            shares
                            <br/>
                            996K
                            <br/>
                            125
                            <br/>
                            425</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blog_specification;
