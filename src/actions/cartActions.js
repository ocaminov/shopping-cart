import {
  ADD_PRODUCT,
  CLEAR_CART,
  DECREASE_QUANTITY,
  DELETE_PRODUCT,
  INCREASE_QUANTITY,
} from "../constants/cartActions";

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};

const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

const increaseQuantity = (id) => {
  return {
    type: INCREASE_QUANTITY,
    payload: id,
  };
};

const decreaseQuantity = (id) => {
  return {
    type: DECREASE_QUANTITY,
    payload: id,
  };
};

export {
  addProduct,
  deleteProduct,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
};
