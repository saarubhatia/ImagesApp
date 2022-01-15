import {DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet} from 'react-native';
import CustomDrawerButton from './DrawerButton';

const CustomDrawerComponent = props => {
  const {navigation} = props;
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        flex: 1,
        // justifyContent: 'center',
        paddingHorizontal: 30,
        paddingStart: 10,
        marginTop: 20,
      }}
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

const styles = StyleSheet.create({});

export default CustomDrawerComponent;
