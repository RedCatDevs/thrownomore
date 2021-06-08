import {StyleSheet} from 'react-native';
import {colors} from '../../variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  numberContainer: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: colors.green,
    width: 15,
    height: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 10,
    color: colors.white,
  },
});

export default styles;
