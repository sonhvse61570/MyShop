import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import TabNavigator from 'react-native-tab-navigator';

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
                <View style={{ height: height / 15 }}>
                    <TouchableOpacity onPress={() => this.openMenu()}>
                        <Text>Topbar</Text>
                    </TouchableOpacity>
                </View>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        renderIcon={() => <Image source={require("../../../../images/blackhome.png")} />}
                        renderSelectedIcon={() => <Image source={require("../../../../images/greenhome.png")} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        {<Home />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        renderIcon={() => <Image source={require("../../../../images/blackcontact.png")} />}
                        renderSelectedIcon={() => <Image source={require("../../../../images/greencontact.png")} />}
                        onPress={() => this.setState({ selectedTab: 'contact' })}>
                        {<Contact />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        renderIcon={() => <Image source={require("../../../../images/blacksearch.png")} />}
                        renderSelectedIcon={() => <Image source={require("../../../../images/greensearch.png")} />}
                        onPress={() => this.setState({ selectedTab: 'search' })}>
                        {<Search />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        renderIcon={() => <Image source={require("../../../../images/blackcart.png")} />}
                        renderSelectedIcon={() => <Image source={require("../../../../images/greencart.png")} />}
                        onPress={() => this.setState({ selectedTab: 'cart' })}>
                        {<Cart />}
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
