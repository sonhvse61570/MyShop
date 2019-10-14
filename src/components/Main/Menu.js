import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Menu extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'pink', flex: 1 }}>
                <Text>Menu component</Text>
            </View>
        );
    }
}
