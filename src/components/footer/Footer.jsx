import React from 'react';
import storeLogoFooter from '@images/store-header.png';
import './footer.css';

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="justify-content-center Footer_footband">
          <div className="row d-flex justify-content-center">
            <img className="img-fluid Footer__logo" src={storeLogoFooter} alt="Store"></img>
          </div>
          <div className="row d-flex justify-content-center">
            <strong><h5>Buy easy, pay easy.</h5></strong>
          </div>
        </div>
        <div className="d-flex justify-content-center Footer_container">
          <div className="d-flex justify-content-center">
            <span>All rights reserved 2021.</span>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer;