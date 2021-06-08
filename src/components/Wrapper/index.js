import React from 'react';
import {View, Text, Image, TextInput, ScrollView, Keyboard} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';

const SearchImage = require('../../assets/search_icon.png');
const UserIcon = require('../../assets/user_icon.png');

const ContentWrapper = ({title, children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerSearchRow}>
          <View style={styles.searchInputContainer}>
            <Image source={SearchImage} style={styles.searchImage} />
            <TextInput style={styles.searchInput} placeholder={'Search'} />
          </View>
          <View style={styles.userIconContainer}>
            <Image source={UserIcon} style={styles.userIcon} />
          </View>
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.contentContainer}>{children}</View>
    </SafeAreaView>
  );
};

export default ContentWrapper;
