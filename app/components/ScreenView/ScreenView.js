import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';

export default class ScreenView extends Component {
  static propTypes = {
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    style: {},
  };

  render() {
    const { style, ...props } = this.props;
    const styles = { paddingTop: Platform.OS === 'android' ? 25 : 0, ...style };
    return <SafeAreaView style={styles}>{props.children}</SafeAreaView>;
  }
}
