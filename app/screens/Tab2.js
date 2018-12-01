import React, { Component } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class Tab2 extends Component {
  render() {
    return (
      <SafeAreaView style={Styles.androidSafeArea}>
        {/* <ScrollView style={{ padding: 20 }}> */}
        <Text style={{ fontSize: 27 }}>Welcome to hAPPiness! This is tab 2</Text>
        {/* </ScrollView> */}
      </SafeAreaView>
    );
  }
}
