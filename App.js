import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import OnBoarding from './components/OnBoarding';

export default class App extends Component {
   componentDidMount(){
     StatusBar.setHidden(true)
   }

  render() {
    return (
      <OnBoarding/>
    );
  }
}
