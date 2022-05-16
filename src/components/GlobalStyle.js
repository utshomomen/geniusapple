import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle `


*{

  margin: 0;
  padding:0;
  border-size: border-box;
}


body{
  background:#FFF;
  font-family:'Inter', sans-serif;


}

button{
  font-family:'Inter', sans-serif;
  font-weight:bold;
  font-size: 1.1.rem;
  cursor:pointer;
  padding:0.7rem 4rem;
  border:3px solid #29ABE2;
  background:transparent;
  color:#333;
  transition:all 0.5 ease;
  

  &:hover{
  background-color:#29ABE2;
  color:#333;
 


  }




}
p {
  
 
  padding:0rem;
  
  color:#29ABE2;
  font-size:1.4rem;
  line-height:150%;


}

  h2 {
    font-weight:lighter;
    color:#333;
    font-size: 4rem;

  }
  h3{
    color:#333;
    


  }
  h4{
    font-weight:bold;
    color:#333;
    font-size:2rem;
    

  }
  a{
    font-size:1.1rem;
  }

  span{
    
    font-weight:bold;

    color:#333;
  }
  .title{
    
    color:#333;
  }

  .hide  {
    font-weight:lighter;
    color:#333;
    font-size: 4rem;
   
  }

`


export default GlobalStyle;