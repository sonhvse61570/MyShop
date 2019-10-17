import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../../../media/images/little.jpg';
import maxiIcon from '../../../../media/images/maxi.jpg';
import partyIcon from '../../../../media/images/party.jpg';

const { width, height } = Dimensions.get('window');

export default class Category extends Component {
    goToListProduct(){
        const { navigator } = this.props;
        navigator.push({ name: "LIST_PRODUCT" });
    }
    render() {
        const {wrapper} = styles;

        return (
            <View style={wrapper}>
                <View style={styles.titleStyle}>
                    <Text style={styles.textStyle}>LIST OF CATEGORIES</Text>
                </View>
                <View style={styles.bannerStyle}>
                    <Swiper>
                        <TouchableOpacity onPress={() => this.goToListProduct()}>
                            <Image style={styles.imageStyle} source={littleIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.goToListProduct()}>
                            <Image style={styles.imageStyle} source={maxiIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.goToListProduct()}>
                            <Image style={styles.imageStyle} source={partyIcon} />
                        </TouchableOpacity>
                    </Swiper>
                </View>
            </View>
        )
    }
}

// 933 x 465
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.33,
        backgroundColor: 'white',
        margin: 10,
        marginBottom: 0,
        padding: 10,
        paddingTop: 0,
        elevation: 3,
    },
    titleStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF',
    },
    bannerStyle: {
        flex: 4,
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
    },
})