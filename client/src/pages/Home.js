import React, { Component } from 'react';
import Navbar from '../components/Navbar';
// import Carousel from '../components/Carousel/carousel';
import logo from '../img/HealthAppLogoAnimated.gif';
import Footer from '../components/Footer';
import Unsplash from '../components/Unsplash';
// import ModalAbout from '../components/ModalAbout';

class Home extends Component {

  render() {
    return (
      <>
        <Navbar />
      
      <div className="App">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h2 className="text-center">Welcome To GetHealthy</h2>
        {/* <Carousel /> */}
        <Unsplash />
        <Footer />
      </div>
      </>
    );
  }
}

export default Home;
