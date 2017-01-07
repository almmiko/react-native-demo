// @flow

import React from 'react'
import {
  ScrollView,
  Text,
  View,
  Image
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';

// Styles
import styles from './Styles/ProfileStyle'

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import FooterNav from '../Components/FooterNav'

let data = [
  {name: 'you', text1: 'has added', text2: 'on your Watchlist', film: 'Mad Max Fury Road', pic: 'user_pic'},
  {name: 'Carole M.', text1: 'and', text2: 'are now connected.', film: 'you', pic: 'user_pic_1'},
  {name: 'Ben L.', text1: 'has added', text2: 'on his Watchlist', film: 'Gardians of the galaxy', pic: 'user_pic_2'},
  {name: 'you', text1: 'has added', text2: 'on your Watchlist', film: 'Mad Max Fury Road', pic: 'user_pic'},
  {name: 'Carole M.', text1: 'and', text2: 'are now connected.', film: 'you', pic: 'user_pic_1'},
  {name: 'Ben L.', text1: 'has added', text2: 'on his Watchlist', film: 'Gardians of the galaxy', pic: 'user_pic_2'},
  {name: 'you', text1: 'has added', text2: 'on your Watchlist', film: 'Mad Max Fury Road', pic: 'user_pic'},
  {name: 'Carole M.', text1: 'and', text2: 'are now connected.', film: 'you', pic: 'user_pic_1'},
  {name: 'Ben L.', text1: 'has added', text2: 'on his Watchlist', film: 'Gardians of the galaxy', pic: 'user_pic_2'},
  {name: 'you', text1: 'has added', text2: 'on your Watchlist', film: 'Mad Max Fury Road', pic: 'user_pic'},
  {name: 'Carole M.', text1: 'and', text2: 'are now connected.', film: 'you', pic: 'user_pic_1'},
  {name: 'Ben L.', text1: 'has added', text2: 'on his Watchlist', film: 'Gardians of the galaxy', pic: 'user_pic_2'},

  ];


let Users = (props) => {

  let users = data.map((user, idx) => {

    let color = idx % 2 == 0 ? '#111215' : '#0c0d0f';

    return (
      <View key={idx} style={{flexDirection: 'row', padding: 30, backgroundColor: color}}>
        <Image style={{width: 50, height: 50, marginRight: 20}} source={{uri: user.pic}} />
        <View style={{justifyContent: 'center'}}>
          <Text style={{color: '#9f56dc', fontFamily: 'LatoBold'}}>{user.name.toUpperCase()}</Text>
          <Text style={{color: '#676971'}}>{user.text1}<Text style={{color: '#fff'}}> {user.film}</Text> {user.text2}</Text>
        </View>
      </View>
    );
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#111215'}}>
      {users}
    </View>
  );
};

class Profile extends React.Component {

  constructor (props) {
    super(props);
    this.state = {};

    this.rootRedirect = this.rootRedirect.bind(this);
  }

  rootRedirect(route) {
    this.props.getRoute(route);
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <ParallaxScrollView
          style={styles.container}
          backgroundColor={'rgb(147, 79, 203)'}
          stickyHeaderHeight={70}
          renderStickyHeader={() => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={{uri: 'user_pic'}} style={{width: 50, height: 50, marginLeft: 30,  margin: 10}} />
              <Text style={{ fontFamily: 'LatoBold', color: '#fff', fontWeight: 'bold', fontSize: 13}}>{'Jessica L.'.toUpperCase()}</Text>

              <View style={{flexDirection: 'row', marginLeft: 60}}>
                <View style={{flexDirection: 'row', marginRight: 20}}>
                   <Icon style={styles.userStatsIcon} name={'user-o'} size={18} color='#fff' />
                   <Text style={styles.userStatsNumber}>267</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                   <Icon style={styles.userStatsIcon} name={'comment-o'} size={18} color='#fff' />
                   <Text style={styles.userStatsNumber}>432</Text>
                </View>
              </View>
            </View>
            )}
          parallaxHeaderHeight={300}
          renderForeground={() => (
         <View style={{ flex: 1 }}>
            <Image source={{uri: 'user_bg'}} style={{resizeMode: 'cover', flex: 1}}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={{uri: 'user_pic'}} style={{width: 100, height: 100}} />
                <Text style={styles.userName}>{'Jessica L.'.toUpperCase()}</Text>

                <View style={{flexDirection: 'row', marginTop: 25}}>
                  <Icon style={styles.userStatsIcon} name={'user-o'} size={18} color='#fff' />
                  <Text style={styles.usersStats}>
                         <Text style={styles.userStatsNumber}>267</Text> Friends</Text>

                  <Icon style={styles.userStatsIcon} name={'comment-o'} size={18} color='#fff' />
                  <Text style={styles.usersStats}>
                         <Text style={styles.userStatsNumber}>432</Text> Comments</Text>
                </View>
              </View>
            </Image>
          </View>
      )}>
          <View style={{ flex: 1, backgroundColor: '#111215'}}>
            <Users />
          </View>
        </ParallaxScrollView>

        <View style={{height: 50, backgroundColor: '#0c0d0f'}}></View>
        <FooterNav route={this.rootRedirect} activeTab={'profile'} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
