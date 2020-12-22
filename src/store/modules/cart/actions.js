export function addToCartRequest(id){
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSucess(product){
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}
