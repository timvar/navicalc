import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import CalculatorScreen from './CalculatorScreen';
import HistoryScreen from './HistoryScreen';
export default class App extends React.Component {
  render() {
    return (
      <MyApp/>
      );
  }
}

const MyApp = createStackNavigator({
  Calculator: {screen: CalculatorScreen},
  History: {screen: HistoryScreen}
});
