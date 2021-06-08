import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import Counter, {CounterPlaceHolder} from '../../components/Counter';
import ContentWrapper from '../../components/Wrapper';
import {store} from '../../context';
import {CartActions} from '../../context/actions';
import {goodMock} from '../../mocks/goodMock';
import styles from './styles';

import Chevron from '../../assets/chevron_left.png';

const GoodScreen = () => {
  const globalState = useContext(store);
  const {state, dispatch} = globalState;
  const {cartItems} = state;

  const addToCart = () => dispatch(CartActions.addToCart(goodMock));
  const increaseCounter = () =>
    dispatch(CartActions.increaseCounter(goodMock.id));
  const decreaseCounter = () =>
    dispatch(CartActions.decreaseCounter(goodMock.id));
  const removeFromCart = () =>
    dispatch(CartActions.removeFromCart(goodMock.id));

  const thisGoodInCart = cartItems?.find(
    cartItem => cartItem.id === goodMock.id,
  );
  const thisGoodNumberInCart = thisGoodInCart?.counter;

  const onAdd = () => {
    if (thisGoodNumberInCart) {
      increaseCounter();
    } else {
      addToCart();
    }
  };

  const onSubtract = () => {
    if (thisGoodNumberInCart === 1) {
      removeFromCart();
    } else {
      decreaseCounter();
    }
  };

  const priceString = price => String(price).replace('.', ',');

  return (
    <ContentWrapper title={'Logg inn'}>
      <View style={styles.container}>
        <Image source={Chevron} style={styles.chevron} />
        <Text style={styles.title}>{goodMock.name}</Text>
        <Text style={styles.weight}>{goodMock.weight} gr.</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.imagesContainer}>
            <Image source={{uri: goodMock.image}} style={styles.goodImage} />
            <Image
              source={{uri: goodMock.shopBadge}}
              style={styles.shopBadge}
            />
          </View>
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.price}>{priceString(goodMock.price)}kr</Text>
              <Text style={styles.discountPrice}>
                {priceString(goodMock.discountPrice)}kr
              </Text>
            </View>
            <Text style={styles.shopName}>{goodMock.shopName}</Text>
          </View>
        </View>
        {thisGoodNumberInCart ? (
          <Counter
            number={thisGoodNumberInCart}
            width={150}
            onAdd={onAdd}
            onSubtract={onSubtract}
          />
        ) : (
          <CounterPlaceHolder onAdd={onAdd} width={150} />
        )}
      </View>
    </ContentWrapper>
  );
};

export default GoodScreen;
