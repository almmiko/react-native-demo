// @flow

import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'


// I18n
import I18n from 'react-native-i18n'


import ParallaxView from 'react-native-parallax-view';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cover: {
        height: 600,
        padding: 20
    },
    textSpan: {
        color: '#ef1a51'
    },
    movieYear: {
        color: '#fff'
    },
    movieTitle: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 1,
        marginBottom: 1
    },
    movieGanre: {
        color: '#d5d5d5'
    },
    line: {
        borderWidth: 1,
        borderColor: '#cc1a50',
        width: 30,
        marginTop: 30,
        marginBottom: 40
    },
    movieInfo: {
        position: 'absolute',
        left: 20,
        right: 0,
        bottom: 40
    },
    iconsContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10
    },
    iconText: {
        color: '#676971',
        marginLeft: 10
    },
    rating: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        borderWidth: 1,
        borderColor: '#cc1a50',
        borderRadius: 100,
        width: 100,
        height: 100,
        bottom: 0,
        right: 30
    },
    ratingNumber: {
        color: '#ef1a51',
        fontSize: 25,
        fontWeight: 'bold'
    },
    ratingOf: {
        color: '#676971'
    }
});



class Movie extends React.Component {

  render () {
    return (
        <ParallaxView
            backgroundSource={{uri: 'cover'}}
            windowHeight={600}
            style={{marginTop: 53}}
            header={(
                    <View style={styles.container}>
                            <View style={styles.movieInfo}>
                                <Text style={styles.movieYear}><Text style={styles.textSpan}>MOVIE</Text> 2015</Text>
                                <Text style={styles.movieTitle}>MAD MAX FURY ROAD</Text>
                                <Text style={styles.movieGanre}>Action, Adventure, Sci-Fi   -  2h  -  14 May 2015</Text>
                                <View style={styles.line} />


                                <View style={styles.iconsContainer}>
                                    <Icon name={'heart-o'} size={20} color={'#676971'} />
                                    <Text style={styles.iconText}>3.251 likes</Text>
                                </View>

                                <View style={styles.iconsContainer}>
                                    <Icon name={'comments-o'} size={20} color={'#676971'} />
                                    <Text style={styles.iconText}>+200 comments</Text>
                                </View>

                                <View style={styles.rating}>
                                    <Text style={styles.ratingNumber}>8.2</Text><Text style={styles.ratingOf}> /10</Text>
                                </View>



                            </View>
                    </View>
                )} >
          <ScrollView style={{flex: 1}}>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text>
            <Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text><Text>sfsdfsd f</Text>
          </ScrollView>
        </ParallaxView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
