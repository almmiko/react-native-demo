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
    this.goToshow = this.goToshow.bind(this);
  }

  goToshow() {
    NavigationActions.tvShow()
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
            <View style={{flex: 1}}>

              <View style={{marginBottom: 10, padding: 20}}>
                <TouchableOpacity onPress={this.goToshow} activeOpacity={0.6}>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={{uri: 'cover_serial_4'}} style={{width: 100, height: 60}}/>
                    <View style={{paddingTop: 10, paddingLeft: 10}}>
                      <Text style={{color: '#fff', fontFamily: 'LatoBold'}}>{'Breaking bad'.toUpperCase()}</Text>
                      <Text style={{color: '#7e7e7e', fontFamily: 'LatoBold'}}>Next episode: 3 days (06.03.16)</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
                  <TouchableOpacity style={{flex: 1}}>
                    <View style={{flex: 2, marginRight: 10}}>
                      <Image style={{height: 100}} source={{uri: 'br_2'}}/>
                      <Text style={{color: '#fff', fontFamily: 'LatoBold', marginTop: 10}}>S1E6 The deal</Text>
                      <Text style={{color: '#7e7e7e', fontFamily: 'LatoBold'}}>21 Feb. 2016</Text>
                      <Text style={{position: 'absolute', right: 0, bottom: 20, color: '#111215', fontSize: 12, width: 50, textAlign: 'center', fontFamily: 'LatoBold', backgroundColor: '#18f0c0', borderRadius: 100}}>NEW</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex: 1}}>
                    <View style={{flex: 2}}>
                      <Image style={{height: 100}} source={{uri: 'br_5'}}/>
                      <Text style={{color: '#fff', fontFamily: 'LatoBold', marginTop: 10}}>S1E5 The good life</Text>
                      <Text style={{color: '#7e7e7e', fontFamily: 'LatoBold'}}>14 Feb. 2016</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{marginBottom: 10, padding: 20,  backgroundColor: '#0c0d0f'}}>
                <TouchableOpacity onPress={this.goToshow} activeOpacity={0.6}>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={{uri: 'cover_serial_1'}} style={{width: 100, height: 60}}/>
                    <View style={{paddingTop: 10, paddingLeft: 10}}>
                      <Text style={{color: '#fff', fontFamily: 'LatoBold'}}>BILLIONS</Text>
                      <Text style={{color: '#7e7e7e', fontFamily: 'LatoBold'}}>Next episode: 3 days (06.03.16)</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
                  <TouchableOpacity style={{flex: 1}}>
                    <View style={{flex: 2, marginRight: 10}}>
                      <Image style={{height: 100}} source={{uri: 's_1'}}/>
                      <Text style={{color: '#fff', fontFamily: 'LatoBold', marginTop: 10}}>S1E6 The deal</Text>
                      <Text style={{color: '#7e7e7e', fontFamily: 'LatoBold'}}>21 Feb. 2016</Text>
                      <Text style={{position: 'absolute', right: 0, bottom: 20, color: '#111215', fontSize: 12, width: 50, textAlign: 'center', fontFamily: 'LatoBold', backgroundColor: '#18f0c0', borderRadius: 100}}>NEW</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex: 1}}>
                    <View style={{flex: 2}}>
                      <Image style={{height: 100}} source={{uri: 's_2'}}/>
                      <Text style={{color: '#fff', fontFamily: 'LatoBold', marginTop: 10}}>S1E5 The good life</Text>
                      <Text style={{color: '#7e7e7e', fontFamily: 'LatoBold'}}>14 Feb. 2016</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{marginBottom: 10, padding: 20}}>
                <TouchableOpacity onPress={this.goToshow} activeOpacity={0.6}>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={{uri: 'sails_poster'}} style={{width: 100, height: 60}}/>
                    <View style={{paddingTop: 10, paddingLeft: 10}}>
                      <Text style={{color: '#fff', fontFamily: 'LatoBold'}}>BLACK SAILS</Text>
                      <Text style={{color: '#7e7e7e', fontFamily: 'LatoBold'}}>Next episode: 6 days (06.03.16)</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
                  <TouchableOpacity style={{flex: 1}}>
                    <View style={{flex: 2, marginRight: 10}}>
                      <Image style={{height: 100}} source={{uri: 's_3'}}/>
                      <Text style={{color: '#fff', fontFamily: 'LatoBold', marginTop: 10}}>S3E5 XXIII.</Text>
                      <Text style={{color: '#7e7e7e', fontFamily: 'LatoBold'}}>20 Feb. 2016</Text>
                      <Text style={{position: 'absolute', right: 0, bottom: 20, color: '#111215', fontSize: 12, width: 50, textAlign: 'center', fontFamily: 'LatoBold', backgroundColor: '#18f0c0', borderRadius: 100}}>NEW</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex: 1}}>
                    <View style={{flex: 2}}>
                      <Image style={{height: 100}} source={{uri: 's_4'}}/>
                      <Text style={{color: '#fff', fontFamily: 'LatoBold', marginTop: 10}}>S1E5 The good life</Text>
                      <Text style={{color: '#7e7e7e', fontFamily: 'LatoBold'}}>14 Feb. 2016</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

            </View>

            <View style={{height: 60}}>

            </View>
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
