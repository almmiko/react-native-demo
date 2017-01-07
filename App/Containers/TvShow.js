// @flow

import React from 'react'
import {
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/TvShowStyle'
import Carousel from 'react-native-looped-carousel'
import Collapsible from 'react-native-collapsible';


let data = [
  {image: 'br_1', title: 'EP1 Box Cutter', text1: '24 Jul. 2011 ', text2: 'Walt attempts to form a ...'},
  {image: 'br_2', title: 'EP2 Thirty-Eight Snub', text1: '31 Jul. 2011', text2: 'While Walt worries about ...'},
  {image: 'br_3', title: 'EP3 Open House', text1: '31 Jul. 2011', text2: 'While Walt worries about ...'},
  {image: 'br_4', title: 'EP4 Bullet Points', text1: '7 Aug. 2011', text2: 'As Skyler concocts an ...'},
  {image: 'br_5', title: 'EP5 Shotgun', text1: '14 Aug. 2011', text2: 'Jesse rides shotgun with ...'},
  {image: 'br_6', title: 'EP6 Cornered', text1: '21 Aug. 2011', text2: 'Skyler adopts an aloof ...'}];

let stylesInline = StyleSheet.create({
  title: {color: '#fff', fontFamily: 'LatoBold'},
  text: {fontFamily: 'LatoRegular', color: '#676971', fontSize: 11},
});

let Rows = () => {

  let rows = data.map((el, i) => {

    let bg = i % 2 == 0 ? '#0c0d0f' : '#111215';

    return (
      <TouchableOpacity key={i} style={{flex: 1}} activeOpacity={0.8}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: bg}}>
          <Image style={{width: 150, height: 100}} source={{uri: el.image}}/>
          <View style={{paddingLeft: 20}}>
            <Text style={stylesInline.title}>{el.title}</Text>
            <Text style={stylesInline.text}>{el.text1}</Text>
            <Text style={stylesInline.text}>{el.text2}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <View>
      {rows}
    </View>
  );
};

class TvShow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };

    this.toggleDescription = this.toggleDescription.bind(this);
  }

  toggleDescription() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={{ flex: 1 }}>
          <Carousel
            delay={2000}
            style={{height: 250}}
            autoplay
            bullets
            currentPage={0}>
              <View style={{height: 250}}>
                <Image style={{flex: 1, resizeMode: 'cover'}} source={{uri: 'slide_1'}}/>
              </View>
              <View style={{height: 250}}>
                <Image style={{flex: 1, resizeMode: 'cover'}} source={{uri: 'slide_2'}}/>
              </View>
              <View style={{height: 250}}>
                <Image style={{flex: 1, resizeMode: 'cover'}} source={{uri: 'slide_3'}}/>
              </View>
          </Carousel>

          <View style={styles.movieDescContainer}>
            <Text style={styles.movieYear}><Text style={styles.textSpan}>TV-SHOW</Text> 2008 - 2013</Text>
            <Text style={styles.movieTitle}>{'Breaking bad'.toUpperCase()}</Text>
            <Text style={styles.movieGanre}>Drama  -  49min  - Last: 29 Sep. 2013</Text>
            <Text style={styles.movieGanre}>Production completed</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>{'Synopsis:'.toUpperCase()}</Text>
            <Text style={styles.descriptionText}>A chemistry teacher diagnosed with terminal lung cancer teams up with his former student to cook and sell crystal meth.</Text>
            <Text style={[styles.descriptionText, {marginTop: 20}]}><Text style={styles.descriptionTitle}>{'Creator:'.toUpperCase()}</Text> Vince Gilligan</Text>
          </View>

          <TouchableOpacity activeOpacity={0.9} onPress={this.toggleDescription}>
            <View style={{paddingTop: 20, paddingBottom: 20, flex: 1, backgroundColor: '#dedede', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: 'LatoBold', color: '#13171b', fontSize: 13}}>{'+ more details'.toUpperCase()}</Text>
            </View>
          </TouchableOpacity>

          <Collapsible duration={500} collapsed={this.state.collapsed} align="center" style={{height: 190, backgroundColor: '#fff'}}>
            <View style={{flex: 1}}>
              <Text style={{padding: 20, color: '#676971', fontFamily: 'LatoBold'}}>
                A chemistry teacher diagnosed with terminal lung cancer teams up with his former student to cook and sell crystal meth. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque doloremque ea, esse eum provident quaerat voluptates! At consectetur delectus dicta dignissimos earum harum illo, laboriosam, neque placeat saepe voluptatem voluptates?
              </Text>
            </View>
          </Collapsible>

          <Rows />

          <View style={{backgroundColor: '#101317', height: 100, flex: 1, alignItems: 'center',
        justifyContent: 'center',}}>
            <Text style={{color: '#5b5d63', fontFamily: 'LatoBold'}}>{'People who liked this'.toUpperCase()}</Text>
            <Text style={{color: '#fff', fontFamily: 'LatoBold'}}>{'also liked:'.toUpperCase()}</Text>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity style={{flex: 1}} activeOpacity={0.9}>
              <Image  style={{height: 100, flex: 2}} source={{uri: 'cover_serial_1'}} />
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}} activeOpacity={0.9}>
              <Image  style={{height: 100, flex: 2}} source={{uri: 'cover_serial_2'}} />
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity style={{flex: 1}} activeOpacity={0.9}>
              <Image  style={{height: 100, flex: 2}} source={{uri: 'cover_serial_3'}} />
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}} activeOpacity={0.9}>
              <Image  style={{height: 100, flex: 2}} source={{uri: 'cover_serial_5'}} />
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(TvShow)
