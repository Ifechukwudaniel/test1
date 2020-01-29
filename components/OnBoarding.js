import React, { Component } from 'react';
import { View, Text ,StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {Grid, Col, Row} from 'react-native-easy-grid'
import AppIntroSlider from 'react-native-app-intro-slider';
import OnboardingScreens from './Swiper';
import OnBoardingDATA from './component';

export default class OnBoarding extends Component {
  state = {
    skip:true
  }
  handleSkip= ()=>{
    alert("jejdjed")
  }

  handleNext= ()=>{
    alert("jejdjed")
  }

  render() {
    return (
     <OnboardingScreens  >
         <OnBoardingDATA
          onSkip= {this.handleSkip}
          onNext= {this.handleNext}
          image={require('../assets/images/image1.png')}/>
         <OnBoardingDATA 
          onSkip= {this.handleSkip} 
          onNext= {this.handleNext}
          image={require('../assets/images/image2.png')}/>
         <OnBoardingDATA 
           onSkip= {this.handleSkip}  
          onNext= {this.handleNext}
          image={require('../assets/images/image3.png')}/>
     </OnboardingScreens>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        marginLeft:wp("10%"),
        marginRight:wp("10%"),
        marginTop:hp("10%"),
        marginBottom:hp("10%"),
    },
    iconContainer:{
      justifyContent:"center"
    },
    LogoImageContainer:{
      width:wp("24%"),
    },
    LogoImage:{
      width:wp("20%"),
      height:hp("10%"),
      alignSelf:"center"
    },
    header:{
      height:hp("10%"),
      alignContent:"center",
    },
    SkipContainer:{
      justifyContent:"center",
      marginRight:wp("7%")
    },
    image:{
      height:hp("30%"),
      width:wp("65%"),
      alignSelf:"center"
    },
    comment:{
     marginLeft:wp("10%"),
     marginRight:wp("9%")
    },
    dotStyle:{
      width:wp("5%"),
      height:5,
      backgroundColor:'#BBBDBF'
    },
    activeDotStyle:{
      width:wp("5%"),
      height:5,
      backgroundColor:'#258B8D'
    }
});