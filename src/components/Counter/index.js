import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const Counter = ({number, onAdd, onSubtract, width, small}) => {
  return (
    <View style={[styles.container, {width}]}>
      <TouchableOpacity
        style={[styles.buttonContainer, small && styles.smallButtonContainer]}
        onPress={onSubtract}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
        <Text style={[styles.buttonText, small && styles.smallButtonText]}>
          -
        </Text>
      </TouchableOpacity>
      <Text style={[styles.numberText, small && styles.smallNumber]}>
        {number}
      </Text>
      <TouchableOpacity
        style={[styles.buttonContainer, small && styles.smallButtonContainer]}
        onPress={onAdd}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
        <Text style={[styles.buttonText, small && styles.smallButtonText]}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const CounterPlaceHolder = ({onAdd, width}) => (
  <TouchableOpacity
    style={[styles.container, styles.shoppingCartContainer, {width}]}
    onPress={onAdd}
    hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
    <Text style={[styles.buttonText, styles.smallButtonText]}>
      + SHOPPING CART
    </Text>
  </TouchableOpacity>
);

export default Counter;
