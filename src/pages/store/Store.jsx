import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setProducts } from '../../store/actions/index.js';

import productFromService from '../../domain/ProductsList'

import Card from '@components/card/Card';

const Store = (props) => {
  const handleSetProducts = () => {
    props.setProducts(productFromService);
  }
  useEffect(() => {
    handleSetProducts();
  })
  const { productList } = props;
  return (
    <>
      <div className="container-fluid">
        <div >
          <div className="d-flex justify-content-start">
            <div class="card-deck pb-3">
              { (productList && productList.length > 0) && (
                productList.map(product => (
                  <Card
                    key={product.id}
                    product={product}>
                  </Card>
                )))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  setProducts,
}

const mapStateToProps = state => {
  return {
    productList: state.productList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store)