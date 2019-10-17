import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ListProduct extends Component {
    goBack(){
        const { navigator } = this.props;
        navigator.pop();
    }
    goToDetail() {
        const { navigator } = this.props;
        navigator.push({ name: "PRODUCT_DETAIL" });
    }
    render() {
        return (
            <View style={{ backgroundColor: 'green', flex: 1 }}>
                <TouchableOpacity onPress={() => this.goBack()}>
                    <Text>
                        Back
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.goToDetail()}>
                    <Text>
                        Detail
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
