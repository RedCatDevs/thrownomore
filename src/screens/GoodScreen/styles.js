import {StyleSheet} from 'react-native';
import {colors} from '../../variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
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
});

export default styles;
