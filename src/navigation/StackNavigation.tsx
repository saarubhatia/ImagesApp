import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Stickers from '../screens/StickersScreen';
import NavigationDrawerStructure from '../components/NavigationDrawerStructure';
import IndividualImageScreen from '../screens/IndividualImageScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'orange'},
        headerTintColor: 'white',
      }}
      initialRouteName={'root'}>
      <Stack.Screen
        options={{
          headerLeft: () => <NavigationDrawerStructure {...props} />,
          headerTitle: 'Trending Gifs',
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Trending Stickers',
          headerLeft: () => <NavigationDrawerStructure {...props} />,
        }}
        name="Stickers"
        component={Stickers}
      />
      <Stack.Screen name="IndividualImage" component={IndividualImageScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
