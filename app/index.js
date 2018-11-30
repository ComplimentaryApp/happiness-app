import React, { Component } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class Index extends Component {
  state = {};

  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome</Text>
      </SafeAreaView>
    );
  }
}
