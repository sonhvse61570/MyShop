import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import login from '../../api/login';
import global from '../global';
import saveToken from '../../api/saveToken';
import getToken from '../../api/getToken';

export default class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  login(){
    const { email, password } = this.state;
    const { backToMain } = this.props;
    login(email, password)
    .then(resJson => {
      global.login(resJson.user);
      backToMain();
      saveToken(resJson.token);
    }).catch(error => console.log(error)); 
  }
    render() {
        const { textInputStyle, btnSubmit, btnTitleSubmit, bodyContainer } = styles;
        return (
            <View style={bodyContainer}>
                <TextInput 
                placeholder='Enter your email' 
                underlineColorAndroid='transparent' 
                style={textInputStyle} 
                value={this.state.email}
                onChangeText={(text) => this.setState({email: text})}
                />
                <TextInput 
                secureTextEntry 
                placeholder='Enter your password' 
                underlineColorAndroid='transparent' 
                style={textInputStyle} 
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})}
                />
                <TouchableOpacity style={btnSubmit} onPress={() => this.login()}>
                <Text style={btnTitleSubmit}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyContainer: {
      flex: 10,
      paddingTop: 60,
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
})