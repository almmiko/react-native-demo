// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  usersStats: {color: '#e0befd', fontFamily: 'LatoRegular', fontSize: 14, marginRight: 20},
  userStatsNumber: {fontFamily: 'LatoBold', color: '#fff', fontSize: 16},
  userStatsIcon: {marginRight: 5, marginTop: 2},
  userName: {marginTop: 10, fontFamily: 'LatoBold', color: '#fff', fontWeight: 'bold', fontSize: 22}
})
