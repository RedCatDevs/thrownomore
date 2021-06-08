export const CartActionTypes = {
  CART_ADD: 'CART_ADD',
  INCREASE_COUNTER: 'INCREASE_COUNTER',
  DECREASE_COUNTER: 'DECREASE_COUNTER',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

export const CartActions = {
  addToCart: good => ({
    type: CartActionTypes.CART_ADD,
    payload: good,
  }),
  increaseCounter: id => ({
    type: CartActionTypes.INCREASE_COUNTER,
    payload: id,
  }),
  decreaseCounter: id => ({
    type: CartActionTypes.DECREASE_COUNTER,
    payload: id,
  }),
  removeFromCart: id => ({
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: id,
  }),
};
