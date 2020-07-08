import React from 'react';
import {StatusBar} from 'react-native';

import MainScreen from './Screens/MainScreen';


export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#B1FF92" barStyle="dark-content" />
      <MainScreen/>
    </>
  );
}
