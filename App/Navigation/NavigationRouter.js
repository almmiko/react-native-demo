// @flow

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
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

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
          <Scene key='presentationScreen' component={PresentationScreen} title='Ignite' renderLeftButton={NavItems.hamburgerButton} />
          <Scene key='componentExamples' component={AllComponentsScreen} title='Components' />
          <Scene key='usageExamples' component={UsageExamplesScreen} title='Usage' rightTitle='Example' onRight={() => window.alert('Example Pressed')} />
          <Scene key='login' component={LoginScreen} title='Login' hideNavBar />
          <Scene key='listviewExample' component={ListviewExample} title='Listview Example' />
          <Scene key='listviewGridExample' component={ListviewGridExample} title='Listview Grid' />
          <Scene key='listviewSectionsExample' component={ListviewSectionsExample} title='Listview Sections' />
          <Scene key='listviewSearchingExample' component={ListviewSearchingExample} title='Listview Searching' navBar={CustomNavBar} />
          <Scene key='mapviewExample' component={MapviewExample} title='Mapview Example' />
          <Scene key='apiTesting' component={APITestingScreen} title='API Testing' />
          <Scene key='theme' component={ThemeScreen} title='Theme' />

          {/* Custom navigation bar example */}
          <Scene key='deviceInfo' component={DeviceInfoScreen} title='Device Info' />

          <Scene titleStyle={{color: '#ef1a51', fontFamily: 'LatoBold'}} navigationBarStyle={{backgroundColor: 'rgba(22, 23, 27, 0.9)'}} initial key='movies' component={Movies} title='Movies' />

          <Scene titleStyle={{color: '#ef1a51', fontFamily: 'LatoBold'}} navigationBarStyle={{backgroundColor: 'rgb(22, 23, 27)'}}  key='movie' component={Movie} title='Movie' />


        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
