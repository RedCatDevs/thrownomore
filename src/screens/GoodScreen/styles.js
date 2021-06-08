import {StyleSheet} from 'react-native';
import {colors} from '../../variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chevron: {
    height: 25,
    width: 15,
    resizeMode: 'contain',
    tintColor: colors.green,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  weight: {
    fontSize: 20,
    color: colors.gray,
  },
  goodImage: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
  },
  shopBadge: {
    width: 65,
    height: 15,
    resizeMode: 'contain',
  },
  detailsContainer: {
    flexDirection: 'row',
  },
  imagesContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    height: '100%',
  },
  price: {
    color: colors.gray,
    fontSize: 20,
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  shopName: {
    textTransform: 'uppercase',
    color: colors.green,
    fontSize: 15,
  },
});

export default styles;
