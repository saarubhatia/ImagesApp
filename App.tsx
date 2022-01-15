/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import images from './src/store/reducers/images';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';

const App = () => {
  const rootReducer = combineReducers({
    images: images,
  });

  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
