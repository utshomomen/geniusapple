import React from "react";
//globalStyled
import GlobalStyle from "./components/GlobalStyle";


// import pages
import Home from './pages/Home'


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Home/>
     
    </div>
  );
}

export default App;
