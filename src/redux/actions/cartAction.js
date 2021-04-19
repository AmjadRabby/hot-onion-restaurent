export const ADD_TO_CART = 'ADD_TO_CART'

export const addToCart = (foodId) => {
  return {
    type: ADD_TO_CART,
    payload: foodId,
  };
};