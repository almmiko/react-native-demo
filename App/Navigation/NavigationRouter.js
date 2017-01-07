// @flow

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Scene, Router, Actions as NavigationActions } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar from '../Navigation/CustomNavBar'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import ListviewSectionsExample from '../Containers/ListviewSectionsExample'
import ListviewSearchingExample from '../Containers/ListviewSearchingExample'
import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'

import Movies from '../Containers/Movies'
import Movie from '../Containers/Movie'

import TvShows from '../Containers/TvShows'
import TvShow from '../Containers/TvShow'

import Watchlist from '../Containers/Watchlist'

import Profile from '../Containers/Profile'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

const styles = StyleSheet.create({
  movieTitle: {color: '#ef1a51', fontFamily: 'LatoBold'},
  bar: {backgroundColor: 'rgba(22, 23, 27, 0.9)'},
  child: {backgroundColor: 'rgb(22, 23, 27)'}
});

class NavigationRouter extends Component {

  constructor(props) {
    super(props);

    this.redirectToView = this.redirectToView.bind(this);
  }

  redirectToView(route) {

    let path = null;

    switch (route) {
      case 'Profile':
        path = 'profile';
        break;
      case 'TV shows':
        path = 'tvShows';
        break;
      case 'Watchlist':
        path = 'watchList';
        break;
      default:
        path = 'movies';
    }

    NavigationActions[path]({type: "reset"});

  }

  render () {
    return (
      <Router>
        <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
          <Scene key='presentationScreen' component={PresentationScreen} title='Ignite' renderLeftButton={NavItems.hamburgerButton} />

          <Scene key='usageExamples' component={UsageExamplesScreen} title='Usage' rightTitle='Example' onRight={() => window.alert('Example Pressed')} />
          <Scene key='login' component={LoginScreen} title='Login' hideNavBar />
          <Scene key='listviewSearchingExample' component={ListviewSearchingExample} title='Listview Searching' navBar={CustomNavBar} />


          {/* Custom navigation bar example */}
          <Scene key='deviceInfo' component={DeviceInfoScreen} title='Device Info' />

          {/* Movies */}
          <Scene colorForHeader="#ef1a51"
                 getRoute={this.redirectToView}
                 titleStyle={styles.movieTitle}
                 navigationBarStyle={styles.bar}
                 initial
                 key='movies'
                 component={Movies}
                 title='MOVIES' />

          <Scene titleStyle={styles.movieTitle}
                 navigationBarStyle={styles.child}
                 key='movie'
                 component={Movie}
                 title='MAD MAX FURY ROAD' />

          {/* TV shows*/}
          <Scene colorForHeader="#1aceef"
                 getRoute={this.redirectToView}
                 key='tvShows' component={TvShows}
                 title='TV SHOWS'
                 titleStyle={[styles.movieTitle, {color: '#1aceef'}]}
                 navigationBarStyle={styles.bar} />

          <Scene colorForHeader="#1aceef"
                 key='tvShow'
                 component={TvShow}
                 title={'Breaking bad'.toUpperCase()}
                 titleStyle={[styles.movieTitle, {color: '#1aceef'}]}
                 navigationBarStyle={styles.child} />

          {/* WatchList*/}
          <Scene colorForHeader="#18f0c0"
                 getRoute={this.redirectToView}
                 key='watchList' component={Watchlist}
                 title={'watchList'.toUpperCase()}
                 titleStyle={[styles.movieTitle, {color: '#18f0c0'}]}
                 navigationBarStyle={styles.bar} />

          {/* Profile */}
          <Scene hideNavBar
                 getRoute={this.redirectToView}
                 key='profile' component={Profile} />

        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
