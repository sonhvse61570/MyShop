import React, { Component } from 'react';
import { Navigator } from 'react-native';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

export default class App extends Component {
    render() {
        return (
            <Navigator 
                initialRoute={{ name: 'MAIN' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'MAIN': return <Main navigator={navigator} />;
                        case 'CHANGE_INFO': return <ChangeInfo navigator={navigator} user={route.user} />;
                        case 'AUTHENTICATION': return <Authentication navigator={navigator} />;
                        default: return <OrderHistory navigator={navigator} />;
                    }
                }}
                configureScene={route => {
                    if (route.name === 'AUTHENTICATION') 
                    { return Navigator.SceneConfigs.FloatFromRight; }
                    return Navigator.SceneConfigs.FloatFromLeft;
                }}
            />
        );
    }
}