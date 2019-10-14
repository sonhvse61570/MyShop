import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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
        return (
            <View style={{ backgroundColor: 'yellow', flex: 1 }}>
                <TouchableOpacity onPress={this.goToAuthentication.bind()} >
                    <Text>Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.goToChangeInfo.bind()} >
                    <Text>Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.goToOrderHistory.bind()} >
                    <Text>Order History</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
