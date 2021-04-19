import { ADD_TO_CART } from "../actions/cartAction";

const initialState = {
  cart: [],
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = {
        foodId: action.payload,
        cartId: state.cart.length + 1,
      };
      const newCart = [...state.cart, newItem];
      return { ...state, cart: newCart };

    default:
      return state;
  }
};

export default cartReducers;
