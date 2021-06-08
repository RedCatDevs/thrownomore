import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {getCartItemsLength} from '../../redux/selectors/cartSelector';

import Cart from '../../assets/shopping_cart.png';
import {store} from '../../context';
import styles from './styles';

const CartIcon = ({tintColor}) => {
  const globalState = useContext(store);
  const {state} = globalState;
  const {cartItems} = state;

  const cartItemsLength = cartItems?.reduce((acc, cur) => {
    return acc + cur?.counter;
  }, 0);

  return (
    <View>
      <Image source={Cart} style={{tintColor}} />
      {cartItems?.length ? (
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{cartItemsLength}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default CartIcon;
