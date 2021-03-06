import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native';
import icMenu from '../../../../images/menu.png';
import icLogo from '../../../../images/logo.png';

const { height } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
               <View style={styles.row1}>
                    <TouchableOpacity onPress={this.props.onOpen} >
                        <Image source={icMenu} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>Leng Keng</Text>
                    <Image source={icLogo} style={styles.iconStyle} />
                </View>
                <TextInput underlineColorAndroid='transparent' style={styles.textInput} placeholder='Search' />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        height: height / 7, 
        backgroundColor: '#63C491',
        padding: 8,
        justifyContent: 'space-around',
    },
    row1: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: 'white',
        height: height / 15,
        padding: 5,
        marginTop: 10,
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
    titleStyle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
})