import React, { useState } from "react";
import { ProductsData } from "./ProductsData";
import Cart from './Cart';

const Product = (props) => {
  const [added, setAdded] = useState([]);
  let catalog = props.catalog;

  const addProduct = (product) => {
    setAdded(added.concat(product))
  };

  const products = () => {
    let rendered = ProductsData.map((product, index) => {
      if(product.catalog === catalog) {
        return(
          <div className="info" key={index}>
            <h3>{product.name}</h3>
            <p>{product.info}</p>
            <button onClick={() =>addProduct(product)}>Add to cart</button>
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
      
      <Cart product={added} />
    </div>


  );
};

export default Product;