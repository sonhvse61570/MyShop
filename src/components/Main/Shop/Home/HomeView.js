import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class HomeView extends Component {
    render() {
        const { types, topProducts } = this.props;
        return (
            <ScrollView style={styles.wrapper}>
                <Collection />
                <Category navigator={this.props.navigator} types={types} />
                <TopProduct navigator={this.props.navigator} topProducts={topProducts} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#ECE3E3', 
        flex: 1,
    },
})
