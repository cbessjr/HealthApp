import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import logo from '../img/HealthAppLogoAnimated.gif';
import Footer from '../components/Footer';
import Unsplash from '../components/Unsplash';

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
          <Unsplash />
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
