import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/banner1.png";
import product from "../../assets/product.png";
import "./style.css";
import { products } from "../../products";

function Home(props) {
  const onNavigate = (path) => {
    console.log(props);
    props.history.push(path);
  };

  return (
    <div className="continer">
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
              <img className="img-fluid" src={product}></img>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container">
        <div class="row">
          {products.map((product) => (
            <div key={product._id} class="col-md-3">
              <div
                class="card product-item"
                onClick={() => {
                  onNavigate(`/product/${product._id}`);
                }}
              >
                <img
                  class="card-img-top"
                  src={product.image}
                  alt="Card image cap"
                />
                <div class="overlay"></div>
                <div class="card-body">
                  <h5 class="card-title title">{product.name}</h5>
                  <p class="card-text desc"> {product.shortDesc}</p>
                  <p class="card-text product-price-home">₹40</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
