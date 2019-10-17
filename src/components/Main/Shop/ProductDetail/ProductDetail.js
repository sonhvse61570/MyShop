import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ProductDetail extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    goToDetail() {
        const { navigator } = this.props;
        navigator.push({ name: "PRODUCT_DETAIL" });
    }
    render() {
        return (
            <View style={{ backgroundColor: 'blue', flex: 1 }}>
                <TouchableOpacity onPress={() => this.goBack()}>
                    <Text>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
