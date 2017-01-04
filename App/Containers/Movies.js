// @flow

import React from 'react'
import {
    ScrollView,
    Text,
    TouchableOpacity,
    Image,
    View
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import { Images } from '../Themes'

// Styles
import styles from './Styles/MoviesStyle'

// I18n
import I18n from 'react-native-i18n'

// components
import FooterNav from '../Components/FooterNav';

let data = [
    {src: 'movie_1'},
    {src: 'movie_2'},
    {src: 'movie_3'},
    {src: 'movie_4'},
    {src: 'movie_5'},
    {src: 'movie_6'},
    {src: 'movie_1'},
    {src: 'movie_2'},
    {src: 'movie_3'},
    {src: 'movie_4'},
    {src: 'movie_5'},
    {src: 'movie_6'}
];

let Row = (props) => {

    function handlePressComponents() {
        NavigationActions.movie()
    }

    return (
        <View style={styles.container}>
            {props.subset.map((img, idx) => {
                return (
                    <TouchableOpacity onPress={handlePressComponents} style={{flex: 1}} key={idx} activeOpacity={0.9}>
                      <Image
                          style={styles.moviePoster}
                          source={{uri: img.src}} />
                    </TouchableOpacity>);
            })}
        </View>
    );
};

let PosterList = (props) => {

    let list = [];
    let images = props.images;

    for (let i = 0; i < images.length; i += 2) {
        let subset = images.slice(i, i + 2);
        list.push(<Row key={i} subset={subset} />)
    }

    return (
        <View>
            {list}
        </View>
    );
};

class Movies extends React.Component {

  render () {
    return (
        <View style={{flex: 1}}>
          <ScrollableTabView
              prerenderingSiblingsNumber={2}
              tabBarPosition='top'
              renderTabBar={(props) => <ScrollableTabBar {...props} style={{borderWidth: 0}} />}
              style={styles.header}
              tabBarBackgroundColor="rgba(22, 23, 27, 0.9)"
              tabBarInactiveTextColor="#fff"
              tabBarUnderlineStyle={{backgroundColor: '#ef1a51'}}
              tabBarActiveTextColor="#ef1a51">
            <ScrollView tabLabel="For You">
              <PosterList images={data}  />
            </ScrollView>
            <ScrollView tabLabel="Top">
              <PosterList images={data}  />
            </ScrollView>
            <ScrollView tabLabel="Action">
              <PosterList images={data}  />
            </ScrollView>
            <ScrollView tabLabel="Comedy">
              <PosterList images={data}  />
            </ScrollView>
            <ScrollView tabLabel="Family">
              <PosterList images={data}  />
            </ScrollView>
          </ScrollableTabView>
          <FooterNav />
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
