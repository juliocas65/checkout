const reducer = (state, action) => {
  const handleCartProducts = (listAllProducts, listResume, product) => {
    const countArray = listAllProducts.filter((prod) => prod.id === product.id);
    const count = countArray.length + 1;
    const resume = {...product, count};
    let productIndex = 0;
    listResume.every((prod) => {
      if (prod.id === product.id) {
        return false;
      }
      productIndex++;
      return true;
    });
    listResume[productIndex] = resume;
    return listResume;
  };
  switch(action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        productList: action.payload
      }
      case 'SET_PRODUCT_TO_CART':
        return {
          ...state,
          cartProductList: [...state.cartProductList, action.payload],
          cartProductResume: handleCartProducts(state.cartProductList, state.cartProductResume, action.payload),
        }
    default:
      return state;
  }
}

export default reducer;