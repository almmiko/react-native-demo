// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.background
  },
  header: {
    marginTop: 53
  },
  moviePoster: {
    flex: 2,
    height: 250
  }
})
