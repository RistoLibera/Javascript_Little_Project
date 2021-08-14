import React, { useState, useEffect } from "react";

const Cart = (props) => {
  const [items, setItems] = useState([]);

  let newItem = props.product

  const addItem = () => {
    if (newItem) {
      setItems(newItem)
    }
  };

  console.log(items)
  const listItems = () => {
    let list 
    if (items.length > 0) {
      list = items.map((item, index) => {
        return (
          <div className="item" key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.info}</p>
          </div>
        )
      })
    }

    return list;
  }

  console.log(listItems())

  useEffect(() => {
    addItem()
  }, [newItem])

  return(
    <div className="container">
      <h1>Cart</h1>
      <div>{listItems()}</div>
    </div>
  )
};

export default Cart;