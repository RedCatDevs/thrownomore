import React, {useContext} from 'react';
import {View, Text, SectionList} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CartItem from '../../components/CartItem';
import TotalCartInfo from '../../components/TotalCartInfo';
import ContentWrapper from '../../components/Wrapper';
import {store} from '../../context';
import styles from './styles';

const CartScreen = () => {
  const globalState = useContext(store);
  const {state} = globalState;
  const {cartItems} = state;

  const getSections = () => {
    let sections = [];
    for (let item of cartItems) {
      const currentSection = sections.find(
        section => section.title === item.shopName,
      );
      if (currentSection) {
        sections = sections.map(section => ({
          ...section,
          data:
            section.title === currentSection.title
              ? [...section.data, item]
              : section.data,
        }));
      } else {
        sections = [...sections, {title: item.shopName, data: [item]}];
      }
    }
    return sections;
  };

  const renderCartItem = ({item}) => <CartItem cartItem={item} />;
  getSections();
  return (
    <ContentWrapper title={'Shopping List'}>
      <SectionList
        sections={getSections()}
        renderItem={renderCartItem}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
      <TotalCartInfo />
    </ContentWrapper>
  );
};

export default CartScreen;
