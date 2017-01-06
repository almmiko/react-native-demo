// @flow

import React from 'react'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  View,
  StyleSheet
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

import styles from './Styles/MoviesStyle'
// components
import FooterNav from '../Components/FooterNav';

let stylesInline = StyleSheet.create({
  title: {color: '#fff', fontFamily: 'LatoBold'},
  text: {fontFamily: 'LatoRegular', color: '#676971', fontSize: 11},
  rate: {fontFamily: 'LatoBold', color: '#1aceef'}
});

let data = [
  {image: 'cover_serial_1', title: 'BILLIONS', text1: '2016 - 1 SAISON - ', text2: 'Last: 21 Feb. 2016', text3: 'Next: 3 days', rate: '8.4'},
  {image: 'cover_serial_2', title: 'SUITS', text1: '2011 - 5 SAISONs - ', text2: 'Last: 2 Mar. 2016', text3: 'Next: 2016', rate: '8.7'},
  {image: 'cover_serial_3', title: 'RAY DONOVAN', text1: '2008 - 3 SAISONs - ', text2: 'Last: 27 Sep. 2015', text3: 'Next: 2017', rate: '8.3'},
  {image: 'cover_serial_4', title: 'BREAKING BAD', text1: '2018 - 5 SAISONs -', text2: 'Last: 29 Sep. 2013', text3: 'Production complate', rate: '9.5'},
  {image: 'cover_serial_5', title: 'NARCOS', text1: '2016 - 1 SAISON - ', text2: 'Last: 21 Feb. 2016', text3: 'Next: 3 days', rate: '8.4'},
  {image: 'cover_serial_1', title: 'BILLIONS', text1: '2016 - 1 SAISON - ', text2: 'Last: 21 Feb. 2016', text3: 'Next: 3 days', rate: '8.4'},
  {image: 'cover_serial_2', title: 'SUITS', text1: '2011 - 5 SAISONs - ', text2: 'Last: 2 Mar. 2016', text3: 'Next: 2016', rate: '8.7'},
  {image: 'cover_serial_3', title: 'RAY DONOVAN', text1: '2008 - 3 SAISONs - ', text2: 'Last: 27 Sep. 2015', text3: 'Next: 2017', rate: '8.3'},
  {image: 'cover_serial_4', title: 'BREAKING BAD', text1: '2018 - 5 SAISONs -', text2: 'Last: 29 Sep. 2013', text3: 'Production complate', rate: '9.5'},
  {image: 'cover_serial_5', title: 'NARCOS', text1: '2016 - 1 SAISON - ', text2: 'Last: 21 Feb. 2016', text3: 'Next: 3 days', rate: '8.4'},
  {image: 'cover_serial_1', title: 'BILLIONS', text1: '2016 - 1 SAISON - ', text2: 'Last: 21 Feb. 2016', text3: 'Next: 3 days', rate: '8.4'},
  {image: 'cover_serial_2', title: 'SUITS', text1: '2011 - 5 SAISONs - ', text2: 'Last: 2 Mar. 2016', text3: 'Next: 2016', rate: '8.7'},
  {image: 'cover_serial_3', title: 'RAY DONOVAN', text1: '2008 - 3 SAISONs - ', text2: 'Last: 27 Sep. 2015', text3: 'Next: 2017', rate: '8.3'},
  {image: 'cover_serial_4', title: 'BREAKING BAD', text1: '2018 - 5 SAISONs -', text2: 'Last: 29 Sep. 2013', text3: 'Production complate', rate: '9.5'},
  {image: 'cover_serial_5', title: 'NARCOS', text1: '2016 - 1 SAISON - ', text2: 'Last: 21 Feb. 2016', text3: 'Next: 3 days', rate: '8.4'},
  {image: 'cover_serial_1', title: 'BILLIONS', text1: '2016 - 1 SAISON - ', text2: 'Last: 21 Feb. 2016', text3: 'Next: 3 days', rate: '8.4'},
  {image: 'cover_serial_2', title: 'SUITS', text1: '2011 - 5 SAISONs - ', text2: 'Last: 2 Mar. 2016', text3: 'Next: 2016', rate: '8.7'},
  {image: 'cover_serial_3', title: 'RAY DONOVAN', text1: '2008 - 3 SAISONs - ', text2: 'Last: 27 Sep. 2015', text3: 'Next: 2017', rate: '8.3'},
  {image: 'cover_serial_4', title: 'BREAKING BAD', text1: '2018 - 5 SAISONs -', text2: 'Last: 29 Sep. 2013', text3: 'Production complate', rate: '9.5'},
  {image: 'cover_serial_5', title: 'NARCOS', text1: '2016 - 1 SAISON - ', text2: 'Last: 21 Feb. 2016', text3: 'Next: 3 days', rate: '8.4'},{image: 'cover_serial_1', title: 'BILLIONS', text1: '2016 - 1 SAISON - ', text2: 'Last: 21 Feb. 2016', text3: 'Next: 3 days', rate: '8.4'},
  {image: 'cover_serial_2', title: 'SUITS', text1: '2011 - 5 SAISONs - ', text2: 'Last: 2 Mar. 2016', text3: 'Next: 2016', rate: '8.7'},
  {image: 'cover_serial_3', title: 'RAY DONOVAN', text1: '2008 - 3 SAISONs - ', text2: 'Last: 27 Sep. 2015', text3: 'Next: 2017', rate: '8.3'},
  {image: 'cover_serial_4', title: 'BREAKING BAD', text1: '2018 - 5 SAISONs -', text2: 'Last: 29 Sep. 2013', text3: 'Production complate', rate: '9.5'},
  {image: 'cover_serial_5', title: 'NARCOS', text1: '2016 - 1 SAISON - ', text2: 'Last: 21 Feb. 2016', text3: 'Next: 3 days', rate: '8.4'},
  {image: 'cover_serial_1', title: 'BILLIONS', text1: '2016 - 1 SAISON - ', text2: 'Last: 21 Feb. 2016', text3: 'Next: 3 days', rate: '8.4'},
  {image: 'cover_serial_2', title: 'SUITS', text1: '2011 - 5 SAISONs - ', text2: 'Last: 2 Mar. 2016', text3: 'Next: 2016', rate: '8.7'},
  {image: 'cover_serial_3', title: 'RAY DONOVAN', text1: '2008 - 3 SAISONs - ', text2: 'Last: 27 Sep. 2015', text3: 'Next: 2017', rate: '8.3'},
  {image: 'cover_serial_4', title: 'BREAKING BAD', text1: '2018 - 5 SAISONs -', text2: 'Last: 29 Sep. 2013', text3: 'Production complate', rate: '9.5'},
  {image: 'cover_serial_5', title: 'NARCOS', text1: '2016 - 1 SAISON - ', text2: 'Last: 21 Feb. 2016', text3: 'Next: 3 days', rate: '8.4'},
  {image: 'cover_serial_1', title: 'BILLIONS', text1: '2016 - 1 SAISON - ', text2: 'Last: 21 Feb. 2016', text3: 'Next: 3 days', rate: '8.4'},
  {image: 'cover_serial_2', title: 'SUITS', text1: '2011 - 5 SAISONs - ', text2: 'Last: 2 Mar. 2016', text3: 'Next: 2016', rate: '8.7'},
  {image: 'cover_serial_3', title: 'RAY DONOVAN', text1: '2008 - 3 SAISONs - ', text2: 'Last: 27 Sep. 2015', text3: 'Next: 2017', rate: '8.3'},
  {image: 'cover_serial_4', title: 'BREAKING BAD', text1: '2018 - 5 SAISONs -', text2: 'Last: 29 Sep. 2013', text3: 'Production complate', rate: '9.5'},
  {image: 'cover_serial_5', title: 'NARCOS', text1: '2016 - 1 SAISON - ', text2: 'Last: 21 Feb. 2016', text3: 'Next: 3 days', rate: '8.4'},
  {image: 'cover_serial_1', title: 'BILLIONS', text1: '2016 - 1 SAISON - ', text2: 'Last: 21 Feb. 2016', text3: 'Next: 3 days', rate: '8.4'},
  {image: 'cover_serial_2', title: 'SUITS', text1: '2011 - 5 SAISONs - ', text2: 'Last: 2 Mar. 2016', text3: 'Next: 2016', rate: '8.7'},
  {image: 'cover_serial_3', title: 'RAY DONOVAN', text1: '2008 - 3 SAISONs - ', text2: 'Last: 27 Sep. 2015', text3: 'Next: 2017', rate: '8.3'},
  {image: 'cover_serial_4', title: 'BREAKING BAD', text1: '2018 - 5 SAISONs -', text2: 'Last: 29 Sep. 2013', text3: 'Production complate', rate: '9.5'},
  {image: 'cover_serial_5', title: 'NARCOS', text1: '2016 - 1 SAISON - ', text2: 'Last: 21 Feb. 2016', text3: 'Next: 3 days', rate: '8.4'}];


