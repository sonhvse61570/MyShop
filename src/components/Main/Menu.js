import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import profileIcon from '../../../images/profile.png';
import global from '../global';
import saveToken from '../../api/saveToken';

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: null,
        };
        global.login = this.login.bind(this);
    }
    login(user){
        this.setState({
            user,
        });
    }
    onSignOut(){
        this.setState({
            user: null,
        });
        saveToken('');
    }
    goToAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: "AUTHENTICATION" });
    }
    goToChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: "CHANGE_INFO", user: this.state.user });
    }
    goToOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: "ORDER_HISTORY" });
    }
    render() {
        const { container, profile, btnStyle, btnText, btnSignInStyle, btnContainer, username } = styles;
        const logoutJSX = (
            <View>
                <TouchableOpacity style={btnStyle} onPress={this.goToAuthentication.bind(this)}>
                    <Text style={btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
        const { user } = this.state;
        const loginJSX = (
            <View>
                <Text style={username}>{user ? user.name : ''}</Text>
                <View style={btnContainer}>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.goToOrderHistory.bind(this)}>
                        <Text style={btnText}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.goToChangeInfo.bind(this)}>
                        <Text style={btnText}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.onSignOut.bind(this)}>
                        <Text style={btnText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
        const mainJSX = this.state.user ? loginJSX : logoutJSX; 
        return (
            <View style={container}>
                <Image source={profileIcon} style={profile} />
                { mainJSX }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#63C491',
        flex: 1,
        borderRightWidth: 3,
        borderRightColor: '#ECE3E3',
        alignItems: 'center',
        flex: 1,
    },
    profile: {
        width: 120,
        height: 120,
        borderRadius: 75,
        marginBottom: 20,
        marginVertical: 20,
    },
    btnStyle: {
        height: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 70,
    },
    btnSignInStyle: {
        height: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 5,
        paddingHorizontal: 10,
        width: 200,
        marginBottom: 10,
    },
    btnText: {
        color: '#63C491',
        fontSize: 20,
    },
    btnContainer: {
        flex:1,
        marginTop: 40,
    },
    username: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
})
