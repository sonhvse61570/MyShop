import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import banner from '../../../../media/images/banner.jpg';

const { width, height } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        const {wrapper, textStyle, bannerStyle, imageStyle, titleStyle} = styles;

        return (
            <View style={wrapper}>
                <View style={titleStyle}>
                    <Text style={textStyle}>SPRING COLLECTION</Text>
                </View>
                <View style={bannerStyle}>
                    <Image style={imageStyle} source={banner} />
                </View>
            </View>
        )
    }
}

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