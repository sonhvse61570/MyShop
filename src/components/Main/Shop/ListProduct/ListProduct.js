import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

import icBack from '../../../../../images/back.png';
import sp1 from '../../../../media/images/sp1.jpeg';

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
        const { container, wrapper, header, productContainer, btnBackImage, titleStyle, productImage, productInfo,functionContaier, txtName, txtPrice, txtMaterial, txtColor, txtDetail, viewColor } = styles;
        const productLayoutJSX = (
            <View style={productContainer}>
                <Image style={productImage} source={sp1} />
                <View style={productInfo}>
                    <Text style={txtName}>Lace Sleeve Si</Text>
                    <Text style={txtPrice}>117$</Text>
                    <Text style={txtMaterial}>Silk</Text>
                    <View style={functionContaier}>
                        <Text style={txtColor}>Color RoyalBlue</Text>
                        <View style={viewColor}/>
                        <TouchableOpacity onPress={() => this.goToDetail()}>
                            <Text style={txtDetail}>DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
        return (
            <View style={container}>
                <View style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={() => {this.goBack()}}>
                            <Image source={icBack} style={btnBackImage} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>
                            Party Dress
                        </Text>
                        <View />
                    </View>
                
                <ScrollView>
                    {productLayoutJSX}
                    {productLayoutJSX}
                    {productLayoutJSX}
                    {productLayoutJSX}
                    {productLayoutJSX}
                    {productLayoutJSX}
                    {productLayoutJSX}
                    {productLayoutJSX}
                </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECE3E3',
        padding: 10,
        paddingBottom: 25,
    },
    wrapper: {
        backgroundColor: 'white',
        elevation: 3,
        padding: 10,
    },
    header: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    btnBackImage: {
        height: 30,
        width: 30,
    },
    titleStyle:{
        fontSize: 20,
        color: '#63C491'
    },
    productContainer:{
        flexDirection: 'row',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#D6D6D6',
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361,
    }, 
    productInfo: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        flex: 1,
    },
    functionContaier: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    txtName: {
        color: '#BCBCBC',
        fontSize: 20,
    }, 
    txtPrice: {
        fontSize: 15,
    }, 
    txtMaterial: {
        fontSize: 15,
    }, 
    txtColor: {
        fontSize: 15,
    }, 
    txtDetail: {
        fontSize: 12,
        color: '#BCBCBC',
    },
    viewColor: {
        backgroundColor: 'blue',
        height: 15,
        width: 15,
        borderRadius: 10,
    },
})