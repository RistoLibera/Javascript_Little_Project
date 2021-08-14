import React from "react";
import { ProductsData } from "./ProductsData";

const Product = (props) => {
  let catalog = props.catalog;

  const products = () => {
    let rendered = ProductsData.map((product, index) => {
      if(product.catalog === catalog) {
        return(
          <div className="info" key={index}>
            <h3>{product.name}</h3>
            <p>{product.info}</p>
          </div>
        )
      } else {
        return ""
      }
    });

    return rendered;
  }

  return(
    <div className="shopping">
      <div className="container">
        <h1>{catalog}</h1>
      </div>

      <div className="products">
        {products()}
      </div>

    </div>


  );
};

export default Product;