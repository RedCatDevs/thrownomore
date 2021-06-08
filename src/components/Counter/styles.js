import {StyleSheet} from 'react-native';
import {colors} from '../../variables';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  shoppingCartContainer: {
    backgroundColor: colors.green,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  buttonContainer: {
    width: 25,
    height: 25,
    backgroundColor: colors.green,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
    lineHeight: 24,
  },
  smallButtonText: {
    fontSize: 15,
    lineHeight: 15,
  },
  numberText: {
    color: colors.green,
    fontSize: 24,
    lineHeight: 24,
  },
  smallNumber: {
    fontSize: 15,
    lineHeight: 15,
  },
  smallButtonContainer: {
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
