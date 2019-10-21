import React, { Component } from "react";
import { View } from 'react-native';
import Menu from './Menu';
import Shop from './Shop/Shop';
import Drawer from 'react-native-drawer';
import checkLogin from '../../api/checkLogin';
import getToken from '../../api/getToken';
import saveToken from '../../api/saveToken';
import global from '../global';
import refreshToken from '../../api/resfreshToken';

export default class Main extends Component {
  componentDidMount(){
    getToken()
    .then(token => checkLogin(token))
    .then(resJson => global.login(resJson.user))
    .catch(error => { 
      console.log(error);
      saveToken('');
    });

    setInterval(() => {
      getToken()
      .then(token => refreshToken(token))
    }, 60 * 1000)
  }
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
