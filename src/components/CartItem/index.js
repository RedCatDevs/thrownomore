import React from 'react';
import {View, Text, Image} from 'react-native';
import {useThisGood} from '../../hooks/useThisGood';
import Counter from '../Counter';
import styles from './styles';

const CartItem = ({cartItem}) => {
  const composeTitle = () =>
    `${cartItem.name?.toUpperCase()} ${cartItem.weight} gr.`;
  const composeItemPrice = () => {
    const itemPrice = String(cartItem.discountPrice);
    const itemPriceString = `${itemPrice.replace('.', ',')},-`;
    return itemPriceString;
  };

  const {
    thisGoodInCart,
    thisGoodNumberInCart,
    increaseCounter,
    decreaseCounter,
    removeFromCart,
  } = useThisGood(cartItem?.id);

  const onSubtract = () => {
    if (thisGoodNumberInCart === 1) {
      removeFromCart();
    } else {
      decreaseCounter();
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: cartItem.image}} style={styles.image} />
      <Text>{composeTitle()}</Text>
      <View style={styles.counterContainer}>
        <Counter
          width={70}
          number={thisGoodNumberInCart}
          onAdd={increaseCounter}
          onSubtract={onSubtract}
          small
        />
        <Text>{composeItemPrice()}</Text>
      </View>
    </View>
  );
};

export default CartItem;
