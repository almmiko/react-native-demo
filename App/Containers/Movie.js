// @flow

import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import ScrollableTabView from 'react-native-scrollable-tab-view';

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
        color: '#ef1a51',
        fontFamily: 'LatoBold'
    },
    movieYear: {
        color: '#fff',
        fontFamily: 'LatoBold'
    },
    movieTitle: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 1,
        marginBottom: 1,
        fontFamily: 'LatoBold'
    },
    movieGanre: {
        color: '#d5d5d5',
        fontFamily: 'LatoBold'
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
    },
    descriptionContainer: {
      padding: 20,
    },
    descriptionTitle: {
      color: '#000',
      fontFamily: 'LatoBold'
    },
    descriptionText: {
      color: '#676971',
      fontFamily: 'LatoBold'
    },
    actorName: {color: '#fff', fontSize: 28, fontFamily: 'LatoBold'},
    actorHeroName: {color: '#ef1a51', fontStyle: 'italic'},
    actorsNamePositions: {flex: 1, marginTop: 140, marginLeft: 20}
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
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionTitle}>{'Synopsis:'.toUpperCase()}</Text>
              <Text style={styles.descriptionText}>A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for her home-land with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max.</Text>
            </View>


            <ScrollableTabView
                prerenderingSiblingsNumber={2}
                tabBarPosition='top'
                tabBarBackgroundColor="#111418"
                tabBarInactiveTextColor="#fff"
                styles={{fontFamily: 'LatoBold'}}
                tabBarUnderlineStyle={{backgroundColor: '#ef1a51'}}
                tabBarActiveTextColor="#ef1a51">

              <View tabLabel="PICTURES">
                <View style={{flex: 1}}>
                  <Image resizeMode="cover" style={{height: 200}} source={{uri: 'movie_info_1'}}/>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image resizeMode="cover" style={{height: 250, width: 200}} source={{uri: 'movie_info_2'}} />
                  <View style={{flex: 1, flexDirection: 'column'}}>
                    <Image resizeMode="cover" style={{height: 125}} source={{uri: 'movie_info_3'}} />
                    <Image resizeMode="cover" style={{height: 125}} source={{uri: 'movie_info_4'}} />
                  </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image resizeMode="cover" style={{height: 250, width: 200}} source={{uri: 'movie_info_6'}} />
                  <Image resizeMode="cover" style={{height: 250, width: 200}} source={{uri: 'movie_info_7'}} />
                </View>
              </View>
              <View tabLabel="CASTING">
                <View style={{flex: 1}}>
                  <Image  style={{height: 200}} source={{uri: 'actor_1'}}>
                    <View style={{position: 'absolute', bottom: 20, left: 20}}>
                      <Text style={styles.actorName}>{'Tom hardy'.toUpperCase()}</Text>
                      <Text style={styles.actorHeroName}>Max Rockatansky</Text>
                    </View>
                  </Image>
                </View>
                <View style={{flex: 2, flexDirection: 'row'}}>
                  <Image style={{height: 250, flex: 2}} source={{uri: 'actor_2'}} >
                    <View style={styles.actorsNamePositions}>
                      <Text style={styles.actorName}>{'Charlize Theron'.toUpperCase()}</Text>
                      <Text style={styles.actorHeroName}>Imperator Furiosa</Text>
                    </View>
                  </Image>
                  <Image style={{height: 250, flex: 2}} source={{uri: 'actor_3'}} >
                    <View style={styles.actorsNamePositions}>
                      <Text style={styles.actorName}>{'Nicholas Hoult'.toUpperCase()}</Text>
                      <Text style={styles.actorHeroName}>Nux</Text>
                    </View>
                  </Image>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image style={{height: 250, flex: 1 }} source={{uri: 'actor_4'}} >
                    <View style={styles.actorsNamePositions}>
                      <Text style={[styles.actorName, {fontSize: 24, marginTop: 5}]}>{'Hugh Keays-Byrne'.toUpperCase()}</Text>
                      <Text style={styles.actorHeroName}>Imperator</Text>
                    </View>
                  </Image>
                  <Image style={{height: 250, flex: 1 }} source={{uri: 'actor_5'}} >
                    <View style={styles.actorsNamePositions}>
                      <Text style={styles.actorName}>{'Zoë Kravitz'.toUpperCase()}</Text>
                      <Text style={styles.actorHeroName}>Toast the Knowing</Text>
                    </View>
                  </Image>
                </View>
              </View>
            </ScrollableTabView>

            <View style={{backgroundColor: '#101317', height: 100, flex: 1, alignItems: 'center',
        justifyContent: 'center',}}>
              <Text style={{color: '#5b5d63', fontFamily: 'LatoBold'}}>{'People who liked this'.toUpperCase()}</Text>
              <Text style={{color: '#fff', fontFamily: 'LatoBold'}}>{'also liked:'.toUpperCase()}</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity style={{flex: 1}} activeOpacity={0.9}>
                <Image  style={{height: 200, flex: 2}} source={{uri: 'movie_1'}} />
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1}} activeOpacity={0.9}>
                <Image  style={{height: 200, flex: 2}} source={{uri: 'movie_2'}} />
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1}} activeOpacity={0.9}>
                <Image  style={{height: 200, flex: 2}} source={{uri: 'movie_3'}} />
              </TouchableOpacity>
            </View>

          </ScrollView>
        </ParallaxView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
