import React, { useContext } from 'react';
import DataContext from '../DataContext';

const Card = ({ item, index }) => {
  const { handleQuantityChange } = useContext(DataContext);
  const quantityOptions = [];
  for (let i = 0; i <= item.stock; i++) {
    quantityOptions.push(<option key={i} value={i}>{i}</option>);
  }

  return (
    <div className="cart-item d-md-flex justify-content-between">
      <span className="remove-item"><i className="fa fa-times"></i></span>
      <div className="px-3 my-3">
        <a className="cart-item-product" href="#">
          <div className="cart-item-product-thumb"><img src={item.thumbnail} alt="Product" /></div>
          <div className="cart-item-product-info">
            <h4 className="cart-item-product-title">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </a>
      </div>
      <div className="px-3 my-3 text-center">
        <div className="cart-item-label">Quantity</div>
        <div className="count-input">
          <select className="form-control" value={item.selectedQuantity} onChange={(event) => handleQuantityChange(index, event)}>
          {quantityOptions}
          </select>
        </div>
      </div>
      <div className="px-3 my-3 text-center">
        <div className="fw-bold">${item.price}</div>
      </div>
    </div>
  );
};

export default Card;
