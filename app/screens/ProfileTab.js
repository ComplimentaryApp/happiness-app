import React, { Component } from 'react';
import { Text } from 'react-native';
import ScreenView from '../components/ScreenView/ScreenView';

export default class ProfileTab extends Component {
  render() {
    return (
      <ScreenView>
        {/* <ScrollView style={{ padding: 20 }}> */}
        <Text style={{ fontSize: 27 }}>
          Welcome to hAPPiness! This is the profile tab
        </Text>
        {/* </ScrollView> */}
      </ScreenView>
    );
  }
}
