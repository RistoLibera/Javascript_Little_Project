import React, { useState, useEffect } from "react";

const Cart = (props) => {
  const [items, setItems] = useState([]);
  let newItem = props.product;
  let times = props.times;

  const addItem = () => {
    if (newItem) {
      setItems(items.concat(newItem))
    }
    newItem = []
  };

  const deleteItem = (index) => {
    let renewed = [...items]
    renewed.splice(index, 1)
    setItems(renewed)
  }

  const listItems = () => {
    let list 
    if (items.length > 0) {
      list = items.map((item, index) => {
        return (
          <div className="item" key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.info}</p>
            <button onClick={() => deleteItem(index)}>cancel</button>
          </div>
        )
      })
    }

    return list;
  }

  useEffect(() => {
    addItem()
  }, [newItem, times])

  return(
    <div className="big-cart">
      <h1>Cart</h1>
      <div className="list">{listItems()}</div>
    </div>
  )
};

export default Cart;