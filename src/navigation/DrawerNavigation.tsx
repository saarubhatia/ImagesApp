import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackNavigation from './StackNavigation';
import CustomDrawerComponent from '../components/CustomDrawerNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerComponent {...props} />}>
      <Drawer.Screen name="Root" component={StackNavigation} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default DrawerNavigation;
