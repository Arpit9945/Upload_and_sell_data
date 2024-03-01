import React, { useState } from 'react';

const Sell = (props) => {
  // console.log(props);

  const [sellItems, setSellItems] = useState(props.data);

  console.log(sellItems);

  const RemoveSell = (index) => {
    // console.log(index);
    // let soldItems = sellItems.splice(index, 1)
    // setSellItems(soldItems)

    let soldItems = [...sellItems]
    soldItems.splice(index, 1)
    setSellItems(soldItems);
    props.addToSellHandler(soldItems);
  }
  
  return (
    <div className='sell'>
      <h1>Sell data</h1>
      <ul>
        {props.data.map((item, index) => (
          <li key={index}>
            <img src={item.Image} alt='Loading...' />
            <p>{item.itemName}</p>
            <p>{item.Description}</p>
            <p>${item.Price}</p>
            <button className='sellBtn' onClick={ () =>{ RemoveSell(index) }}>Remove to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sell;
