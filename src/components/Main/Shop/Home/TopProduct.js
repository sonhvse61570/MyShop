import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

import sp1 from '../../../../media/images/sp1.jpeg';
import sp2 from '../../../../media/images/sp2.jpeg';
import sp3 from '../../../../media/images/sp3.jpeg';
import sp4 from '../../../../media/images/sp4.jpeg';
import sp5 from '../../../../media/images/sp5.jpeg';

export default class TopProduct extends Component {
    goToProductDetail(){
        const { navigator } = this.props;
        navigator.push({ name: "PRODUCT_DETAIL" })
    }
    render() {
        const { container, titleContainer, body, title, productContainer, productImage, productName, productPrice } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    <TouchableOpacity style={productContainer} onPress={() => this.goToProductDetail()} >
                        <Image  source={sp1} style={productImage} />
                        <Text style={productName}>Name</Text>
                        <Text style={productPrice}>25$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={() => this.goToProductDetail()} >
                        <Image  source={sp2} style={productImage} />
                        <Text style={productName}>Name</Text>
                        <Text style={productPrice}>25$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={() => this.goToProductDetail()} >
                        <Image  source={sp3} style={productImage} />
                        <Text style={productName}>Name</Text>
                        <Text style={productPrice}>25$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={() => this.goToProductDetail()} >
                        <Image  source={sp4} style={productImage} />
                        <Text style={productName}>Name</Text>
                        <Text style={productPrice}>25$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={() => this.goToProductDetail()} >
                        <Image  source={sp5} style={productImage} />
                        <Text style={productName}>Name</Text>
                        <Text style={productPrice}>25$</Text>
                    </TouchableOpacity>
                </View>
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
