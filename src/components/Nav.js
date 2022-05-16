import React from 'react'
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Nav =()=> {
  return (
    <StyledNav>
      <h1><a id="logo" href="#">GeniusApple </a></h1>
      <ul>


      <li>
  <Link className="link" to="/"> Home</Link>
</li>
<li>
  <Link className="link" to="/aboutus"> About Us</Link>
</li>

<li>
  <Link className="link" to="/ourclient">Our client</Link>
</li>

<li>
  <Link  className="link" to="/contactus">Contact Us</Link>
</li>

</ul>
       
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  
  min-height:10vh ;
  display:flex;
  margin:auto;
  justify-content:space-between;
  align-items:center;
  padding:1rem 10rem;
  /* background: #191144; */
   background: #0071BC; 

  .link{
    color: #fff ;
    text-decoration:none;
    font-size:1rem ;
    font-weight:lighter ;
  }
  ul{
display:flex;
list-style:none ;



  }
  #logo {
    font-size:2rem ;
    font-family:'Inter', sans-serif;
    font-weight:lighter ;
    text-decoration:none;
    color: #fff ;
  }
  li {

    padding-left:10rem;
    position:relative ;
    text-decoration:none;
  
  }


`;

export default Nav;


{/* <ul>
<li>
  <Link className="link" to="/aboutus"> About Us</Link>
</li>

<li>
  <Link className="link" to="/ourclient">Our client</Link>
</li>

<li>
  <Link  className="link" to="/contactus">Contact Us</Link>
</li>

</ul> */}



// <h1><a id="logo" href="#">GeniusApple </a></h1>
// <ul>
//     <li>
//       <Link to="/">Home</Link>
//   </li>
//   <li>
//       <Link to="/ourclient">Our client</Link>
//     </li>
//     <li>
//       <Link to="/aboutus">About</Link>
//     </li>
//     <li>
//       <Link to="/contactus">Contact Us</Link>
//     </li>
//   </ul>