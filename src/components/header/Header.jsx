import React from 'react';
import iconHeader from '@images/store-header.png';
import iconCart from '@images/cart.jpg';
import { connect } from 'react-redux';
import './header.css'
import CartResume from '../cart/CartResume';

const Header = (props) => {
  const { cartProductList } = props;
  const getCartProductListCount = () => {
    return cartProductList.length
  }
  return (
    <>
      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-6 col-md-10 d-grid justify-content-start">
            <img className="img-fluid Header_logo" src={iconHeader} alt="store" />
          </div>
          <div className="col-6 col-md-2 d-grid justify-content-end">
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" data-bs-display="static" aria-haspopup="true" aria-expanded="false">
                <img className="img-fluid Header_logo" src={iconCart} alt="store" />
                <span className="badge rounded-pill bg-dark text-white"> {getCartProductListCount()} </span>
              </button>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <CartResume />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="Header_headband d-flex justify-content-center">
          <span className="font-weight-bold">¡Buy now!</span>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    cartProductList: state.cartProductList
  }
}

export default connect(mapStateToProps, null)(Header)