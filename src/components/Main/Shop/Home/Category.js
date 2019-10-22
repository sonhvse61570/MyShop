import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import host from '../../../../api/host';

const { width, height } = Dimensions.get('window');
const url = `${host}images/type/`;

export default class Category extends Component {
    goToListProduct(){
        const { navigator } = this.props;
        navigator.push({ name: "LIST_PRODUCT" });
    }
    render() {
        const {wrapper} = styles;
        const { types } = this.props;
        return (
            <View style={wrapper}>
                <View style={styles.titleStyle}>
                    <Text style={styles.textStyle}>LIST OF CATEGORIES</Text>
                </View>
                <View style={styles.bannerStyle}>
                    <Swiper>
                        {
                            types.map(e => (
                                <TouchableOpacity onPress={() => this.goToListProduct()} key={e.id} >
                                    <Image style={styles.imageStyle} source={{ uri: `${url}${e.image}` }} />
                                </TouchableOpacity>
                            ))
                        }
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