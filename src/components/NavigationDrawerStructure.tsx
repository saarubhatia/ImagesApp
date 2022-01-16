import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

const NavigationDrawerStructure = (props: {navigation: any}) => {
  const {navigation} = props;

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={require('../assets/drawerWhite.png')}
          style={{width: 25, height: 25, marginRight: 30}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavigationDrawerStructure;
