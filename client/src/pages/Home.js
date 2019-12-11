import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel/carousel";
import logo from "../img/Heart_Blue.svg";
import Footer from "../components/Footer";

class Home extends Component {




  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <img src={logo} className="App-logo" alt="logo" />       
        </div>
        <h2 className="text-center">Welcome To GetHealthy</h2>
        <img src="./img/meds.jpg" />  
        <Carousel />

				<Footer />
      </div>
    );
  }
}

export default Home;
