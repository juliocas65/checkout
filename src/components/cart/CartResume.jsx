import React from 'react';
import CartResumeItem from '../cart/CartResumeItem';
import { connect } from 'react-redux';

const CartResume = (props) => {
  const { cartProductList, cartProductResume } = props;
  const getCartProductListTotal = () => {
    return cartProductList.reduce((acc, cur) => acc + cur.price, 0);
  }
  return (
    cartProductResume.length === 0 ? (
      <div className="dropdown-item m-1">
        Your cart is empty.
      </div>
    ) : (
      <div className="justify-content-center">
        <h6 class="dropdown-header">Your cart:</h6>
        { cartProductResume.map(product => (
          <CartResumeItem
            key={product.name}
            product={product}
          />
        ))}
        <div className="d-flex justify-content-left pl-1">
          <h6><span>Total: <strong>${getCartProductListTotal()}</strong></span></h6>
        </div>
        <div className="d-flex justify-content-center m-1">
          <button className="btn bg-dark text-white">Go to Checkout</button>
        </div>
      </div>
    )
  )
}

const mapStateToProps = state => {
  return {
    cartProductList: state.cartProductList,
    cartProductResume: state.cartProductResume
  }
}

export default connect(mapStateToProps, null)(CartResume)