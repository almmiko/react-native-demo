// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: '#16171b'
  },
  textSpan: {
    color: '#1aceef',
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
  movieDescContainer: {
    flex: 1,
    marginTop: 20,
    marginLeft: 30,
    marginBottom: 20
  },
  descriptionContainer: {
    padding: 20,
    backgroundColor: '#fff'
  },
  descriptionTitle: {
    color: '#000',
    fontFamily: 'LatoBold'
  },
  descriptionText: {
    color: '#676971',
    fontFamily: 'LatoBold'
  },
})
