import React,{useEffect} from "react";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { getById } from "../../products";
import styled from "styled-components";

const product = {
  _id: "3",
  name: "Best Pants",
  category: "Pants",
  desc: "ppdsdnsdnlnsldnlsdlsd sjd sjdjspdjpsj",
  image: "/images/p1v2.png",
  price: 70,
  brand: " Nike",
  rating: 4.5,
  numReviews: 8,
  countInStock: 6,
};

function Product(props) {
  console.log(props.match.params.id);
  const product = getById(props.match.params.id);
  console.log(getById(props.match.params.id));

  useEffect(() => {
    console.log("entere")
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="continer">
      <div className="detail-container">
        <div className="row">
          <div className="col-md-6">
            <div className="imageSilder">
              <Carousel>
                {product.imageSet.map((item) => (
                  <div>
                    <img className="product-image" src={item}/>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="col-md-5">
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.desc}</p>
              <hr></hr>
              <div class="product-price">₹{product.price}</div>
              <div class="product-stock">
                {product.inStock ? (
                  <span className="in">In Stock</span>
                ) : (
                  <span className="out">Out Of Stock</span>
                )}
              </div>
              <hr></hr>
              <div className="contactSeller">Contact Seller</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
