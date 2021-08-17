import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => (
  <>
    <span> I'm Checkout page </span>
    <Link to="/payment">
      <span>Go to Payment</span>
    </Link>
  </>
);
export default Checkout;