import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 60,
        backgroundColor: 'rgba(22, 23, 27, 0.9)',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    caption: {
        textAlign: 'center',
        marginTop: 5
    },
    icon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchable: {
        flex: 1,
    }
});

let icons = [
        {icon: 'film', iconColor: '#ef1a51', iconSize: 15, textColor: '#ef1a51', text: 'Movies'},
        {icon: 'television', iconColor: '#fff', iconSize: 15, textColor: '#fff', text: 'TV shows'},
        {icon: 'heart-o', iconColor: '#fff', iconSize: 15, textColor: '#fff',text: 'Watchlist'},
        {icon: 'user-o', iconColor: '#fff', iconSize: 15, textColor: '#fff', text: 'Profile'},
    ];

let Icons = (props) => {
    return (
        <View style={styles.container}>
            {props.icons.map((icon, idx) => {
                return (
                    <TouchableOpacity  key={idx}  style={styles.touchable} activeOpacity={0.7}>
                        <View  style={styles.icon}>
                            <Icon name={icon.icon} size={icon.iconSize} color={icon.iconColor} />
                            <Text style={{color: icon.textColor, fontFamily: 'LatoRegular' }}>{icon.text}</Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

let FooterNav = (props) => {
    return (
        <Icons icons={icons} />
    );
};

export default FooterNav;
