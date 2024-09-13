import React from 'react'
import './About.scss'
import about1 from './image/about1.png';
import Footer from '../Footer/Footer';

import { Link } from 'react-router-dom';
function About() {
  console.log('About component rendered');
  return (
    <div className='about'>
      <div className='about1'>

        <div className="left">
          <h1><span>Jean Joe</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti fuga nulla iusto, cum, sint itaque dolorem molestiae ipsam ratione consequuntur quod asperiores? Totam numquam<br></br><br></br> quam inventore? Et eveniet, cum doloremque, blanditiis possimus animi ipsum doloribus a placeat cupiditate delectus quidem quasi corporis hic earum debitis repellat temporibus aut suscipit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero error facere ipsam suscipit quo rerum? Repellendus nostrum dolores<br></br><br></br> odio sunt. Saepe nemo beatae ipsam. Ullam, voluptas ratione corporis consequatur tempore ipsum nisi voluptatibus inventore iure distinctio animi voluptatem perferendis, ea earum, tempora odio. Tenetur ex vitae ullam beatae nesciunt nostrum?</p>
        </div>
        <div className="about_img_1">
          <img src={about1} alt="" />
        </div>
      </div>

      {/* section 2 */}
      <div className='about2'>
        <p>Are you ready to transfrom your booring Email to professional Email with us
        </p>
        <button className='about-button'>
          Make an Appointment
        </button>
      </div>

      {/* section 3 */}
      <div className='about3'>
        <h2>Subscribe to our Newsletter</h2>
        <h5>we recommend you to subscribe to our newsletter, drop <br></br> your email below to get daily updat eabout us </h5>
        <button className='about-button3'>
          Subscribe
        </button>
      </div>



      <Footer />
    </div>
  )
}

export default About