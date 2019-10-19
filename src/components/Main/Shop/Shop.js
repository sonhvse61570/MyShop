import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions, TouchableOpacity, Image } from 'react-native';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Header from './Header';
import global from '../../global';
import initData from '../../../api/initData';
import saveCart from '../../../api/saveCart';
import getCart from '../../../api/getCart';
import TabNavigator from 'react-native-tab-navigator';
import icHome from '../../../../images/blackhome.png';
import icSelectedHome from '../../../../images/greenhome.png';
import icContact from '../../../../images/blackcontact.png';
import icSelectedContact from '../../../../images/greencontact.png';
import icSearch from '../../../../images/blacksearch.png';
import icSelectedSearch from '../../../../images/greensearch.png';
import icCart from '../../../../images/blackcart.png';
import icSelectedCart from '../../../../images/greencart.png';

const { height } = Dimensions.get('window');

export default class Shop extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'home',
            types: [],
            topProducts: [],
            cartArray: [],
        };
        global.addProductToCart = this.addProductToCart.bind(this);
    }

    componentDidMount() {
        initData()
        .then(resJson => {
            const { type, product } = resJson;
            this.setState({
                types: type,
                topProducts: product,
            })
        });

        getCart()
        .then(cartArray => this.setState({
            cartArray: cartArray,
        }))
    }

    addProductToCart(product) {
        this.setState({
            cartArray: this.state.cartArray.concat({ product : product, quantity: 1}),
        }, () => saveCart(this.state.cartArray));
    }

    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        const { selectedTab, types, topProducts, cartArray } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={selectedTab === 'home'}
                        renderIcon={() => <Image source={icHome} />}
                        renderSelectedIcon={() => <Image source={icSelectedHome} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        {<Home types={types} topProducts={topProducts} />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'contact'}
                        renderIcon={() => <Image source={icContact} />}
                        renderSelectedIcon={() => <Image source={icSelectedContact} />}
                        onPress={() => this.setState({ selectedTab: 'contact' })}>
                        {<Contact />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'search'}
                        renderIcon={() => <Image source={icSearch} />}
                        renderSelectedIcon={() => <Image source={icSelectedSearch} />}
                        onPress={() => this.setState({ selectedTab: 'search' })}>
                        {<Search />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        badgeText="1"
                        selected={selectedTab === 'cart'}
                        badgeText={cartArray.length}
                        renderIcon={() => <Image source={icCart} />}
                        renderSelectedIcon={() => <Image source={icSelectedCart} />}
                        onPress={() => this.setState({ selectedTab: 'cart' })}>
                        {<Cart cartArray={cartArray}/>}
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
