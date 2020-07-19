import React, { useState } from "react";
import Navbar from "../../components/NavBar";
import banner from "../../assets/banner1.png";
import product from "../../assets/product.png";
import "./style.css";

function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="continer">
      <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar}>
        <a href="/#home">Home</a>
        <a href="/#gallery">Contact</a>
      </Navbar>
      <div
        className="main_banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className=" full-height">
          <div className="row full-height">
            <div className=" col-md-5">
              <div className="banner_content">
                <h1> Wear the Style</h1>
                <h2>Wear your mask</h2>
              </div>              
            </div>
            <div className=" product col-md-6">
                <img  className="img-fluid" src={product}></img>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
