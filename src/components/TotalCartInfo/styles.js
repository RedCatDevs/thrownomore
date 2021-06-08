import {StyleSheet} from 'react-native';
import {colors, width} from '../../variables';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width,
    paddingHorizontal: 15,
    backgroundColor: colors.lightGreen,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 25,
    paddingBottom: 10,
  },
  totalPriceInfoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  pricesContainer: {
    alignItems: 'center',
  },
  totalPriceText: {
    fontSize: 40,
    lineHeight: 40,
  },
  discountPriceText: {
    fontSize: 25,
    lineHeight: 25,
    color: colors.gray,
    textDecorationLine: 'line-through',
  },
  saveText: {
    fontSize: 18,
    color: colors.green,
  },
});

export default styles;
