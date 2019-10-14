import React, { Component } from "react";
import { View } from 'react-native';
import Menu from './Menu';
import Shop from './Shop/Shop';
import Drawer from 'react-native-drawer';

export default class Main extends Component {
  goToAuthentication() {
    const { navigator } = this.props;
    navigator.push({ name: "AUTHENTICATION" });
  }

  goToChangeInfo() {
    const { navigator } = this.props;
    navigator.push({ name: "CHANGE_INFO" });
  }

  goToOrderHistory() {
    const { navigator } = this.props;
    navigator.push({ name: "ORDER_HISTORY" });
  }

  closeControlPanel = () => {
    this.drawer.close();
  };

  openControlPanel = () => {
    this.drawer.open();
  };

  render() {
    const { navigator } = this.props;
    return (
      <Drawer
        tapToClose
        openDrawerOffset={0.4}
        ref={(ref) => { this.drawer = ref; }}
        content={<Menu navigator={navigator} />}
      >
        <Shop open={this.openControlPanel.bind(this)} />
      </Drawer>
    );
  }
}
