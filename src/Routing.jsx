import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Navbar/Navbar";
import Home from "./component/home/Home";
import About from "./component/About/About";
import Page from "./component/Page/Page";
import Pricing from "./component/Pricing/Pricing";
import Industry from "./component/Industry/Industry";
import Profession from "./component/Profession/Profession";
import Guide from "./component/Guide/Guide";
import Blog from "./component/Blog/Blog";
import Product_updates from "./component/Product_updates/Product_updates";
import Contact from "./component/Contact/Contact";
import Legal from "./component/Legal/Legal";
import Feedback from "./component/Feedback/Feedback";

// auth pages
import SignIn from "./component/SignIn/SignIn";
import ForgetPassword from "./component/ForgetPassword/ForgetPassword";
import ForgetPassword_otp from "./component/ForgetPassword_otp/ForgetPassword_otp";
import ForgetPassword_newPassword from "./component/ForgetPassword_newPassword/ForgetPassword_newPasssword";
import SignUp from "./component/SignUp/SignUp";
import Test from "./component/Test/Test";
import Landing_page from "./component/Landing_page/Landing_page";
import BlogDetail from "./component/Blog/blogDetail";
import ScrollToTop from "./component/ScrollTop";
import Listing_updates from "./component/Product_updates/listing_product";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="/Landing_page" element={<Landing_page />} />
        <Route path="/Page" element={<Page />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/About" element={<About />} />

        <Route path="/Industry" element={<Industry />} />
        <Route path="/Profession" element={<Profession />} />
        <Route path="/Guide" element={<Guide />} />
        <Route path="/Blog" element={<Blog />} />

        <Route path="/Product_updates" element={<Product_updates />} />
        <Route path="/Listing_updates" element={<Listing_updates />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Legal" element={<Legal />} />

        <Route path="/feedback" element={<Feedback />} />
        <Route path="/Blog/:id" element={<BlogDetail />} />

        {/* <Route path="*" element={<PageNotFound />} /> */}
        {/* Auth Routes */}
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/ForgetPassword_otp" element={<ForgetPassword_otp />} />
        <Route
          path="/ForgetPassword_newPassword"
          element={<ForgetPassword_newPassword />}
        />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Landing_page" element={<Landing_page />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
