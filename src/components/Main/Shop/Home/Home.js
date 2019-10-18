import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Navigator } from 'react-native';
import HomeView from './HomeView';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';

export default class Home extends Component {
    render() {
        const { types, topProducts } = this.props;
        return (
            <Navigator 
                initialRoute={{ name: "HOME_VIEW" }}
                renderScene={(route, navigator) => {
                    switch(route.name) {
                        case "HOME_VIEW": return <HomeView navigator={navigator} types={types} topProducts={topProducts} />;
                        case "LIST_PRODUCT": return <ListProduct navigator={navigator}/>;
                        default: return <ProductDetail navigator={navigator} product={route.product}/>;
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
