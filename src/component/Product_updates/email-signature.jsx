import React from "react";
import "./common.css";

export default function Email_signature() {
  return (
    <div className="email-signature">
      <div className="container-fluid">
        <div className="Product_updates_p mt-4">
          <span className="text-dark ">Home /</span> Product Updates
        </div>
        <div className="row gy-4 align-items-center">
          <div className="col-lg-7 pt-5">
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
              alt="Image"
              className="img-fluid w-100"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-7">
            <div className="section-wrapper transparent">
              <h2 className="wp-block-heading">
                How to create a Gmail signature
              </h2>

              <p>There are 3 ways to create your Gmail signature:</p>

              <p>
                <a href="https://www.wisestamp.com/guides/how-to-add-signature-in-gmail/">
                  <strong>1. Manually add a signature in Gmail</strong>
                </a>
              </p>

              <p>
                This option is found in Gmail’s settings. It allows you to add a{" "}
                <strong>simple</strong> email signature in Gmail using the
                in-app signature editor. If this is your preferred option go
                ahead and read our 1-minute step-by-step guide.
              </p>

              <p>
                <a href="#generator">
                  <strong>2. Use a Gmail signature generator</strong>
                </a>
              </p>

              <p>
                The easiest way to create a professional-looking&nbsp;signature
                for Gmail is by using a free generator. The WiseStamp Free
                Signature Generator is the best tool available for creating the
                best looking Gmail signature.
              </p>

              <p>
                <a href="#templates">
                  <strong>
                    3. Use designed Gmail signature templates to create your
                    signature
                  </strong>
                </a>
              </p>

              <p>
                This is a great option if you want to see what worked for other
                people before you. It’s also helpful to get some inspiration and
                a better understanding of what you’d like your signature to
                achieve before you start making it.
              </p>

              <div className="ws-section">
                <div className="ws-image ws-box">
                  <img
                    src="https://www.wisestamp.com/wp-content/uploads/2020/07/Generate-an-HTML-signature-in-Gmail.jpg"
                    loading="lazy"
                    alt="Generate an HTML signature in Gmail"
                    className="w-100"
                  />{" "}
                </div>
                <p className="ws-caption">
                  Just sign in with your Gmail and… you’re done
                </p>{" "}
              </div>

              <h2 className="wp-block-heading" id="generator">
                Gmail signature generator by WiseStamp
              </h2>

              <p>
                Generate a professional Gmail email signature in 2-5 minutes and
                connect to Gmail with 1-click.
              </p>

              <ol className="wp-block-list">
                <li>Add your professional details.</li>

                <li>
                  Go to the&nbsp;<strong>Templates</strong>&nbsp;tab &gt; Choose
                  a designed template.
                </li>

                <li>
                  Go to the&nbsp;<strong>Social</strong>&nbsp;tab &gt; add
                  social media icons and links.
                </li>

                <li>
                  Go to the&nbsp;<strong>Design</strong>&nbsp;tab &gt; refine
                  the design for your signature dividers, icons, and photo.
                </li>

                <li>
                  Go to the&nbsp;<strong>Add-ons</strong>&nbsp;tab &gt; add
                  buttons, banners, legal disclaimer, Instagram gallery, and
                  more useful features. You can add an image or a logo and a lot
                  more.
                </li>

                <li>
                  Click “<strong>OK I’m done</strong>”, and you’re set.
                </li>
              </ol>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
