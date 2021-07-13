import React from 'react';
import './footer.css';
// import bodyParser from 'body-parser';
// import request from 'request';



function Footer()
{
   return <div class = "footer header"> 
  <div class="content">
    <div class="top">
      <div class="logo-details">
        <span class="logo_name"> <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png" /> MICROSOFT</span>
      </div>
      <div class="media-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
    <div class="link-boxes">
      <ul class="box">
        <li class="link_name">Small Business</li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Microsoft App </a></li>
        <li><a href="#"> Meetings</a></li>
        <li><a href="#">Calling</a></li>
        <li><a href="#">Messaging</a></li>
        <li><a href="#">Screen Sharing</a></li>
      </ul>
      <ul class="box">
        <li class="link_name"> Enterprise</li>
        <li><a href="#"> Microsoft Suite</a></li>
        <li><a href="#">Calling </a></li>
        <li><a href="#"> Meetings</a></li>
        <li><a href="#">Messaging</a></li>
        <li><a href="#">Slido</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Contact Center</a></li>
        <li><a href="#">Experience Management</a></li>
        <li><a href="#">imimobile</a></li>
        <li><a href="#">Security</a></li>
        <li><a href="#">Control Hub</a></li>
      </ul>
      <ul class="box">
        <li class="link_name">Devices</li>
        <li><a href="#">Headsets</a></li>
        <li><a href="#">Cameras</a></li>
        <li><a href="#">Desk Series</a></li>
        <li><a href="#">Room Series</a></li>
        <li><a href="#">Board Series</a></li>
        <li><a href="#">Phone Series</a></li>
        <li><a href="#">Accessories</a></li>
      </ul>
      <ul class="box">
        <li class="link_name">Solutions For</li>
        <li><a href="#">Education</a></li>
        <li><a href="#">Healthcare</a></li>
        <li><a href="#">Financial Services</a></li>
        <li><a href="#">Government</a></li>
        <li><a href="#">Startups</a></li>
        <li><a href="#">Sports & Entertainment</a></li>
        <li><a href="#">Hybrid Work</a></li>
        <li><a href="#">Future of Work</a></li>
      </ul>
      <ul class="box">
        <li class="link_name">Resources</li>
        <li><a href="#">Downloads</a></li>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Join a Test Meeting</a></li>
        <li><a href="#">Online Classes</a></li>
        <li><a href="#">Integrations</a></li>
        <li><a href="#">Accessibility</a></li>
        <li><a href="#">Inclusivity</a></li>
        <li><a href="#">Webinars, Events & Demos</a></li>
        <li><a href="#">Microsoft Community</a></li>
      </ul>
      <ul class="box input-box">
        <li class="link_name">Subscribe</li>
        <li><input type="text" placeholder="Enter your email"/></li>
        <li><input type="button" value="Subscribe"/></li>
      </ul>
    </div>
  </div>
  <div class="bottom-details">
    <div class="bottom_text">
      <span class="copyright_text">Copyright © 2021 <a href="#">MICROSOFT.</a>All rights reserved</span>
      <span class="policy_terms">
        <a href="#">Privacy policy</a>
        <a href="#">Terms & condition</a>
      </span>
    </div>
  </div>

  </div>


}


export default Footer;