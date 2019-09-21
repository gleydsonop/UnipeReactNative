/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';

import {Router, Stack, Scene} from 'react-native-router-flux'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Card from './src/components/Card'
import Login from './src/screens/Login';
import Home from './src/screens/Home';

const App = () => {
  return (
    <Router>
      <Stack key='root'>
        <Scene key='login' initial={true} component={Login}></Scene>
        <Scene key='home' component={Home}></Scene>
      </Stack>
    </Router>
    
  );
};

const styles = StyleSheet.create({
  title:{
    marginTop: 40
  }
});

export default App;
