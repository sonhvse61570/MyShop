import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ListView } from 'react-native';

const url = 'http://192.168.0.199/app/images/product/';

export default class TopProduct extends Component {
    goToProductDetail(product){
        const { navigator } = this.props;
        navigator.push({ name: "PRODUCT_DETAIL", product });
    }
    render() {
        const { container, titleContainer, body, title, productContainer, productImage, productName, productPrice } = styles;
        const { topProducts } = this.props;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <ListView 
                    contentContainerStyle={body}
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 }).cloneWithRows(topProducts)}
                    renderRow={(product) => (
                        <TouchableOpacity style={productContainer} onPress={() => this.goToProductDetail(product)} >
                            <Image  source={{ uri: `${url}${product.images[0]}` }} style={productImage} />
                            <Text style={productName}>{product.name.toUpperCase()}</Text>
                            <Text style={productPrice}>{product.price}$</Text>
                        </TouchableOpacity>
                    )}
                    renderSeparator={(sectionId, rowId) => {
                        if (rowId % 2 === 1) return <View style={{ width, height: 10 }} />;
                        return null;
                    }}
                />
            </View>
        )
    }
}

const { width } = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        elevation: 3,
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    title:{
        color: '#D3D3CF',
        fontSize: 20,
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingBottom: 10,
    },
    productContainer: {
        width: productWidth,
        elevation: 3,
        shadowColor: '#2E272B',
        shadowOpacity: { width: 0, height: 30 },
        shadowOpacity: 0.2,
    },
    productImage: {
        width: productWidth,
        height: productHeight,
    },
    productName: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500',
    },
    productPrice: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90',
    },
})
