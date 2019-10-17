import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Navigator } from 'react-native';
import SearchView from './SearchView';
import ProductDetail from '../ProductDetail/ProductDetail';

export default class Search extends Component {
    render() {
        return (
            <Navigator 
                initialRoute={{ name: "SEARCH_VIEW" }}
                renderScene={(route, navigator) => {
                    switch(route.name) {
                        case "SEARCH_VIEW": return <SearchView navigator={navigator}/>;
                        default: return <ProductDetail navigator={navigator}/>;
                    }
                }}
            />
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#ECE3E3', 
        flex: 1,
    },
})
