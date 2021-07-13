import React from 'react';
import Button from './button.jsx'
import './navbar.css';
import {Link} from 'react-router-dom'
//import Login from '/Users/nikitaporia/Desktop/microsoft-teams/microsoft-teams/src/components/login/login.jsx'


window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })


function Navbar()
{
    return <div> 
    <header class = "header">
  <a href="#" class="logo"> <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png" />
  &nbsp;Microsoft </a>
  <nav >
    <ul>
      <li><a class = "nav-link nav-link-ltr" href="#">Products   <i class="fa fa-caret-down"></i></a></li>
      <li><a class = "nav-link nav-link-ltr" href="#">Solutions   <i class="fa fa-caret-down"></i></a></li>
      <li><a class = "nav-link nav-link-ltr" href="#">Resources   <i class="fa fa-caret-down"></i></a></li>
      <li><a class = "nav-link nav-link-ltr" href="#">Pricing</a></li>
      <li><a class = "nav-link nav-link-ltr" href="#">Download Teams</a></li>
      <li> <Link to = "/Login">   <Button message = "Start for free" /> </Link> </li>
    </ul>

  </nav>

</header>
  

<section class="banner"></section>

   </div>
}

export default Navbar;