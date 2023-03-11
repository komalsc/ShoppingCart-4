import { TextUnderline } from "phosphor-react";
import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1 className="heading">WELCOME TO OUR SHOPPING CART</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product,i) => (
          <div key={i}>
          <Product data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
