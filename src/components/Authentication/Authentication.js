import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class Authentication extends Component {
  goBackToMain() {
    const { navigator } = this.props;
    navigator.pop();
  }

  render() {
    return (
      <View style={{ backgroundColor: 'red', flex: 1 }}>
        <Button title='Go back' onPress={this.goBackToMain.bind(this)} />
      </View>
    );
  }
}
