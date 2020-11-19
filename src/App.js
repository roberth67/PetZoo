import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Main from './components/Main';
function App() {
  const yearActual = new Date().getFullYear();
  return (
    <Fragment>
      <Navbar />
      <Header 
        
      />
      <Slider />
      <Main />
      <Footer
        yearActual = {yearActual}
      />
    </Fragment>
  );
}

export default App;
