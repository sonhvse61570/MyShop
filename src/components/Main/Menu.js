import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import profileIcon from '../../../images/profile.png';

export default class Menu extends Component {
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
    render() {
        const { container, profile, btnStyle, btnText } = styles;
        return (
            <View style={container}>
                <Image source={profileIcon} style={profile} />
                <View>
                    <TouchableOpacity style={btnStyle}>
                        <Text style={btnText}>Sign In</Text>
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
        borderRightWidth: 3,
        borderRightColor: '#ECE3E3',
        alignItems: 'center',
    },
    profile: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    btnStyle: {
        height: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 70,
    },
    btnText: {
        color: '#63C491',
    },
})