let Rows = () => {

  let rows = data.map((el, i) => {

    let bg = i % 2 == 0 ? '#0c0d0f' : '#111215';

    return (
      <View key={i} style={{flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: bg}}>
        <Image style={{width: 200, height: 100}} source={{uri: el.image}}/>
        <View style={{paddingLeft: 20}}>
          <Text style={stylesInline.title}>{el.title}</Text>
          <Text style={stylesInline.text}>{el.text1}<Text style={stylesInline.rate}>{el.rate}</Text></Text>
          <Text style={stylesInline.text}>{el.text2}</Text>
          <Text style={stylesInline.text}>{el.text3}</Text>
        </View>
      </View>
    );
  });

  return (
    <View>
      {rows}
    </View>
  );
};

class TvShows extends React.Component {

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
          prerenderingSiblingsNumber={2}
          tabBarPosition='top'
          renderTabBar={(props) => <ScrollableTabBar {...props} style={{borderWidth: 0}} />}
          style={styles.header}
          tabBarBackgroundColor="rgba(22, 23, 27, 0.9)"
          tabBarInactiveTextColor="#fff"
          tabBarUnderlineStyle={{backgroundColor: '#ef1a51'}}
          tabBarActiveTextColor="#ef1a51">
          <ScrollView tabLabel="For You">
            <Rows />
          </ScrollView>
          <ScrollView tabLabel="Top">

          </ScrollView>
          <ScrollView tabLabel="Action">

          </ScrollView>
          <ScrollView tabLabel="Comedy">

          </ScrollView>
          <ScrollView tabLabel="Family">

          </ScrollView>
        </ScrollableTabView>

        <FooterNav route={this.rootRedirect} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TvShows)
