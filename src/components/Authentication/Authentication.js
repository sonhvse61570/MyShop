import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import SignUp from './SignUp';
import SignIn from './SignIn';
import register from '../../api/register';
import icBack from '../../../images/back_white.png';
import icLogo from '../../../images/logo.png';

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: true,
    };
  }

  goBackToMain() {
    const { navigator } = this.props;
    navigator.pop();
  }

  signIn(){
    this.setState({
      isSignIn: true,
    })
  }

  signUp(){
    this.setState({
      isSignIn: false,
    })
  }

  render() {
    const { 
      container, headerContainer, imageStyle, brandStyle, footerContainer 
      , activedColor, inactivedColor, btnSignIn, btnSignUp, horizontalRule
    } = styles;
    const bodyLayoutJSX = this.state.isSignIn ? <SignIn /> : <SignUp />;

    return (
      <View style={container}>
        <View style={headerContainer}>
          <TouchableOpacity onPress={() => this.goBackToMain()}>
            <Image source={icBack} style={imageStyle} />
          </TouchableOpacity>
          <Text style={brandStyle}>Leng Keng</Text>
          <Image source={icLogo} style={imageStyle} />
        </View>
        {bodyLayoutJSX}
        <View style={footerContainer}>
          <TouchableOpacity style={btnSignIn} disabled={this.state.isSignIn} onPress={() => this.signIn()}>
              <Text style={this.state.isSignIn ? activedColor : inactivedColor}>SIGN IN</Text>
          </TouchableOpacity>
          <View style={horizontalRule} />
          <TouchableOpacity style={btnSignUp} disabled={!this.state.isSignIn} onPress={() => this.signUp()}>
              <Text style={this.state.isSignIn ? inactivedColor : activedColor}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#63C491',
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bodyContainer: {
    flex: 10,
    paddingTop: 60,
  },
  footerContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  imageStyle: {
    width: 40,
    height: 40,
  },
  brandStyle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textInputStyle:{
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 15,
    marginVertical: 7,
  },
  btnSubmit: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
    paddingVertical: 15,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitleSubmit: {
    color: 'white',
    fontSize: 18,
  },
  btnSignIn: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  btnSignUp: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  activedColor: {
    color: '#63C491',
  },
  inactivedColor: {
    color: '#D7D7D7',
  },
  horizontalRule: {
    width: 5,
  }
})
