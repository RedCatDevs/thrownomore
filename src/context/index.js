import React, {createContext, useReducer} from 'react';
import {secondGoodMock, thirdGoodMock} from '../mocks/goodMock';
import {CartActionTypes} from './actions';

const initialState = {
  cartItems: [secondGoodMock, thirdGoodMock],
};

const store = createContext(initialState);
const {Provider} = store;

const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case CartActionTypes.CART_ADD: {
        const good = {...action.payload, counter: 1};
        return {...state, cartItems: [...state.cartItems, good]};
      }
      case CartActionTypes.INCREASE_COUNTER: {
        return {
          ...state,
          cartItems: state.cartItems.map(cartItem => ({
            ...cartItem,
            counter:
              cartItem.id === action.payload
                ? cartItem.counter + 1
                : cartItem.counter || 0,
          })),
        };
      }
      case CartActionTypes.DECREASE_COUNTER: {
        return {
          ...state,
          cartItems: state.cartItems.map(cartItem => ({
            ...cartItem,
            counter:
              cartItem.id === action.payload
                ? cartItem.counter - 1
                : cartItem.counter,
          })),
        };
      }
      case CartActionTypes.REMOVE_FROM_CART: {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            cartItem => cartItem.id !== action.payload,
          ),
        };
      }
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export {store, StateProvider};
