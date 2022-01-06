import React from 'react';
import eclipse from '../img/Ellipse1.svg';

const MainBody = () => {

  return (
  
    <div className="mainbody">
      
      <div className="description">

        <h1> <span> Man-made features</span>
        </h1>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br>
             </br> Deleniti soluta dolores sunt debitis id.
           </p>
             
               <div className="card">

                   <div className="icon">
                         <img alt="icon" src={eclipse} />

                           <h3>	Flexiblity
                           </h3>

    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.
    </p>
      </div>

      <div className="cards">
  <div className="card">

    <div className="icon">
      <img alt="icon" src={eclipse} />

      <h3>User Friendly
      </h3>

    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing.
    </p>
        </div>
        
        <div className="cards">
        <div className="card">

         <div className="icon">
           <img alt="icon" src={eclipse} />

            <h3>Rebust workflow
            </h3>

               </div>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing.
                 </p>
            </div>
      </div>
       
     </div>
      </div>
      </div>

    );
          


  };


export default MainBody;