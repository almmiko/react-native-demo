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
    },
    textStyles: {color: '#fff', fontFamily: 'LatoRegular'}
});

let icons = [
        {icon: 'film', iconColor: '#fff', iconSize: 15, textColor: '#fff', text: 'Movies', key: 'movies'},
        {icon: 'television', iconColor: '#fff', iconSize: 15, textColor: '#fff', text: 'TV shows', key: 'tvShows'},
        {icon: 'heart-o', iconColor: '#fff', iconSize: 15, textColor: '#fff',text: 'Watchlist', key: 'watchList'},
        {icon: 'user-o', iconColor: '#fff', iconSize: 15, textColor: '#fff', text: 'Profile'},
    ];

let Icons = (props) => {

    let goToRoute = (route, e) => {
      props.route(route);
    };

    return (
        <View style={styles.container}>
            {props.icons.map((icon, idx) => {

              let activeTabColor = null;

              if (props.activeTab === icon.key) {
                switch (props.activeTab) {
                  case 'tvShows':
                    activeTabColor = '#1aceef';
                    break;
                  case 'movies':
                    activeTabColor = '#ef1a51';
                    break;
                  case 'watchList':
                    activeTabColor = '#18F0C0';
                    break;
                  default:
                    activeTabColor = '#fff';
                }
              } else {
                activeTabColor = '#fff';
              }

                return (
                    <TouchableOpacity onPress={goToRoute.bind(null, icon.text)}  key={idx}  style={styles.touchable} activeOpacity={0.7}>
                        <View  style={styles.icon}>
                            <Icon name={icon.icon}
                                  size={icon.iconSize} color={activeTabColor} />
                            <Text style={[styles.textStyles, {color: activeTabColor}]}>{icon.text}</Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

let FooterNav = (props) => {

    let goToRoute = (route) => {
      props.route(route);
    };

    return (
        <Icons route={goToRoute} icons={icons} activeTab={props.activeTab} />
    );
};

export default FooterNav;
