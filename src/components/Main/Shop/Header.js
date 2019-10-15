import React, { Component } from 'react';
import { View, TextInput, Dimensions, TouchableOpacity, Image } from 'react-native';

const { height } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        return (
            <View style={{ height: height / 8, backgroundColor: '#EA7171', flexDirection: 'row' }}>
                <TouchableOpacity 
                    onPress={this.props.onOpen} 
                    style={{ flex: 1, justifyContent: 'center', marginLeft: 5 }}
                >
                    <Image 
                        source={require("../../../../images/menu.png")} 
                    />
                </TouchableOpacity>
                <TextInput style={{ flex: 5, backgroundColor: 'white', justifyContent: 'center', height: 35 }}>
                    Lazada
                </TextInput>
            </View>
        );
    }
}
