import React from 'react';
import {View, Text} from 'react-native';
import {useTotalInfo} from '../../hooks/cartHooks';
import styles from './styles';

const TotalCartInfo = () => {
  const {totalDiscountPrice, totalPrice, discount, totalWeight, itemsLength} =
    useTotalInfo();

  const priceString = price => String(price).replace('.', ',');
  if (!itemsLength) return null;
  return (
    <View style={styles.container}>
      <View style={styles.totalPriceInfoContainer}>
        <Text style={styles.totalPriceText}>Total</Text>
        <View style={styles.pricesContainer}>
          <Text style={[styles.totalPriceText, styles.discountPriceText]}>
            {' '}
            {priceString(totalDiscountPrice)} kr.
          </Text>
          <Text style={styles.totalPriceText}>
            {' '}
            {priceString(totalPrice)} kr.
          </Text>
        </View>
      </View>
      <Text style={styles.saveText}>
        You will saving {itemsLength} products: {totalWeight} gr. and{' '}
        {priceString(discount)} kr
      </Text>
    </View>
  );
};

export default TotalCartInfo;
