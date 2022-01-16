import {DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet} from 'react-native';
import CustomDrawerButton from './DrawerButton';

const CustomDrawerComponent = (props: {navigation: any}) => {
  const {navigation} = props;
  return (
    <DrawerContentScrollView
      contentContainerStyle={styles.mainContainer}
      {...props}>
      <CustomDrawerButton
        iconName={require('../assets/icons8-home-60.png')}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        GIFS
      </CustomDrawerButton>
      <CustomDrawerButton
        iconName={require('../assets/icons8-search-50.png')}
        onPress={() => {
          navigation.navigate('Stickers');
        }}>
        STICKERS
      </CustomDrawerButton>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingStart: 10,
    marginTop: 20,
  },
});

export default CustomDrawerComponent;
