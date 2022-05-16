import React from "react";
import styled from "styled-components";

const FooterMain = () => {

  return (
    <Footer>
      <Innerfooter>
  
       
        <FooterItems>
          <h1>GENIUSAPPLE</h1>
          <p>Copyright &copy; utshomomen.com</p>
        </FooterItems>
  
        
        <FooterItems>
          <h3>Quick Links</h3>
          <Border> 
          <ul>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>Search</li></a>
            <a href="#"><li>Contact</li></a>
           
            </ul>
            
            </Border>
        </FooterItems>
  
      
        <FooterItems>
          <h3>Recipes</h3>
          <Border> 
          <ul>
            <a href="#"><li>Indian</li></a>
            <a href="#"><li>Chinese</li></a>
            <a href="#"><li>Mexican</li></a>
            
            </ul>
            
            </Border> 
        </FooterItems>
  
       
        <FooterItems>
          <h3>Contact us</h3>
          <Border>
          <ul>
            <li><i class="fa fa-map-marker" aria-hidden="true"></i>XYZ</li>
            <li><i class="fa fa-phone" aria-hidden="true"></i>123456789</li>
            <li><i class="fa fa-envelope" aria-hidden="true"></i>xyz@gmail.com</li>
          </ul>
          </Border>
          
          <Socialmedia>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-google-plus-square"></i></a>
          </Socialmedia>

        </FooterItems>

      </Innerfooter>
    
     
      <FooterBottom>
        
      </FooterBottom>


    </Footer>
  );



};

const Footer = styled.div`
	width: 100%;
background: #191144;
display: block;
`; 


const Innerfooter = styled.div`

	 width: 95%;
	 margin: auto;
	 padding: 30px 10px;
	 display: flex;
	 flex-wrap: wrap;
	 box-sizing: border-box;
	 justify-content: center;
 
`;

const FooterItems = styled.div` 
	width: 25%;
	padding: 10px 20px;
	box-sizing: border-box;
	color: #fff;

p{
  font-size: 16px;
	text-align: justify;
	line-height: 25px;
	color: #fff;
}
h1{
  color: #fff;
}

`;



const Border = styled.div` 
	height: 3px;
	width: 40px;
	/* background: #ff9800;
	color: #ff9800;
	background-color: #ff9800; */
	border: 0px;

  ul {
	list-style: none;
	color: #fff;
	font-size: 15px;
	letter-spacing: 0.5px;	
 }

ul a {
	text-decoration: none;
	outline: none;
	color: #fff;
	transition: 0.3s;
}

ul a:hover {
	color: #ff9800;
}

ul li {
	margin: 10px 0;
	height: 25px;
}

li i {
	margin-right: 20px;
}

`;



const Socialmedia = styled.div` 
	width: 100%;
	color: #fff;
	text-align: center;
	font-size: 20px;

  a{
    text-decoration: none;
  }

i{
	height: 25px;
	width: 25px;
	margin: 20px 10px;
	padding: 4px;
	color: #fff;
	transition: 0.5s;

}

i:hover{
  transform: scale(1.5);
}
`;


const FooterBottom = styled.div`
	padding-top: 60px;
	background: #191144;
	color: #fff;
	font-size: 12px;
	text-align: center;
`;




export default FooterMain;