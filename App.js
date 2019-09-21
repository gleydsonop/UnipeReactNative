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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Card from './src/components/Card'

const App = () => {
  return (
    <View>
      <Text style={styles.title}>
        EAAAAAAAAAAAAaaa
      </Text>
      <Card></Card>
    </View>
 
  );
};

const styles = StyleSheet.create({
  title:{
    marginTop: 40
  }
});

export default App;
