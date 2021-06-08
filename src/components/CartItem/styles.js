import {StyleSheet} from 'react-native';
import {colors} from '../../variables';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    paddingBottom: 15,
    marginBottom: 15,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  counterContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
