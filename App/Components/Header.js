import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import React from 'react';
import NavigationBar from 'react-native-navbar';
import { ScrollableTabBar } from 'react-native-scrollable-tab-view';

const styles = StyleSheet.create({

});

let Header = (props) => {

    const titleConfig = {
        title: 'Movies',
        tintColor: '#ef1a51'
    };

    return (
        <View style={props.style}>
            <View>
                <NavigationBar
                    tintColor='rgba(22, 23, 27, 0.9)'
                    title={titleConfig} />
            </View>
            <View>
                <ScrollableTabBar {...props} style={{borderWidth: 0}}/>
            </View>
        </View>
    );
};

export default Header;