import {useContext} from 'react';
import {store} from '../context';
import {CartActions} from '../context/actions';

export const useThisGood = id => {
  const globalState = useContext(store);
  const {state, dispatch} = globalState;
  const {cartItems} = state;

  const thisGoodInCart = cartItems?.find(cartItem => cartItem.id === id);
  const thisGoodNumberInCart = thisGoodInCart?.counter;

  const increaseCounter = () =>
    dispatch(CartActions.increaseCounter(thisGoodInCart.id));
  const decreaseCounter = () =>
    dispatch(CartActions.decreaseCounter(thisGoodInCart.id));
  const removeFromCart = () =>
    dispatch(CartActions.removeFromCart(thisGoodInCart.id));

  return {
    thisGoodInCart,
    thisGoodNumberInCart,
    increaseCounter,
    decreaseCounter,
    removeFromCart,
  };
};

export const useTotalInfo = () => {
  const globalState = useContext(store);
  const {state, dispatch} = globalState;
  const {cartItems} = state;

  const itemsLength = cartItems?.reduce((acc, cur) => {
    return acc + cur?.counter;
  }, 0);

  const totalPrice = cartItems
    .reduce((acc, cur) => {
      const currentPrice = cur.price * cur.counter;
      return acc + currentPrice;
    }, 0)
    .toFixed(2);

  const totalDiscountPrice = cartItems
    .reduce((acc, cur) => {
      const currentPrice = cur.discountPrice * cur.counter;
      return acc + currentPrice;
    }, 0)
    .toFixed(2);

  const discount = (totalPrice - totalDiscountPrice).toFixed(2);

  const totalWeight = cartItems.reduce((acc, cur) => {
    const currentWeight = cur.weight * cur.counter;
    return acc + currentWeight;
  }, 0);

  return {
    itemsLength,
    totalPrice,
    totalDiscountPrice,
    discount,
    totalWeight,
  };
};
