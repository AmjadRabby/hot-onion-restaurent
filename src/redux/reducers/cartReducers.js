import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";

const initialState = {
  cart: [],
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = {
        food: action.payload,
        cartId: state.cart.length + 1,
      };
      const newCart = [...state.cart, newItem];
      return { ...state, cart: newCart };
    case REMOVE_FROM_CART:
      const removeId = action.payload;
      const newFoodCart = state.cart.filter(food => food.cartId !== removeId)
      return { ...state, cart: newFoodCart };
    default:
      return state;
  }
};

export default cartReducers;
