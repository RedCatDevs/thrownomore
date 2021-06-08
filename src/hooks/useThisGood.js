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
