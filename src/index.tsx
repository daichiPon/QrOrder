import React from 'react';
import { AppRegistry } from 'react-native';
import App from"../App";

AppRegistry.registerComponent('QrcodeOrder', () => App);
AppRegistry.runApplication('QrcodeOrder', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
