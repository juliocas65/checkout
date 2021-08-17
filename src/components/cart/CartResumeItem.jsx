import React from 'react';
import iconPlus from '@images/plus.svg';
import iconMinus from '@images/minus.svg';
import { connect } from 'react-redux';

import { setProductToCart } from '../../store/actions';

import './cart-resume-item.css'

const CartResumeItem = (props) => {
  const { product } = props;
  const handleSetProductToCart = () => {
    props.setProductToCart(product)
  }
  return (
    <div className="CartResumeItem_cart-resume-container dropdown-item">
      <div>
        <img className="CartResumeItem_product-icon" src={product.img} alt={product.name}></img>
        <span>{product.name}</span>
      </div>
      <div>
          <img className="CartResumeItem_plusminus-icon" src={iconMinus} alt="Minus"></img>
          <span className="badge rounded-pill bg-dark text-white ml-1"> {product.count} </span>
          <img className="CartResumeItem_plusminus-icon" onClick={handleSetProductToCart} src={iconPlus} alt="Plus"></img>
      </div>
      <div>
        <span>Unit price: <strong>${product.price}</strong></span>
      </div>
      <hr className="dropdown-divider"/>
    </div>
  );
}

const mapDispatchToProps = {
  setProductToCart
}

export default connect(null, mapDispatchToProps)(CartResumeItem);