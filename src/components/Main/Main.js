import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Main extends Component {
  goToAuthentication() {
    const { navigator } = this.props;
    navigator.push({ name: 'AUTHENTICATION' });
  }

  goToChangeInfo() {
    const { navigator } = this.props;
    navigator.push({ name: 'CHANGE_INFO' });
  }

  goToOrderHistory() {
    const { navigator } = this.props;
    navigator.push({ name: 'ORDER_HISTORY' });
  }

  render() {
    return (
      <View style={{ backgroundColor: 'green', flex: 1 }}>
        <TouchableOpacity onPress={this.goToAuthentication.bind(this)}>
          <Text>Go to Authentication</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goToChangeInfo.bind(this)}>
          <Text>Go to Change Info</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goToOrderHistory.bind(this)}>
          <Text>Go to Order History</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
