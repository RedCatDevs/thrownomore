import {StyleSheet} from 'react-native';
import {colors} from '../../variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    fontSize: 24,
    color: colors.green,
  },
  chevron: {
    height: 25,
    width: 15,
    resizeMode: 'contain',
    tintColor: colors.green,
  },
});

export default styles;
