import React from 'react';
import '../App.css';
import { useState } from 'react';

const Cart = (props) => {
  // console.log(props);
  const [sellData, setsellData] = useState([]);

  function SellProduct(item) {


    let sellArr = [...sellData]
    sellArr.push(item)
    setsellData(sellArr)
    // console.log(sellArr); 

    props.addToSellHandler(sellArr);
    // setMainData('')
  }

  return (
    <div className='cart'>
      <h1>Cart data</h1>
      {props.data && props.data?.length > 0 ? (
        <ul>
          {props.data.map((item, index) => {
            return (
              <li key={index} >
                <div>
                  <p>Item Name: {item.itemName}</p>
                  <p>Quantity: {item.itemQuantity}</p>
                  <p>Description: {item.Description}</p>
                  <p>Price: ${item.Price}</p>
                  <img src={item.Image} />
                </div>
                <div>
                  <button className='sellbtn' onClick={() => SellProduct(item)}>Sell</button>
                </div>
                <hr />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
};

export default Cart;