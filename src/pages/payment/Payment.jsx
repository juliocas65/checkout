import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => (
  <>
    <span> I'm Payment page </span>
    <Link to="/">
      <span>Go to Store</span>
    </Link>
  </>
);
export default Payment;