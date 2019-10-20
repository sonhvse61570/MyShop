import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import register from '../../api/register';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: '',
        };
    }
    register(){
        const { name, email, password } = this.state;
        register(email, name, password)
        .then(res => {
            if (res === 'THANH_CONG') this.onSuccess();
            else this.onFail();
        });
    }
    onSuccess(){
        Alert.alert(
            'Register',
            'You have successfully registered',
            [
              {text: 'OK', onPress: () => console.log('success')},
            ],
            {cancelable: false},
          );
    }
    onFail(){
        Alert.alert(
            'Register',
            '!!!Oops, something went wrong',
            [
              {text: 'OK', onPress: () => console.log('fail')},
            ],
            {cancelable: false},
          );
    }
    render() {
        const { textInputStyle, btnSubmit, btnTitleSubmit, bodyContainer } = styles;
        return (
            <View style={bodyContainer}>
                <TextInput 
                    placeholder='Enter your name' 
                    underlineColorAndroid='transparent' 
                    style={textInputStyle} 
                    value={this.state.name}
                    onChangeText={text => this.setState({ name: text })}
                />
                <TextInput 
                    placeholder='Enter your email' 
                    underlineColorAndroid='transparent' 
                    style={textInputStyle} 
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput 
                    secureTextEntry 
                    placeholder='Enter your password' 
                    underlineColorAndroid='transparent' 
                    style={textInputStyle} 
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                />
                <TextInput 
                    secureTextEntry 
                    placeholder='Re-enter your password' 
                    underlineColorAndroid='transparent' 
                    style={textInputStyle} 
                    value={this.state.rePassword}
                    onChangeText={text => this.setState({ rePassword: text })}
                />
                <TouchableOpacity style={btnSubmit} onPress={() => this.register()}>
                    <Text style={btnTitleSubmit}>SIGN UP NOW</Text>
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