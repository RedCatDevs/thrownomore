import {StyleSheet} from 'react-native';
import {colors} from '../../variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 15,
  },
  headerSearchRow: {
    flexDirection: 'row',
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 250,
  },
  userIconContainer: {
    padding: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 250,
    marginLeft: 10,
  },
  userIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  searchImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  searchInput: {
    padding: 0,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.lightGray,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 25,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 25,
    marginTop: 15,
  },
});

export default styles;
