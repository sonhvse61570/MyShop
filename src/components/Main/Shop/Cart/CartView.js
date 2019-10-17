import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class CartView extends Component {
    goToDetail(){
        const { navigator } = this.props;
        navigator.push({ name: "PRODUCT_DETAIL" });
    }
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <TouchableOpacity onPress={() => this.goToDetail()} >
                    <Text>Go to detail</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
