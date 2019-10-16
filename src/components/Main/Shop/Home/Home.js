import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Collection from './Collection';
import Category from './Category';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Collection />
                <Category />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#ECE3E3', 
        flex: 1,
    },
})
