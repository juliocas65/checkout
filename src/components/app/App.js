import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Store from '@pages/store/Store'
import Checkout from '@pages/checkout/Checkout'
import Payment from '@pages/payment/Payment'
import Layout from '@components/layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Store} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/payment" component={Payment} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
