/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import images from './src/store/reducers/images';

import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  const rootReducer = combineReducers({
    images: images,
  });

  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
