import React, { Component } from 'react';
import { View, Text ,StyleSheet, Image, TouchableOpacity , Dimensions} from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {Grid, Col, Row} from 'react-native-easy-grid'
import OnBoardingDATA from './component';
import Swiper from 'react-native-swiper'

export default class OnBoarding extends Component {
  constructor (props) {
    super(props)
    this.swiperRef = swiper => this.swiper = swiper
    this.scrollHandler = page => {
      console.warn('Page ',page,this.swiper)
      this.swiper && this.swiper.scrollBy(page, true)
  }
  }
  state= {
    index:0
  }
  handleSkip= ()=>{
    this.swiper.scrollBy(2, true)
  }

  handleNext= ()=>{
    this.swiper.scrollBy(1, true)
  }

  render() {
    return (
      <>
        <Swiper 
         ref={ this.swiperRef} 
        dotStyle={styles.toggleItem} 
        index= {this.state.index}
        activeDotStyle={styles.activeToggleItem}>
         <OnBoardingDATA
          onSkip= {this.handleSkip}
          onNext= {this.handleNext}
          comment= {"No more grocery shopping"}
          image={require('../assets/images/image1.png')}/>
          <OnBoardingDATA
          onSkip= {this.handleSkip}
          onNext= {this.handleNext}
          comment= {"Select a date and hire a chef"}
          image={require('../assets/images/image2.png')}/>
            <OnBoardingDATA
          onSkip= {this.handleSkip}
          onNext= {this.handleNext}
          comment= {"Affordable and healthy"}
          image={require('../assets/images/image3.png')}/>
        </Swiper>
       </>
    );
  }
}
const styles = StyleSheet.create({
    toggleWrapper:{
      marginTop:hp('10%'),
     justifyContent:'center',
      marginRight:wp("7%")
    },
    toggleItem:{
     backgroundColor:"#BBBDBF", 
     width:wp("5%"), 
     height:5,
     borderRadius:50,
     marginLeft:wp("5%"),
     marginBottom:hp("6%")
    },
    activeToggleItem:{
      backgroundColor:"#258B8D", 
      width:wp("5%"), 
      height:5,
      borderRadius:50,
      marginLeft:wp("5%"),
      marginBottom:hp("6%")
     }
});