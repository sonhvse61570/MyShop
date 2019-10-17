import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions, TouchableOpacity, Image } from 'react-native';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Header from './Header';
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
        }
    }

    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        renderIcon={() => <Image source={icHome} />}
                        renderSelectedIcon={() => <Image source={icSelectedHome} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        {<Home />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        renderIcon={() => <Image source={icContact} />}
                        renderSelectedIcon={() => <Image source={icSelectedContact} />}
                        onPress={() => this.setState({ selectedTab: 'contact' })}>
                        {<Contact />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        renderIcon={() => <Image source={icSearch} />}
                        renderSelectedIcon={() => <Image source={icSelectedSearch} />}
                        onPress={() => this.setState({ selectedTab: 'search' })}>
                        {<Search />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        badgeText="1"
                        selected={this.state.selectedTab === 'cart'}
                        renderIcon={() => <Image source={icCart} />}
                        renderSelectedIcon={() => <Image source={icSelectedCart} />}
                        onPress={() => this.setState({ selectedTab: 'cart' })}>
                        {<Cart />}
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
