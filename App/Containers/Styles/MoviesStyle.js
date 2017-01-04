// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

    container: {
        flex: 1,
        flexDirection: 'row'
    },
    header: {
      marginTop: 53
    },
    moviePoster: {
        flex: 2,
        height: 250
    }
})
