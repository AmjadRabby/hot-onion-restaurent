export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (food) => {
  // console.log(foodId);
  return {
    type: ADD_TO_CART,
    payload: food,
  };
};

export const removeFromCart = (id) => {
  // console.log(id);
return{
  type: REMOVE_FROM_CART,
  payload:id,
}
}
