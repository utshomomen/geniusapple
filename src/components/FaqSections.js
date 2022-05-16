import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';



const FaqSections =()=>  {
  
    return (
      <Faq>
        <h2>Остались вопросы?<span>Faq</span></h2><div className="question">
          <h4>how do i do</h4>
          <div className="answer">
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, sed.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi repudiandae doloribus perspiciatis est?</p>
          </div>
<div className="faq_line"></div>

        </div>
        
        <div className="question">
          <h4>how do i start</h4>
          <div className="answer">
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, sed.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi repudiandae doloribus perspiciatis est?</p>
          </div>

          <div className="faq_line"></div>
        </div>
        
        <div className="question">
          <h4>daily </h4>
          <div className="answer">
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, sed.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi repudiandae doloribus perspiciatis est?</p>
          </div>
          <div className="faq_line"></div>
        </div>
        <div className="question">
          <h4>payments method</h4>
          <div className="answer">
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, sed.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi repudiandae doloribus perspiciatis est?</p>

    

          </div>
          <div className="faq_line"></div>
        </div>
      </Faq>  
     
    );
};
  

const Faq = styled(About)`
display:block ;
span {
  display:block;
}
h2{
  padding-bottom: 2 rem ;
  font-weight:lighter ;
}

.faq_line {
  background :#cccccc;
  height:0.2rem ;

  margin:2rem 0rem;
  width:100%;


}

.question {

  padding:3rem 0rem;
  cursor:pointer;
}
.answer {

padding:3rem 0rem;
p{
  padding:1rem 0rem;
}
}


`;


export default FaqSections;
