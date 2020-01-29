import React, { Component } from 'react';
import { View, Text ,StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {Grid, Col, Row} from 'react-native-easy-grid'
import AppIntroSlider from 'react-native-app-intro-slider';
import OnboardingScreens from './Swiper';
import Icon from 'react-native-vector-icons/Feather'

export default class OnBoardingDATA extends Component {

  render() {
    return (
        <Grid style={styles.container}>
        <Row style={styles.header}>
            <Col style={styles.LogoImageContainer}>
                <Image 
                  style={styles.LogoImage}
                  resizeMode='contain'
                  source={ require("../assets/images/CheefLogo.png")}
                />
            </Col>
            <Col style={styles.SkipContainer}>
                  <TouchableOpacity style={styles.SkipContainer} onPress={this.props.onSkip} >
                      <Text style={{textAlign:'right',fontSize:12 , color:'#258B8D'}}> Skip</Text>
                  </TouchableOpacity>
            </Col>
        </Row>
        <Row>
          <Col style={styles.imageContainer}>
              <Image 
                style={styles.image}
                resizeMode='contain'
                source={this.props.image}
                    />
            </Col>
        </Row>
            <Row style={styles.comment}>
                 <Text style= {{  textAlign:"left", fontSize:18, fontFamily:'Brother 1816'}}> No more grocery shopping</Text>
            </Row>
            <Row style={styles.nextButtonWrapper}>
                <TouchableOpacity style= {styles.nextButton}>
                   <Text style= {styles.nextButtonText}> Next <Icon name="play"/></Text>
              </TouchableOpacity>
            </Row>
      </Grid>
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
     marginRight:wp("9%"),
     marginTop:hp("10%"),
     height:hp("10%")
    },
   nextButtonWrapper:{
    marginLeft:wp("65%"),
    marginRight:wp("6%"),
    marginTop:hp("10%")
   },
   nextButton:{
     borderRadius:3,
     borderWidth:2,
     width:wp("18%"),
     height:hp("3%"),
     paddingLeft:wp('2%'),
     paddingRight:wp('2%'),
     borderColor:"#258B8D",
     justifyContent:"center"
   },
   nextButtonText:{
     color:"#258B8D",
     fontSize:12,
   }
});