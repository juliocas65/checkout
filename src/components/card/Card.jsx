import React from 'react';
import { connect } from 'react-redux';
import { setProductToCart } from '../../store/actions'

import './card.css';

const Card = (props) => {
  const { product } = props;
  const handleSetProductToCart = () => {
    props.setProductToCart(product)
  }
  return (
    <div className="card Card__container">
      <img src={product.img} className="card-img-top Card__img-container" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <h5 className="card-title">${product.price}</h5>
        <h5><span className="badge bg-danger text-white">{product.discount*100}%</span></h5>
      </div>
      <button className="btn bg-dark text-white" onClick={handleSetProductToCart}>Add to Cart</button>
    </div>
  )
}

const mapDispatchToProps = {
  setProductToCart,
}

export default connect(null, mapDispatchToProps)(Card)