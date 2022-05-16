import React from 'react';
import eclipse from '../img/Ellipse1.svg';
import styled from 'styled-components';
import { About, Description, Image, Hide } from "../styles";

const MainBody = () => {

  return (
  
    <Mainbody>
      
      <DescriptionBody>

        <h1> <span> Почему выбирают наш сервис?</span>
        </h1>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas.</p>

       <Cards>
               <div className="card">

                   <div className="icon">
                         <img alt="icon" src={eclipse} />

                           <h3>	Flexiblity
                           </h3>

    </div>
    <div className="paragraph">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 </p>
            </div>
      </div>

        
          

       <div className="card">

        <div className="icon">
          <img alt="icon" src={eclipse} />

      <h3>User Friendly
      </h3>

    </div>
    <div className="paragraph">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 </p>
            </div>
        </div>
        
       
        <div className="card">

         <div className="icon">
           <img alt="icon" src={eclipse} />

            <h3>Rebust workflow
            </h3>

            </div>
            <div className="paragraph">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 </p>
            </div>
              
            </div>
      
            </Cards>
    
      </DescriptionBody>
      </Mainbody>

    );
          


  };



  const Mainbody = styled.div`
 min-height: 90vh ;
display: flex;
align-items: center;
justify-content: space-around;
padding: 5rem 10rem;
color: #fff; 

h2 {
  padding-bottom: 5rem;

}
p {
  width: 70%;
  padding: 2rem 0rem 4rem 0rem;
}



`;


const DescriptionBody = styled.div`
h1, span {
display:flex ;
align-items:center;
justify-content:center;

}

p {
  
  
  display: flex;

    
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
    
  
}



`;



const Cards = styled.div`

display: flex;
align-items: flex-start;
flex-wrap: nowrap;
height: 250px;

.icon {
  display: flex;
  justify-content:space-evenly;
  


}

h3{

  display: flex;
 
    position: absolute;
    
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top:40px ;
  
}

.paragraph {
   display: flex;
 
 position: relative;
 
 justify-content: center;
 flex-direction: row;
 align-items: center;
 margin-top:20px ;
 margin-left:70px ;
}

`;

export default MainBody;