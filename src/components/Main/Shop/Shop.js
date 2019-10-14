import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Shop extends Component {
    state = {  }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <Text>Shop component</Text>
            </View>
        );
    }
}

export default Shop;