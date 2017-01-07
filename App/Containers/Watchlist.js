// @flow

import React from 'react'
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/WatchlistStyle'
import FooterNav from '../Components/FooterNav';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

let data = [
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

class Watchlist extends React.Component {

  constructor(props) {
    super(props);

    this.rootRedirect = this.rootRedirect.bind(this);
  }

  rootRedirect(route) {
    this.props.getRoute(route);
  }

  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#111215'}}>
        <ScrollableTabView
          prerenderingSiblingsNumber={1}
          tabBarPosition='top'
          renderTabBar={(props) => <ScrollableTabBar {...props} style={{borderWidth: 0}} />}
          style={styles.header}
          tabBarBackgroundColor="rgba(22, 23, 27, 0.9)"
          tabBarInactiveTextColor="#fff"
          tabBarUnderlineStyle={{backgroundColor: this.props.colorForHeader}}
          tabBarActiveTextColor={this.props.colorForHeader} >
          <ScrollView tabLabel="MOVIES">
            <PosterList images={data}  />
          </ScrollView>
          <ScrollView tabLabel="TV-SHOWS">
            <Text>sfsdfsdfsd</Text>
          </ScrollView>
        </ScrollableTabView>

        <FooterNav route={this.rootRedirect} activeTab={'watchList'} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist)
