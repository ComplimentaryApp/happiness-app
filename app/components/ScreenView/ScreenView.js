import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Platform } from 'react-native';

export default class ScreenView extends Component {
  render() {
    const { style, ...props } = this.props;
    const styles = { paddingTop: Platform.OS === 'android' ? 25 : 0, ...style };
    return (
      <SafeAreaView styles={styles} {...props}>
        {props.children}
      </SafeAreaView>
    );
  }
}
