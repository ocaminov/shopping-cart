import {
  ADD_PRODUCT,
  CLEAR_CART,
  DECREASE_QUANTITY,
  DELETE_PRODUCT,
  INCREASE_QUANTITY,
} from "../constants/cartActions";

function cartReducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);
    case INCREASE_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
    case DECREASE_QUANTITY:
      const productFound = state.find(
        (product) => product.id === action.payload,
      );
      if (!productFound) {
        return state;
      }
      if (productFound.quantity > 1) {
        return state.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        });
      } else if (productFound.quantity === 1) {
        return state.filter((product) => product.id !== action.payload);
      }

    case CLEAR_CART:
      return [];

    default:
      return state;
  }
}

export default cartReducer;
